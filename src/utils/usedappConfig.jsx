import { Sepolia } from "@usedapp/core";

const usedappConfig = {
    readOnlyChainId: Sepolia.chainId,
    readOnlyUrls: {
        [Sepolia.chainId]: import.meta.env.VITE_SEPOLIA_RPC_URL,
    },
};

export default usedappConfig;
