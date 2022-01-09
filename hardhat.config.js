require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_KEY,     // 'YOUR_ALCHEMY_API_URL',
      accounts: [process.env.PRIVATE_KEY],   // 'YOUR_PRIVATE_RINKEBY_ACCOUNT_KEY'
    },
  },
};

// Contract deployed to: 0xcfc7d663c96680E032600EB0D25DAE2EC3A85210
// Contract deployed to: 0x1e0f61D5BABf15a57E822647DC92fb30Fc746FBB
// Contract deployed to: 0xaF67c39BcEb5BB9A5598F33cB2245eF385921C8e  (rinkeby)
// Contract deployed to: 0x9aa5C907Fea20e34C720Ee5e4233168c148ff1BF  (rinkeby)
// Contract deployed to: 0x6034F51fd2244B1eFCBc9600f3377673Aa91BBeE  (rinkeby-mcu)
// Contract deployed to: 0xA5C00a717D747db44614fCa6313b626503bEa7E6  (rinkeby-mcu-black)
// Contract deployed to: 0x85aD07229d36b48F291C82B57e8B481A323Ef11E  (rinkeby-mcu-black-final)