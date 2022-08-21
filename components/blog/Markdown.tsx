import { Heading, Code, Box, Text, Link } from "@chakra-ui/react"

type PropType = JSX.IntrinsicAttributes

const sharedProps = {
  py: 2,
}

export const Markdown = {
  h1: (props: PropType) => <Heading fontSize="4xl" {...sharedProps} {...props} />,
  h2: (props: PropType) => <Heading fontSize="3xl" {...sharedProps} {...props} />,
  h3: (props: PropType) => <Heading fontSize="2xl" {...sharedProps} {...props} />,
  h4: (props: PropType) => <Heading fontSize="xl" {...sharedProps} {...props} />,
  p: (props: PropType) => <Text {...sharedProps} {...props} />,
  li: (props: PropType) => <Box pl={8}><li {...props} /></Box>,
  ul: (props: PropType) => <Box pl={8}><ul {...props} /></Box>,
  code: (props: PropType) => <Code {...props} />,
  a: (props: PropType) => <Link isExternal textColor="blue.400" {...props} />
}
