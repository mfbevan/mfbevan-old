import { Box, Center, useColorModeValue } from "@chakra-ui/react"
import { ReactNode } from "react"

const BlogPost = ({ children }: { children: ReactNode }) => (
  <Center py={2}>
    <Box
      maxW="3xl"
      w="full"
      boxShadow="xl"
      rounded="md"
      textAlign="left"
      mx={2}
      p={8}
      bg={useColorModeValue("white", "gray.700")}
    >
      {children}
    </Box>
  </Center>
)

export { BlogPost }
