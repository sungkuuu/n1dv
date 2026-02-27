# N1DV Contracts (Foundry)

Smart contracts and Arbitrum mainnet fork tests.

## 1. Install Foundry

If Foundry is not installed:

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

## 2. Install dependencies

From this directory (`contracts/`):

```bash
forge install foundry-rs/forge-std --no-commit
```

## 3. Build

```bash
forge build
```

## 4. Run fork test (Arbitrum)

Uses RPC from `foundry.toml` (`eth_rpc_url` / `[rpc_endpoints]`):

```bash
forge test --match-contract N1DV_SandboxTest -vvv
```

You should see the current Arbitrum block number in the logs.
