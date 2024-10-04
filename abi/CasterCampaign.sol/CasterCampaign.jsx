const casterCampaign = {
    abi: [
        {
            type: "constructor",
            inputs: [
                {
                    name: "_campaignParams",
                    type: "tuple",
                    internalType: "struct CasterTypes.CreateCampaign",
                    components: [
                        {
                            name: "name",
                            type: "string",
                            internalType: "string",
                        },
                        {
                            name: "description",
                            type: "string",
                            internalType: "string",
                        },
                        {
                            name: "campaignType",
                            type: "uint8",
                            internalType: "enum CasterTypes.CampaignType",
                        },
                        {
                            name: "options",
                            type: "tuple[]",
                            internalType: "struct CasterTypes.OptionDetails[]",
                            components: [
                                {
                                    name: "name",
                                    type: "string",
                                    internalType: "string",
                                },
                                {
                                    name: "description",
                                    type: "string",
                                    internalType: "string",
                                },
                            ],
                        },
                        {
                            name: "merkleRoot",
                            type: "bytes32",
                            internalType: "bytes32",
                        },
                        {
                            name: "duration",
                            type: "uint256",
                            internalType: "uint256",
                        },
                    ],
                },
            ],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "batchDelegate",
            inputs: [
                {
                    name: "_users",
                    type: "address[]",
                    internalType: "address[]",
                },
                {
                    name: "_votes",
                    type: "uint256[]",
                    internalType: "uint256[]",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "delegateTo",
            inputs: [
                {
                    name: "_user",
                    type: "address",
                    internalType: "address",
                },
                {
                    name: "_votes",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "getCampaignDescription",
            inputs: [],
            outputs: [
                {
                    name: "description",
                    type: "string",
                    internalType: "string",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getCampaignDuration",
            inputs: [],
            outputs: [
                {
                    name: "duration",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getCampaignName",
            inputs: [],
            outputs: [
                {
                    name: "name",
                    type: "string",
                    internalType: "string",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getCampaignType",
            inputs: [],
            outputs: [
                {
                    name: "campaignType",
                    type: "uint8",
                    internalType: "enum CasterTypes.CampaignType",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getCasterNft",
            inputs: [],
            outputs: [
                {
                    name: "casterNft",
                    type: "address",
                    internalType: "address",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getLastTimestamp",
            inputs: [],
            outputs: [
                {
                    name: "lastTimestamp",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getMerkleRoot",
            inputs: [],
            outputs: [
                {
                    name: "merkleRoot",
                    type: "bytes32",
                    internalType: "bytes32",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getMultipleOptions",
            inputs: [],
            outputs: [
                {
                    name: "multipleOptions",
                    type: "tuple[]",
                    internalType: "struct CasterTypes.MultipleOption[]",
                    components: [
                        {
                            name: "details",
                            type: "tuple",
                            internalType: "struct CasterTypes.OptionDetails",
                            components: [
                                {
                                    name: "name",
                                    type: "string",
                                    internalType: "string",
                                },
                                {
                                    name: "description",
                                    type: "string",
                                    internalType: "string",
                                },
                            ],
                        },
                        {
                            name: "votesFor",
                            type: "uint256",
                            internalType: "uint256",
                        },
                    ],
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getResultMultipleOption",
            inputs: [],
            outputs: [
                {
                    name: "index",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getResultSingleOption",
            inputs: [],
            outputs: [
                {
                    name: "result",
                    type: "uint8",
                    internalType: "enum CasterTypes.SingleOptionResult",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getSingleOption",
            inputs: [],
            outputs: [
                {
                    name: "singleOption",
                    type: "tuple",
                    internalType: "struct CasterTypes.SingleOption",
                    components: [
                        {
                            name: "details",
                            type: "tuple",
                            internalType: "struct CasterTypes.OptionDetails",
                            components: [
                                {
                                    name: "name",
                                    type: "string",
                                    internalType: "string",
                                },
                                {
                                    name: "description",
                                    type: "string",
                                    internalType: "string",
                                },
                            ],
                        },
                        {
                            name: "votesFor",
                            type: "uint256",
                            internalType: "uint256",
                        },
                        {
                            name: "votesAgainst",
                            type: "uint256",
                            internalType: "uint256",
                        },
                    ],
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "mintCampaignId",
            inputs: [
                {
                    name: "_votingPower",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "_merkleProof",
                    type: "bytes32[]",
                    internalType: "bytes32[]",
                },
                {
                    name: "_uri",
                    type: "string",
                    internalType: "string",
                },
            ],
            outputs: [
                {
                    name: "id",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "voteMultipleOption",
            inputs: [
                {
                    name: "_index",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "_votes",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "voteSingleOption",
            inputs: [
                {
                    name: "_isAgainst",
                    type: "bool",
                    internalType: "bool",
                },
                {
                    name: "_votes",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "event",
            name: "Initialized",
            inputs: [
                {
                    name: "camaignParams",
                    type: "tuple",
                    indexed: true,
                    internalType: "struct CasterTypes.CreateCampaign",
                    components: [
                        {
                            name: "name",
                            type: "string",
                            internalType: "string",
                        },
                        {
                            name: "description",
                            type: "string",
                            internalType: "string",
                        },
                        {
                            name: "campaignType",
                            type: "uint8",
                            internalType: "enum CasterTypes.CampaignType",
                        },
                        {
                            name: "options",
                            type: "tuple[]",
                            internalType: "struct CasterTypes.OptionDetails[]",
                            components: [
                                {
                                    name: "name",
                                    type: "string",
                                    internalType: "string",
                                },
                                {
                                    name: "description",
                                    type: "string",
                                    internalType: "string",
                                },
                            ],
                        },
                        {
                            name: "merkleRoot",
                            type: "bytes32",
                            internalType: "bytes32",
                        },
                        {
                            name: "duration",
                            type: "uint256",
                            internalType: "uint256",
                        },
                    ],
                },
                {
                    name: "casterNft",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "VotedMultipleOption",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "index",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "votes",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "VotedSingleOption",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "isAgainst",
                    type: "bool",
                    indexed: true,
                    internalType: "bool",
                },
                {
                    name: "votes",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "VoterRegistered",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "votingPower",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "id",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "merkleProof",
                    type: "bytes32[]",
                    indexed: false,
                    internalType: "bytes32[]",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "VotingPowerBatchDelegated",
            inputs: [
                {
                    name: "by",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "users",
                    type: "address[]",
                    indexed: true,
                    internalType: "address[]",
                },
                {
                    name: "votes",
                    type: "uint256[]",
                    indexed: true,
                    internalType: "uint256[]",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "VotingPowerDelegated",
            inputs: [
                {
                    name: "by",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "to",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "votes",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "error",
            name: "CasterCampaign__ArraySizesDonotMatch",
            inputs: [],
        },
        {
            type: "error",
            name: "CasterCampaign__InvalidOption",
            inputs: [],
        },
        {
            type: "error",
            name: "CasterCampaign__InvalidProof",
            inputs: [],
        },
        {
            type: "error",
            name: "CasterCampaign__InvalidVotingMethod",
            inputs: [
                {
                    name: "campaignType",
                    type: "uint8",
                    internalType: "enum CasterTypes.CampaignType",
                },
            ],
        },
        {
            type: "error",
            name: "CasterCampaign__NoChainedDelegationAllowed",
            inputs: [],
        },
        {
            type: "error",
            name: "CasterCampaign__NotEnoughVotes",
            inputs: [],
        },
        {
            type: "error",
            name: "CasterCampaign__NotRegistered",
            inputs: [],
        },
        {
            type: "error",
            name: "CasterCampaign__VotingCampaignEnded",
            inputs: [],
        },
        {
            type: "error",
            name: "CasterCampaign__VotingCampaignInProgress",
            inputs: [],
        },
        {
            type: "error",
            name: "CasterCampaign__VotingIdAlreadyMinted",
            inputs: [],
        },
    ],
};

export default casterCampaign;
