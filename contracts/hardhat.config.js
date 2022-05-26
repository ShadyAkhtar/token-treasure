require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");
require("hardhat-deploy");
require("dotenv").config();

const { MNEMONIC } = process.env;
const DEFAULT_MNEMONI =
  "vague address accident certain range neither vapor void rural little ensure resource";

const sharedNetworkConfig = {
  accounts: {
    mnemonic: MNEMONIC ?? DEFAULT_MNEMONI,
  },
};

module.exports = {
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    mainnet: {
      ...sharedNetworkConfig,
      url: `https://rpc.xinfin.yodaplus.net`,
    },
    apothem: {
      ...sharedNetworkConfig,
      url: "https://rpc-apothem.xinfin.yodaplus.net",
    },
  },
  watcher: {
    test: {
      tasks: ["test"],
      files: ["./contracts", "./test"],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
  },
  namedAccounts: {
    owner: {
      default: 0,
    },
  },
};
