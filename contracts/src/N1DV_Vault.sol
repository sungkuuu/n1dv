// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/interfaces/IERC20.sol";

/// @notice Minimal Aave V3 Pool interface for supply
interface IPool {
    function supply(address asset, uint256 amount, address onBehalfOf, uint16 referralCode) external;
}

/**
 * @title N1DV_Vault
 * @notice N1DV 자체 금고 — USDC 예치 시 0.3% 트레저리 수수료 후 잔액 전액을 Aave V3에 공급
 */
contract N1DV_Vault {
    IERC20 public immutable asset;
    address public immutable treasury;
    IPool public immutable pool;
    uint256 public constant FEE_BPS = 30; // 0.3% = 30 basis points

    mapping(address => uint256) public balanceOf;

    event Deposit(address indexed user, uint256 amount, uint256 credited, uint256 fee);

    constructor(IERC20 _asset, address _treasury, IPool _pool) {
        require(address(_asset) != address(0) && _treasury != address(0) && address(_pool) != address(0), "Zero address");
        asset = _asset;
        treasury = _treasury;
        pool = _pool;
    }

    /**
     * @notice USDC를 예치한다. 0.3%를 트레저리로 보내고, 나머지 전액을 Aave V3 Pool에 공급.
     */
    function deposit(uint256 amount) external {
        require(amount > 0, "Zero amount");
        uint256 fee = (amount * FEE_BPS) / 10000;
        uint256 toSupply = amount - fee;

        asset.transferFrom(msg.sender, address(this), amount);
        if (fee > 0) {
            require(asset.transfer(treasury, fee), "Treasury transfer failed");
        }
        balanceOf[msg.sender] += toSupply;

        if (toSupply > 0) {
            require(asset.approve(address(pool), toSupply), "Approve failed");
            pool.supply(address(asset), toSupply, address(this), 0);
        }

        emit Deposit(msg.sender, amount, toSupply, fee);
    }
}
