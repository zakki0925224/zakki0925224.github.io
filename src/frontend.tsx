import { createRoot } from "react-dom/client";
import { App } from "./App";
import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

function start() {
    const root = createRoot(document.getElementById("root")!);
    root.render(
        <React.StrictMode>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </React.StrictMode>
    );
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
} else {
    start();
}
