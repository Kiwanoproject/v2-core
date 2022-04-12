const KiwanoSwapPair = artifacts.require("KiwanoSwapPair")

module.exports = async (callback) => {
  console.log("KiwanoSwapPair bytecode hash:", (web3.utils.keccak256(KiwanoSwapPair.bytecode)).substring(2))
  callback()
}