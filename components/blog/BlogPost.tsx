import { Box, Center, useBreakpoint } from "@chakra-ui/react"
import { ReactNode } from "react"

const BlogPost = ({ children }: { children: ReactNode }) => (
  <Center pt={2} pb={10}>
    <Box
      w="2xl"
      rounded="md"
      textAlign="left"
      mx={4}
    >
      {children}
    </Box>
  </Center>
)

export { BlogPost }
