import { Heading, Code, List } from "@chakra-ui/react"

type PropType = JSX.IntrinsicAttributes

export const Markdown = {
  h1: (props: PropType) => <Heading fontSize="4xl" {...props} />,
  h2: (props: PropType) => <Heading fontSize="3xl" {...props} />,
  h3: (props: PropType) => <Heading fontSize="2xl" {...props} />,
  h4: (props: PropType) => <Heading fontSize="xl" {...props} />,
  li: (props: PropType) => <List {...props} />,
  code: (props: PropType) => <Code {...props} />
}
