import { FaEthereum } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
import { IconType } from "react-icons";

import Post20220821 from "./20220821.mdx";
import Post20220906 from "./20220906.mdx";

export interface IPost {
  name: string;
  date: Date;
  summary: string;
  post(props: any): JSX.Element;
  Icon: IconType;
}

export const personalPosts: Record<string, IPost> = {
  "20220821": {
    name: "mfbevan.eth",
    date: new Date("21 Aug 2022"),
    summary: "A bit about me, and how I got here.",
    post: Post20220821,
    Icon: FaEthereum,
  },
  "20220906": {
    name: "Look but don't touch",
    date: new Date("06 Sep 2022"),
    summary: "The under-used power of view functions in Solidity.",
    post: Post20220906,
    Icon: GiCyberEye,
  },
};
