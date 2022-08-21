import { Box, Center, Heading, Link, useColorModeValue, Text, HStack, Spacer, useBreakpoint } from "@chakra-ui/react"
import { IPost } from "../../content/blog/personal"
import { BsChevronDoubleRight } from "react-icons/bs"

const BlogPostSummary = ({ postKey, post }: { postKey: string; post: IPost }) => {
  const { name, date, summary, Icon } = post

  return (
    <Center py={2}>
      <Link href={`/blog/${postKey}`}>
        <Box
          w={useBreakpoint()}
          boxShadow="xl"
          rounded="md"
          textAlign="left"
          mx={2}
          p={4}
          bg={useColorModeValue("white", "gray.700")}
        >
          <HStack spacing={4}>
            <Icon size={30} opacity="0.5" />
            <Box>
              <Heading fontSize="2xl" fontWeight={500}>
                {name}
              </Heading>
              <Heading fontSize="xs" fontWeight={500}>
                {date.toDateString()}
              </Heading>
              <Text>{summary}</Text>
            </Box>
            <Spacer />

            <BsChevronDoubleRight />
          </HStack>
        </Box>
      </Link>
    </Center>
  )
}

export { BlogPostSummary }
