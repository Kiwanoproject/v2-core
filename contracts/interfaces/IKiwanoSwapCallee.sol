pragma solidity >=0.5.0;

interface IKiwanoSwapCallee {
    function KiwanoSwapCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
