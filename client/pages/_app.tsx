import { useState } from "react";
import type { AppProps } from "next/app";
import { BasketContext } from "../context/BasketContext";
import BasketContextProvider from "../context/BasketContextProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme.styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasketContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </BasketContextProvider>
  );
}

export default MyApp;
