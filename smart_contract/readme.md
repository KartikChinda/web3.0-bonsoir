# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

- How to make your frontend talk to your Smart Contract: 
1. If you have your smart contract deployed, you need the address as well as the ABI from (contracts/contractName/contractName.json)
2. Copy both of these and create a utils folder inside of your frontend folder, where in you can paste both these things. 


Note: Smart contract address is: 0x63B1F2fa8aa888Df3f6ca38c4b0E2ccbc0F4f9DE