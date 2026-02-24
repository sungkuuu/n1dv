import { useState, useCallback } from 'react';
import type { Address, Hash } from 'viem';
import type { PublicClient, WalletClient } from 'viem';
import { parseEventLogs } from 'viem';
import { writeContract, waitForTransactionReceipt } from 'viem/actions';
import * as Asset from '@enzymefinance/onyx-sdk/Asset';
import * as Components from '@enzymefinance/onyx-sdk/Components';
import { ERC7540LikeDepositQueueAbi } from '@enzymefinance/onyx-abis';

export interface UseEnzymeDepositParams {
  /** Viem public client (read + waitForTransactionReceipt). */
  publicClient: PublicClient;
  /** Viem wallet client (must have account for sending txs). */
  walletClient: WalletClient;
  /** Deposit asset (e.g. USDC). */
  asset: Address;
  /** ERC7540 deposit queue contract address. */
  depositQueueAddress: Address;
  /** Amount to deposit (in asset's smallest unit, e.g. 6 decimals for USDC). */
  amount: bigint;
  /** Address that will receive the shares (usually the depositor). */
  owner?: Address;
  /** Address that can cancel the request (usually same as owner). */
  controller?: Address;
}

export interface UseEnzymeDepositResult {
  /** Current deposit request ID from the last successful requestDeposit, or null. */
  requestId: bigint | null;
  /** True while approve tx is in progress. */
  isApproving: boolean;
  /** True while requestDeposit tx is in progress. */
  isRequestingDeposit: boolean;
  /** Last error message, or null. */
  error: string | null;
  /** Clear the current error. */
  clearError: () => void;
  /** Approve the deposit queue to spend `amount` of `asset`. Resolves when tx is confirmed. */
  approve: () => Promise<void>;
  /** Submit a deposit request (call after approve). Returns requestId from DepositRequest event. */
  requestDeposit: () => Promise<bigint>;
}

/**
 * React hook for the full Enzyme Onyx deposit flow:
 * 1) Asset.approve – token approval for the deposit queue
 * 2) ERC7540LikeDepositQueue.requestDeposit – submit deposit request
 * 3) waitForTransactionReceipt + parseEventLogs – extract requestId from DepositRequest event
 *
 * Uses viem and @enzymefinance/onyx-sdk. Pass publicClient, walletClient, and deposit config.
 */
export function useEnzymeDeposit(params: UseEnzymeDepositParams): UseEnzymeDepositResult {
  const {
    publicClient,
    walletClient,
    asset,
    depositQueueAddress,
    amount,
    owner: ownerParam,
    controller: controllerParam,
  } = params;

  const [requestId, setRequestId] = useState<bigint | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isApproving, setIsApproving] = useState(false);
  const [isRequestingDeposit, setIsRequestingDeposit] = useState(false);

  const account = walletClient.account;
  const owner = ownerParam ?? account?.address;
  const controller = controllerParam ?? account?.address;

  const clearError = useCallback(() => setError(null), []);

  const approve = useCallback(async () => {
    if (!account) {
      setError('Wallet not connected');
      return;
    }
    setError(null);
    setIsApproving(true);
    try {
      const approveTx = Asset.approve({
        asset,
        spender: depositQueueAddress,
        amount,
      });
      const txParams = {
        ...approveTx.params,
        account,
        chain: walletClient.chain ?? undefined,
      };
      const hash = await writeContract(walletClient, txParams as never);
      await waitForTransactionReceipt(publicClient, { hash });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Approval failed';
      setError(message);
      throw err;
    } finally {
      setIsApproving(false);
    }
  }, [
    account,
    asset,
    depositQueueAddress,
    amount,
    publicClient,
    walletClient,
  ]);

  const requestDeposit = useCallback(async (): Promise<bigint> => {
    if (!account) {
      const msg = 'Wallet not connected';
      setError(msg);
      throw new Error(msg);
    }
    if (owner == null || controller == null) {
      const msg = 'Owner and controller must be set (or connect a wallet)';
      setError(msg);
      throw new Error(msg);
    }
    setError(null);
    setIsRequestingDeposit(true);
    try {
      const depositTx = Components.ERC7540LikeDepositQueue.requestDeposit({
        queueAddress: depositQueueAddress,
        amount,
        controller,
        owner,
      });
      const txParams = {
        ...depositTx.params,
        account,
        chain: walletClient.chain ?? undefined,
      };
      const hash = await writeContract(walletClient, txParams as never) as Hash;
      const receipt = await waitForTransactionReceipt(publicClient, { hash });

      const logs = parseEventLogs({
        abi: ERC7540LikeDepositQueueAbi,
        logs: receipt.logs,
        eventName: 'DepositRequest',
      });

      if (logs.length === 0) {
        const msg = 'DepositRequest event not found in receipt';
        setError(msg);
        throw new Error(msg);
      }

      const id = logs[0]!.args.requestId as bigint;
      setRequestId(id);
      return id;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Deposit request failed';
      setError(message);
      throw err;
    } finally {
      setIsRequestingDeposit(false);
    }
  }, [
    account,
    depositQueueAddress,
    amount,
    controller,
    owner,
    publicClient,
    walletClient,
  ]);

  return {
    requestId,
    isApproving,
    isRequestingDeposit,
    error,
    clearError,
    approve,
    requestDeposit,
  };
}
