import "../styles/globals.css";
import "@code-hike/mdx/dist/index.css";
import "@fontsource/merriweather";
import "@fontsource/montserrat";
import type { AppProps } from "next/app";
import { Navbar } from "../components/navigation";
import { ChakraProvider } from "@chakra-ui/react";
import { Metadata } from "../components/providers";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Metadata />
      <Component {...pageProps} />
      <Navbar />
    </ChakraProvider>
  );
}

export default MyApp;
