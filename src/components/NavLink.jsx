import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function NavLink({ text, linkTo }) {
    const { pathname } = useLocation();

    return (
        <ChakraLink
            as={ReactRouterLink}
            to={linkTo}
            fontSize="lg"
            fontWeight={400}
            marginRight={4}
            paddingInline={3}
            paddingBlock={1}
            color={pathname === linkTo ? "pink.500" : "gray.800"}
            _hover={{
                background: "#F4EEEE",
                borderRadius: "50px",
            }}
        >
            {text}
        </ChakraLink>
    );
}
