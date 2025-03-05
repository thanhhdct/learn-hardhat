import { extendEnvironment, HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";

// import "@nomicfoundation/hardhat-ignition-viem";

const { vars } = require("hardhat/config");

const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

// extendEnvironment((hre) => {
//   const web3 = new Web3(hre.network.provider);
//   hre.Web3 = Web3;
//   hre.web3 = web3;
// });

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    },
    hardhat: {
      forking: {
        // url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
        // blockNumber: 14390000
        // equivalent to:
        // url: `https://eth-mainnet.g.alchemy.com/v2`,
        url: `https://eth-sepolia.g.alchemy.com/v2`,
        httpHeaders:{
          "Authorization": `Bearer ${ALCHEMY_API_KEY}`
        }
      }
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  ignition: {
    strategyConfig: {
      create2: {
        salt: "0x0000000000000000000000000000000000000000000000000000000000000000",
      },
    },
  },
};

export default config;
