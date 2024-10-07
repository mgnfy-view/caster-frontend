import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function NavLink({ text, linkTo }) {
    const { pathname } = useLocation();

    return (
        <ChakraLink
            as={ReactRouterLink}
            to={linkTo}
            color={pathname === linkTo ? "pink.500" : "gray.800"}
            fontSize="lg"
            marginRight={2}
            paddingInline={4}
            paddingBlock={1}
            _hover={{
                background: "#F4EEEE",
                borderRadius: "100px",
            }}
        >
            {text}
        </ChakraLink>
    );
}
