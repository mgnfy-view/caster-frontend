import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { DAppProvider } from "@usedapp/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WrapperWithHeader from "./components/WrapperWithHeader.jsx";
import HomePage from "./HomePage.jsx";
import CreateCampaign from "./CreateCampaign.jsx";
import usedappConfig from "./utils/usedappConfig.jsx";
import theme from "./utils/theme.jsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WrapperWithHeader Component={HomePage} />,
    },
    {
        path: "/createCampaign",
        element: <WrapperWithHeader Component={CreateCampaign} />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <DAppProvider config={usedappConfig}>
                <RouterProvider router={router} />
            </DAppProvider>
        </ChakraProvider>
    </React.StrictMode>,
);
