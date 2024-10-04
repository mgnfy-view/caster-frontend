import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rubik";

const theme = extendTheme({
    fonts: {
        rubik: `Rubik, sans-serif`,
    },
    sizes: {
        workSpace: "1270px",
    },
});

export default theme;
