// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/N1DV_Vault.sol";
import "forge-std/interfaces/IERC20.sol";

contract MockUSDC is IERC20 {
    string public name = "Mock USDC";
    string public symbol = "USDC";
    uint8 public decimals = 6;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    function mint(address to, uint256 amount) external {
        totalSupply += amount;
        balanceOf[to] += amount;
        emit Transfer(address(0), to, amount);
    }

    function transfer(address to, uint256 amount) external returns (bool) {
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) external returns (bool) {
        allowance[from][msg.sender] -= amount;
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
        emit Transfer(from, to, amount);
        return true;
    }
}

/**
 * @title N1DV_Sandbox
 * @notice Arbitrum fork sandbox — Mock USDC 예치 및 트레저리 수수료 검증
 */
contract N1DV_SandboxTest is Test {
    MockUSDC public usdc;
    N1DV_Vault public vault;
    address public treasury;
    address public user;

    uint256 constant MINT_AMOUNT = 1_000_000 * 1e6;
    uint256 constant DEPOSIT_AMOUNT = 10_000 * 1e6;
    uint256 constant EXPECTED_FEE_BPS = 30; // 0.3%
    uint256 constant EXPECTED_FEE = (DEPOSIT_AMOUNT * EXPECTED_FEE_BPS) / 10000; // 30 USDC
    uint256 constant EXPECTED_CREDITED = DEPOSIT_AMOUNT - EXPECTED_FEE; // 9970 USDC

    function setUp() public {
        vm.createSelectFork(vm.rpcUrl("arbitrum"));

        treasury = makeAddr("treasury");
        user = makeAddr("user");

        usdc = new MockUSDC();
        usdc.mint(user, MINT_AMOUNT);

        vault = new N1DV_Vault(IERC20(address(usdc)), treasury);

        vm.prank(user);
        usdc.approve(address(vault), DEPOSIT_AMOUNT);
    }

    function test_ArbitrumFork_CurrentBlockNumber() public view {
        uint256 blockNum = block.number;
        console.log("Current Arbitrum fork block number:", blockNum);
        assertTrue(blockNum > 0, "Block number should be > 0 on a live fork");
    }

    function test_Deposit_SendsFeeToTreasury() public {
        uint256 treasuryBefore = usdc.balanceOf(treasury);
        assertEq(treasuryBefore, 0, "Treasury should start with 0 USDC");

        vm.prank(user);
        vault.deposit(DEPOSIT_AMOUNT);

        uint256 treasuryAfter = usdc.balanceOf(treasury);
        assertEq(treasuryAfter, EXPECTED_FEE, "Treasury should receive 0.3% fee (30 USDC)");
        assertEq(vault.balanceOf(user), EXPECTED_CREDITED, "User credited balance should be 9970 USDC");
    }
}
