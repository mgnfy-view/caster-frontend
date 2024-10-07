import { useEthers } from "@usedapp/core";

import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function ConnectOrDisconnectButton({ cue }) {
    const { activateBrowserWallet, deactivate } = useEthers();

    return cue === "connect" ? (
        <PrimaryButton text="CONNECT" clickAction={activateBrowserWallet} />
    ) : (
        <SecondaryButton text="DISCONNECT" clickAction={deactivate} />
    );
}
