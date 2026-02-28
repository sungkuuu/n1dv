// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/interfaces/IERC20.sol";

/**
 * @title N1DV_Vault
 * @notice N1DV 자체 금고 — USDC 예치 시 넥서스원 트레저리로 수수료(기본 0.3%) 즉시 전송
 */
contract N1DV_Vault {
    IERC20 public immutable asset;
    address public immutable treasury;
    uint256 public constant FEE_BPS = 30; // 0.3% = 30 basis points

    mapping(address => uint256) public balanceOf;

    event Deposit(address indexed user, uint256 amount, uint256 credited, uint256 fee);

    constructor(IERC20 _asset, address _treasury) {
        require(address(_asset) != address(0) && _treasury != address(0), "Zero address");
        asset = _asset;
        treasury = _treasury;
    }

    /**
     * @notice USDC를 예치한다. 총액의 FEE_BPS(0.3%)를 트레저리로 보내고 나머지를 유저 잔액으로 적립.
     */
    function deposit(uint256 amount) external {
        require(amount > 0, "Zero amount");
        uint256 fee = (amount * FEE_BPS) / 10000;
        uint256 credited = amount - fee;

        asset.transferFrom(msg.sender, address(this), amount);
        if (fee > 0) {
            asset.transfer(treasury, fee);
        }
        balanceOf[msg.sender] += credited;

        emit Deposit(msg.sender, amount, credited, fee);
    }
}
