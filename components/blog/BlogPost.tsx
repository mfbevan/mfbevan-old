import { Box, Center, useBreakpoint } from "@chakra-ui/react"
import { ReactNode } from "react"

const BlogPost = ({ children }: { children: ReactNode }) => (
  <Center pt={2} pb={10}>
    <Box
      w={useBreakpoint()}
      rounded="md"
      textAlign="left"
      mx={2}
    >
      {children}
    </Box>
  </Center>
)

export { BlogPost }
