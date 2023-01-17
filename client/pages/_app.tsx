import { useState } from "react";
import type { AppProps } from "next/app";
import { BasketContext } from "../context/BasketContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme.styles";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [basketQuantity, setBasketQuantity] = useState<number>(0);
  return (
    <BasketContext.Provider
      value={{
        basketQuantity,
        setBasketQuantity,
      }}
    >
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </BasketContext.Provider>
  );
}

export default MyApp;
