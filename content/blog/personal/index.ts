import { FaEthereum } from "react-icons/fa";
import { GiConwayLifeGlider } from "react-icons/gi";
import { IconType } from "react-icons";

import Post20220821 from "./20220821.mdx";
import Post20220827 from "./20220827.mdx";

console.log(Post20220827);

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
  "20220827": {
    name: "Conway's Game of Life",
    date: new Date("28 Aug 2022"),
    summary:
      "An Ethereum smart contract implementation of John Conway's cellular automaton.",
    post: Post20220827,
    Icon: GiConwayLifeGlider,
  },
};
