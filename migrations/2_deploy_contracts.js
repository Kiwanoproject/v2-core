const Factory = artifacts.require("KiwanoSwapFactory.sol");

module.exports = async function (deployer, network, addresses) {
 await deployer.deploy(Factory, addresses[0]);
 const factory = await Factory.deployed();
let token1address, token2address;
 if (network === 'bsc') {
     token1address = '';
     token2address = '';
     await factory.createPair();

 }
};
