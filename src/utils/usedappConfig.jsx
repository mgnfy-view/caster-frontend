import { Hardhat } from "@usedapp/core";

const usedappConfig = {
    readOnlyChainId: Hardhat.chainId,
    readOnlyUrls: {
        [Hardhat.chainId]: Hardhat.rpcUrl,
    },
};

export default usedappConfig;
