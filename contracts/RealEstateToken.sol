// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import {CrossChainBurnAndMintERC1155} from "./CrossChainBurnAndMintERC1155.sol";
import {RealEstatePriceDetails} from "./RealEstatePriceDetails.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

// Panagiotis Matsinopoulos copied from https://cll-devrel.gitbook.io/tokenized-rwa-bootcamp-2024/day-1/exercise-1-cross-chain-real-estate#create-realestatetoken.sol
// as part of the Tokenized RWA Bootcamp Oct 2024
//
contract RealEstateToken is
    CrossChainBurnAndMintERC1155,
    RealEstatePriceDetails
{
    /**
     *
     *  ██████╗ ███████╗ █████╗ ██╗         ███████╗███████╗████████╗ █████╗ ████████╗███████╗    ████████╗ ██████╗ ██╗  ██╗███████╗███╗   ██╗
     *  ██╔══██╗██╔════╝██╔══██╗██║         ██╔════╝██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝    ╚══██╔══╝██╔═══██╗██║ ██╔╝██╔════╝████╗  ██║
     *  ██████╔╝█████╗  ███████║██║         █████╗  ███████╗   ██║   ███████║   ██║   █████╗         ██║   ██║   ██║█████╔╝ █████╗  ██╔██╗ ██║
     *  ██╔══██╗██╔══╝  ██╔══██║██║         ██╔══╝  ╚════██║   ██║   ██╔══██║   ██║   ██╔══╝         ██║   ██║   ██║██╔═██╗ ██╔══╝  ██║╚██╗██║
     *  ██║  ██║███████╗██║  ██║███████╗    ███████╗███████║   ██║   ██║  ██║   ██║   ███████╗       ██║   ╚██████╔╝██║  ██╗███████╗██║ ╚████║
     *  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝    ╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝       ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝
     *
     */
    constructor(
        string memory uri_,
        address ccipRouterAddress,
        address linkTokenAddress,
        uint64 currentChainSelector,
        address functionsRouterAddress
    )
        CrossChainBurnAndMintERC1155(
            uri_,
            ccipRouterAddress,
            linkTokenAddress,
            currentChainSelector
        )
        RealEstatePriceDetails(functionsRouterAddress)
    {}
}
