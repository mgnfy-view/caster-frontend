const casterFactory = {
    abi: [
        {
            type: "constructor",
            inputs: [
                {
                    name: "_feeReceiver",
                    type: "address",
                    internalType: "address",
                },
            ],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "changeFeeReceiver",
            inputs: [
                {
                    name: "_newFeeReceiver",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "createVotingCampaign",
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
            outputs: [
                {
                    name: "votingCampaign",
                    type: "address",
                    internalType: "address",
                },
            ],
            stateMutability: "payable",
        },
        {
            type: "function",
            name: "getAllCampaigns",
            inputs: [],
            outputs: [
                {
                    name: "allCampaigns",
                    type: "address[]",
                    internalType: "address[]",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getCampaignFromHash",
            inputs: [
                {
                    name: "_hash",
                    type: "bytes32",
                    internalType: "bytes32",
                },
            ],
            outputs: [
                {
                    name: "campaign",
                    type: "address",
                    internalType: "address",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getCampaignMaxDuration",
            inputs: [],
            outputs: [
                {
                    name: "maxDuration",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            stateMutability: "pure",
        },
        {
            type: "function",
            name: "getFee",
            inputs: [],
            outputs: [
                {
                    name: "fee",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            stateMutability: "pure",
        },
        {
            type: "function",
            name: "getFeeReceiver",
            inputs: [],
            outputs: [
                {
                    name: "feeReceiver",
                    type: "address",
                    internalType: "address",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getNonceForUser",
            inputs: [
                {
                    name: "_user",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [
                {
                    name: "nonce",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "owner",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "renounceOwnership",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "transferOwnership",
            inputs: [
                {
                    name: "newOwner",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "event",
            name: "FeeReceiverChanged",
            inputs: [
                {
                    name: "feeReceiver",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "OwnershipTransferred",
            inputs: [
                {
                    name: "previousOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "newOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "VotingCampaignCreated",
            inputs: [
                {
                    name: "creator",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "campaignParams",
                    type: "tuple",
                    indexed: false,
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
                    name: "campaignAddress",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "merkleRoot",
                    type: "bytes32",
                    indexed: true,
                    internalType: "bytes32",
                },
                {
                    name: "campaignHash",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32",
                },
            ],
            anonymous: false,
        },
        {
            type: "error",
            name: "CasterFactory__InsufficientFeeSupplied",
            inputs: [],
        },
        {
            type: "error",
            name: "CasterFactory__InvalidVotingCampaignParams",
            inputs: [],
        },
        {
            type: "error",
            name: "CasterFactory__TransferFailed",
            inputs: [],
        },
        {
            type: "error",
            name: "OwnableInvalidOwner",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    internalType: "address",
                },
            ],
        },
        {
            type: "error",
            name: "OwnableUnauthorizedAccount",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    internalType: "address",
                },
            ],
        },
    ],
};

export default casterFactory;
