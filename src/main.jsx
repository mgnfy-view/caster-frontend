import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { DAppProvider } from "@usedapp/core";

import Header from "./components/Header.jsx";
import usedappConfig from "./utils/usedappConfig.jsx";
import theme from "./utils/theme.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <DAppProvider config={usedappConfig}>
                <Header />
                <App />
            </DAppProvider>
        </ChakraProvider>
    </React.StrictMode>,
);
