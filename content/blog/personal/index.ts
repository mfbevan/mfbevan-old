import Post20220820 from "./20220820.mdx"

interface IPost {
  name: string
  date: Date
  post(props: any): JSX.Element
}

export const personalPosts: Record<string, IPost> = {
  "20220820": {
    name: "My first post",
    date: new Date("20 Aug 2022"),
    post: Post20220820,
  },
}
