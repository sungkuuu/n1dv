// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "forge-std/console.sol";

/**
 * @title N1DV_Sandbox
 * @notice Arbitrum mainnet fork sandbox — verifies RPC connection and block access.
 */
contract N1DV_SandboxTest is Test {
    function setUp() public {
        // Use fork URL from foundry.toml [profile.default] eth_rpc_url
        vm.createSelectFork(vm.rpcUrl("arbitrum"));
    }

    function test_ArbitrumFork_CurrentBlockNumber() public view {
        uint256 blockNum = block.number;
        console.log("Current Arbitrum fork block number:", blockNum);
        assertTrue(blockNum > 0, "Block number should be > 0 on a live fork");
    }
}
