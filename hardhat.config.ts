import * as envEnc from "@chainlink/env-enc";
envEnc.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { INFURA_API_KEY, PRIVATE_KEY } from "./constants";

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
    },
  },
};

export default config;
