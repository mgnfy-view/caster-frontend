import { Box } from "@chakra-ui/react";

import Header from "./Header";

export default function WrapperWithHeader({ Component }) {
    return (
        <Box>
            <Header />
            <Component />
        </Box>
    );
}
