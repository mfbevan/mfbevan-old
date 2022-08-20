import { Box, Center, Heading, useColorModeValue, VStack, Text } from "@chakra-ui/react"
import { TbRobotOff } from "react-icons/tb"

export const PostNotFound = () => (
  <Center py={2}>
      <VStack>
      <Box>
        <Heading fontSize="lg" color={useColorModeValue("gray.700", "white")} p={6}>
          {`This is not the post you're looking for`}
        </Heading>
      </Box>
      <TbRobotOff size="50" />
      </VStack>
  </Center>
)
