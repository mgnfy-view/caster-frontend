import { Box, Flex, Heading, Spacer, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useEthers } from "@usedapp/core";

import NavLink from "./NavLink";
import ConnectOrDisconnectButton from "./ConnectOrDisconnectButton";

export default function Header() {
    const { account } = useEthers();

    return (
        <Box>
            <Flex maxWidth="workSpace" alignItems="center" marginInline="auto" paddingInline={10} paddingBlock={4}>
                <Heading size="md" color="gray.800">
                    <ChakraLink as={ReactRouterLink} to="/" _hover={{}}>
                        Caster
                    </ChakraLink>
                </Heading>
                <Spacer />
                <Flex>
                    <NavLink text="Home" linkTo="/" />
                    <NavLink text="Create" linkTo="/createCampaign" />
                    <NavLink text="Explore" linkTo="/exploreCampaigns" />
                </Flex>
                <Spacer />
                {account ? (
                    <Text
                        fontSize="lg"
                        fontWeight={400}
                        marginRight={4}
                        paddingInline={3}
                        paddingBlock={1}
                        color="gray.600"
                        background="#EDF2F7"
                        borderRadius="50px"
                    >
                        {account.slice(0, 4) + "..." + account.slice(account.length - 4, account.length)}
                    </Text>
                ) : null}
                {account ? <ConnectOrDisconnectButton cue="disconnect" /> : <ConnectOrDisconnectButton cue="connect" />}
            </Flex>
        </Box>
    );
}
