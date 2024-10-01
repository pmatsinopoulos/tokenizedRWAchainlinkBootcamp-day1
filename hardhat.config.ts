import * as envEnc from "@chainlink/env-enc";
envEnc.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { ETHERSCAN_API_KEY, INFURA_API_KEY, PRIVATE_KEY } from "./constants";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris",
    },
  },
  networks: {
    avalancheFuji: {
      url: `https://avalanche-fuji.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      ccip: {
        routerAddress: "0xF694E193200268f9a4868e4Aa017A0118C9a8177",
        linkTokenAddress: "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846",
        chainSelector: "14767482510784806043",
      },
      chainLinkFunctions: {
        routerAddress: "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0",
      },
      chainId: 43113,
    },
    baseSepolia: {
      url: `https://base-sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      ccip: {
        routerAddress: "0xD3b06cEbF099CE7DA4AcCf578aaebFDBd6e88a93",
        linkTokenAddress: "0xE4aB69C077896252FAFBD49EFD26B5D171A32410",
        chainSelector: "10344971235874465080",
      },
      chainLinkFunctions: {
        routerAddress: "0xf9B8fc078197181C841c296C876945aaa425B278",
      },
      chainId: 84532,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    customChains: [
      {
        network: "baseSepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
    ],
  },
};

export default config;
