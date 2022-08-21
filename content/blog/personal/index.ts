import { FaEthereum } from "react-icons/fa"
import { IconType } from "react-icons"

import Post20220821 from "./20220821.mdx"

export interface IPost {
  name: string
  date: Date
  summary: string
  post(props: any): JSX.Element
  Icon: IconType
}

export const personalPosts: Record<string, IPost> = {
  "20220821": {
    name: "mfbevan.eth",
    date: new Date("21 Aug 2022"),
    summary: "Bachelors to Blockchain",
    post: Post20220821,
    Icon: FaEthereum,
  },
}
