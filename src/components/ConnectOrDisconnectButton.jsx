import { useEthers } from "@usedapp/core";

import PrimaryButton from "./PrimaryButton";

export default function ConnectOrDisconnectButton({ cue }) {
    const { activateBrowserWallet, deactivate } = useEthers();

    return cue === "connect" ? (
        <PrimaryButton text="CONNECT" clickAction={activateBrowserWallet} />
    ) : (
        <PrimaryButton text="DISCONNECT" clickAction={deactivate} />
    );
}
