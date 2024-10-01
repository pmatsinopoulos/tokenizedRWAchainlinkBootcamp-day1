import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import hre from "hardhat";

const RealEstateTokenModule = buildModule("RealEstateTokenModule", (m) => {
  const uri_ = "";
  const ccipRouterAddress = hre.network.config.ccip.routerAddress;
  const linkTokenAddress = hre.network.config.ccip.linkTokenAddress;
  const currentChainSelector = hre.network.config.ccip.chainSelector;
  const functionsRouterAddress =
    hre.network.config.chainLinkFunctions.routerAddress;

  const realEstateToken = m.contract(
    "RealEstateToken",
    [
      uri_,
      ccipRouterAddress,
      linkTokenAddress,
      currentChainSelector,
      functionsRouterAddress,
    ],
    {
      value: 0n,
    }
  );

  return { realEstateToken };
});

export default RealEstateTokenModule;
