import { Heading, Code, Box, Text, Link, Image } from "@chakra-ui/react";

type PropType = JSX.IntrinsicAttributes;

const sharedProps = {
  py: 2,
};

const Blockquote = (props: PropType) => (
  <Box pl={3} pr={2} ml={2} borderLeft="4px" borderColor="gray.300" bgColor="gray.50">
    <Text {...props} />
  </Box>
);

export const Markdown = {
  h1: (props: PropType) => (
    <Heading fontSize="4xl" {...sharedProps} {...props} />
  ),
  h2: (props: PropType) => (
    <Heading fontSize="3xl" {...sharedProps} {...props} />
  ),
  h3: (props: PropType) => (
    <Heading fontSize="2xl" {...sharedProps} {...props} />
  ),
  h4: (props: PropType) => (
    <Heading fontSize="xl" {...sharedProps} {...props} />
  ),
  p: (props: PropType) => <Text {...sharedProps} {...props} />,
  li: (props: PropType) => (
    <Box pl={8}>
      <li {...props} />
    </Box>
  ),
  ul: (props: PropType) => (
    <Box>
      <ul {...props} />
    </Box>
  ),
  code: (props: PropType) => <Code {...props} />,
  a: (props: PropType) => <Link isExternal textColor="blue.400" {...props} />,
  blockquote: (props: PropType) => <Blockquote {...props} />,
  img: (props: PropType) => <Image {...props} alt={"mdx-image"} mx="auto"/>
};
