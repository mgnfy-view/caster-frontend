import { Box, Flex, Heading, Spacer, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { shortenAddress, useEthers } from "@usedapp/core";

import NavLink from "./NavLink";
import ConnectOrDisconnectButton from "./ConnectOrDisconnectButton";
import routes from "../utils/routes";

export default function Header() {
    const { account } = useEthers();

    return (
        <Box>
            <Flex maxWidth="workSpace" alignItems="center" marginInline="auto" paddingInline={12} paddingBlock={4}>
                <Heading size="md" color="gray.800">
                    <ChakraLink as={ReactRouterLink} to={routes.home} _hover={{}}>
                        Caster
                    </ChakraLink>
                </Heading>
                <Spacer />
                <Flex>
                    <NavLink text="Home" linkTo={routes.home} />
                    <NavLink text="Create" linkTo={routes.createCampaign} />
                    <NavLink text="Explore" linkTo={routes.explore} />
                </Flex>
                <Spacer />
                {account ? (
                    <Text
                        color="gray.600"
                        background="#EDF2F7"
                        fontSize="lg"
                        marginRight={4}
                        paddingInline={4}
                        paddingBlock={1}
                        borderRadius="100px"
                    >
                        {shortenAddress(account)}
                    </Text>
                ) : null}
                {account ? <ConnectOrDisconnectButton cue="disconnect" /> : <ConnectOrDisconnectButton cue="connect" />}
            </Flex>
        </Box>
    );
}
