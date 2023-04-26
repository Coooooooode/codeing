const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = "priority episode lyrics evolve deer clock fire detail grape grab proof slogan";
module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.16'
    }
  },
  networks: {
    loc_development_development: {
      network_id: "5777",
      port: 9545,
      host: "127.0.0.1"
    },
    inf_solidity_blog_app_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/b1aa93cfa86744d1a2d126ad7efa7b81")
    }
  }
};
