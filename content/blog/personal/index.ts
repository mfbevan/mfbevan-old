import { GrRobot } from "react-icons/gr"
import { IconType } from "react-icons"

import Post20220820 from "./20220820.mdx"

export interface IPost {
  name: string
  date: Date
  summary: string
  post(props: any): JSX.Element
  Icon: IconType
}

export const personalPosts: Record<string, IPost> = {
  "20220820": {
    name: "My first post",
    date: new Date("20 Aug 2022"),
    summary: "This is the summary of my first post",
    post: Post20220820,
    Icon: GrRobot,
  },
  "20220821": {
    name: "My second post",
    date: new Date("21 Aug 2022"),
    summary: "This is the summary of my second post",
    post: Post20220820,
    Icon: GrRobot,
  },
  "20220822": {
    name: "My third post",
    date: new Date("22 Aug 2022"),
    summary: "This is the summary of my third post",
    post: Post20220820,
    Icon: GrRobot,
  },
}
