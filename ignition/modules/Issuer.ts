import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import hre from "hardhat";

const IssuerModule = buildModule("IssuerModule", (m) => {
  const deployedAddressesPath = `../deployments/chain-${hre.network.config.chainId}/deployed_addresses.json`;
  const deployedAddresses = require(deployedAddressesPath);
  console.debug("deployedAddresses", deployedAddresses);

  const realEstateToken =
    deployedAddresses["RealEstateTokenModule#RealEstateToken"];

  console.debug("realEstateToken", realEstateToken);

  const functionsRouterAddress =
    hre.network.config.chainLinkFunctions.routerAddress;

  const issuer = m.contract(
    "Issuer",
    [realEstateToken, functionsRouterAddress],
    {
      value: 0n,
    }
  );

  return { issuer };
});

export default IssuerModule;
