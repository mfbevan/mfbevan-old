import { Heading, HeadingProps, OmitCommonProps } from "@chakra-ui/react"
import { DetailedHTMLProps, HTMLAttributes } from "react"

type PropType = JSX.IntrinsicAttributes &
  OmitCommonProps<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, keyof HeadingProps> &
  HeadingProps & { as?: "h2" | undefined }
  
export const Markdown = {
  h1: (props: PropType) => <Heading fontSize="4xl" {...props} />,
  h2: (props: PropType) => <Heading fontSize="3xl" {...props} />,
  h3: (props: PropType) => <Heading fontSize="2xl" {...props} />,
  h4: (props: PropType) => <Heading fontSize="xl" {...props} />,
}
