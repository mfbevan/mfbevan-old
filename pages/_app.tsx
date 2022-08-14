import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/navigation";
import { ChakraProvider } from "@chakra-ui/react";
import { Metadata } from "../components/providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
        <Metadata />
        <Navbar />
        <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
