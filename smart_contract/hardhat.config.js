require('dotenv').config()

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
console.log(process.env.ACCOUNT_KEY)
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/5NEVtFEGlcxy5G1WSJCkVg55w8-pc1mo',
      accounts: [process.env.ACCOUNT_KEY]

    }
  }
};
