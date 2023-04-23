import {
  Box,
  Heading,
  useColorModeValue,
  Text,
  HStack,
  Icon as ChakraIcon,
  useBreakpoint,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { IPost } from "../../content/blog/personal";
import { ChevronRightIcon } from "@chakra-ui/icons";

const BlogPostSummary = ({
  postKey,
  post,
}: {
  postKey: string;
  post: IPost;
}) => {
  const { name, date, summary, Icon } = post;

  return (
    <Box
      w="90%"
      minW={useBreakpoint()}
      boxShadow="md"
      rounded="md"
      textAlign="left"
      p={4}
      bg={useColorModeValue("white", "gray.700")}
      border="1px solid"
      borderColor={useColorModeValue("gray.50", "gray.700")}
    >
      <Link href={`/blog/${postKey}`}>
        <Flex
          role={"group"}
          display={"block"}
          p={2}
          rounded={"md"}
          _hover={{
            bg: useColorModeValue("blue.50", "gray.900"),
            cursor: "pointer",
          }}
        >
          <HStack align={"center"} w="full">
            <ChakraIcon
              color={"blue.500"}
              _groupHover={{ opacity: "0.6" }}
              opacity="0.2"
              w={7}
              h={7}
              as={Icon}
            />
            <Box>
              <Heading
                fontSize="xl"
                transition={"all .3s ease"}
                _groupHover={{ color: "blue.500" }}
                fontWeight={500}
              >
                {name}
              </Heading>
              <Heading fontSize="xs" fontWeight={500}>
                {date.toDateString()}
              </Heading>
              <Text fontSize={"sm"}>{summary}</Text>
            </Box>
            <Flex
              transition={"all .3s ease"}
              transform={"translateX(-10px)"}
              opacity={0}
              _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
              justify={"flex-end"}
              align={"center"}
              flex={1}
            >
              <ChakraIcon
                color={"blue.500"}
                w={5}
                h={5}
                as={ChevronRightIcon}
              />
            </Flex>
          </HStack>
        </Flex>
      </Link>
    </Box>
  );
};

export { BlogPostSummary };
