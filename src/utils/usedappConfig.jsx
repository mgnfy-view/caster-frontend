import { Hardhat, Sepolia } from "@usedapp/core";

function getUsedappConfig() {
    let chainId;
    let rpcUrl;

    if (import.meta.env.VITE_ENVIRONMENT === "dev") {
        chainId = Hardhat.chainId;
        rpcUrl = Hardhat.rpcUrl;
    } else if (import.meta.env.VITE_ENVIRONMENT === "production") {
        chainId = Sepolia.chainId;
        rpcUrl = import.meta.env.VITE_SEPOLIA_RPC_URL;
    } else {
        throw new Error("Invalid environment");
    }

    const usedappConfig = {
        readOnlyChainId: chainId,
        readOnlyUrls: {
            [Hardhat.chainId]: rpcUrl,
        },
    };

    return usedappConfig;
}

const usedappConfig = getUsedappConfig();

export default usedappConfig;
