// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/N1DV_Vault.sol";
import "forge-std/interfaces/IERC20.sol";

// Arbitrum One mainnet addresses (checksummed)
address constant ARB_USDC = 0xaf88d065e77c8cC2239327C5EDb3A432268e5831;
address constant AAVE_V3_POOL = 0x794a61358D6845594F94dc1DB02A252b5b4814aD;
address constant A_ARB_USDC = 0x625E7708f30cA75bfd92586e17077590C60eb4cD;

/// Mock aToken: mints to onBehalfOf when Pool calls supply
contract MockAToken is IERC20 {
    address public minter;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    uint256 public totalSupply;
    string public name = "Mock aArbUSDC";
    string public symbol = "maUSDC";
    uint8 public decimals = 6;

    function setMinter(address _minter) external {
        require(minter == address(0), "already set");
        minter = _minter;
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == minter, "only minter");
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

/// Mock Aave Pool: pulls asset and mints aToken to onBehalfOf
contract MockPool is IPool {
    IERC20 public asset;
    MockAToken public aToken;

    constructor(IERC20 _asset, MockAToken _aToken) {
        asset = _asset;
        aToken = _aToken;
    }

    function supply(address asset_, uint256 amount, address onBehalfOf, uint16) external override {
        IERC20(asset_).transferFrom(msg.sender, address(this), amount);
        aToken.mint(onBehalfOf, amount);
    }
}

/**
 * @title N1DV_Sandbox
 * @notice Arbitrum fork — USDC 예치, 트레저리 수수료, Pool 공급 및 aToken 발급 검증 (Mock Pool으로 Aave 동작 시뮬)
 */
contract N1DV_SandboxTest is Test {
    N1DV_Vault public vault;
    MockPool public mockPool;
    MockAToken public mockAToken;
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

        deal(ARB_USDC, user, MINT_AMOUNT);

        mockAToken = new MockAToken();
        mockPool = new MockPool(IERC20(ARB_USDC), mockAToken);
        mockAToken.setMinter(address(mockPool));

        vault = new N1DV_Vault(
            IERC20(ARB_USDC),
            treasury,
            IPool(address(mockPool))
        );

        vm.prank(user);
        IERC20(ARB_USDC).approve(address(vault), DEPOSIT_AMOUNT);
    }

    function test_ArbitrumFork_CurrentBlockNumber() public view {
        uint256 blockNum = block.number;
        console.log("Current Arbitrum fork block number:", blockNum);
        assertTrue(blockNum > 0, "Block number should be > 0 on a live fork");
    }

    function test_Deposit_SendsFeeToTreasury() public {
        uint256 treasuryBefore = IERC20(ARB_USDC).balanceOf(treasury);
        assertEq(treasuryBefore, 0, "Treasury should start with 0 USDC");

        vm.prank(user);
        vault.deposit(DEPOSIT_AMOUNT);

        uint256 treasuryAfter = IERC20(ARB_USDC).balanceOf(treasury);
        assertEq(treasuryAfter, EXPECTED_FEE, "Treasury should receive 0.3% fee (30 USDC)");
        assertEq(vault.balanceOf(user), EXPECTED_CREDITED, "User credited balance should be 9970 USDC");

        uint256 vaultATokenBalance = mockAToken.balanceOf(address(vault));
        assertGt(vaultATokenBalance, 0, "Vault should hold aToken (supply receipt) after supplying to Pool");
    }
}
