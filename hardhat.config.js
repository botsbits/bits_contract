require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      chaiId: 4,
      maxFeePerGas: 10000000000, // 10 GWei
      maxPriorityFeePerGas: 5000000000 // 5 GWei
    },
    mainnet: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      chaiId: 1
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
};
