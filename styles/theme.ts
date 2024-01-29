import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Merriweather",
  },
  semanticTokens: {
    colors: {
      pageBg: { default: "gray.50", _dark: "gray.900" },
    },
  },
  styles: {
    global: {
      body: {
        bg: "pageBg",
      },
    },
  },
  shadows: {
    outline: "0 0 0 1px accent.400",
  },
});
