import { chakra, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  ReactLogo,
  GithubLogo,
  ChakraUILogo,
  AndroidLogo,
  CSharpLogo,
  PlayStoreLogo,
  UnityLogo,
  VercelLogo,
  NextLogo,
  ScuderiaLogo,
  SolidityLogo,
  HardhatLogo,
  EthereumLogo,
  PolygonLogo,
  MongoDBLogo,
  Auth0Logo,
  TypescriptLogo,
  JiraLogo,
  ConfluenceLogo,
  NodeLogo,
} from "../../components/icons/PortfolioIcons";

const StyledLink = chakra(Link, {
  baseStyle: {
    textDecoration: "underline",
  },
});

export interface IProject {
  title: ReactNode;
  subtitle: string;
  desc: ReactNode;
  icons: ReactNode[];
}

export const projects: IProject[] = [
  // {
  //   title: (
  //     <Link href="https://nexeth.xyz" target="_blank">
  //       nexeth.xyz
  //     </Link>
  //   ),
  //   subtitle: "🚧 A new tool for Solidity Solution Architecture",
  //   desc: (
  //     <>
  //       (work-in-progress) Nexeth is a zero-code tool for designing high-level
  //       Solidity Solution Architecture. The goal of this project is to develop a
  //       POC that allows users to create high level interfaces in a visual editor
  //       and be able to export them to code to hit the ground running with
  //       Solidity smart contract development. The long-term goal of this project
  //       is to create an editor for Solidity smart contracts as an education and
  //       development tool to allow zero-code smart contract creation with access
  //       to the full EVM feature set, as well as Live-Ops monitoring of deployed
  //       smart contracts. Check it out at{" "}
  //       <StyledLink href="https://nexeth.xyz" target="_blank">
  //         nexeth.xyz
  //       </StyledLink>
  //       .
  //     </>
  //   ),
  //   icons: [
  //     <NextLogo key="next" />,
  //     <ReactLogo key="react" />,
  //     <ChakraUILogo key="chakra" />,
  //     <GithubLogo key="github" />,
  //     <VercelLogo key="vercel" />,
  //     <SolidityLogo key="solidity" />,
  //     <MongoDBLogo key="mongo" />,
  //     <EthereumLogo key="ethereum" />,
  //     <Auth0Logo key="auth-0" />,
  //     <TypescriptLogo key="typescript" />,
  //     <JiraLogo key="jira" />,
  //     <ConfluenceLogo key="confluence" />,
  //     <NodeLogo key="node" />,
  //   ],
  // },
  {
    title: (
      <Link href="https://www.ethdash.xyz" target="_blank">
        ethdash.xyz
      </Link>
    ),
    subtitle: "Ethereum Dashboards Aggregator",
    desc: (
      <>
        All of your favourite Ethereum Dashboards in one place. Thanks to{" "}
        <StyledLink
          href="https://github.com/superphiz/dashboards"
          target="_blank"
        >
          Superphiz
        </StyledLink>{" "}
        for getting this idea started! Check out the site at{" "}
        <StyledLink href="https://www.ethdash.xyz" target="_blank">
          www.ethdash.xyz
        </StyledLink>
        . View the open-source repo and contribute{" "}
        <StyledLink href="https://github.com/mfbevan/eth-dash" target="_blank">
          here
        </StyledLink>
      </>
    ),
    icons: [
      <NextLogo key="next" />,
      <ReactLogo key="react" />,
      <ChakraUILogo key="chakra" />,
      <GithubLogo key="github" />,
      <VercelLogo key="vercel" />,
      <EthereumLogo key="ethereum" />,
    ],
  },
  {
    title: "Scuderia",
    subtitle: "Personal Development Project @ Labrys (2022)",
    desc: (
      <>
        Scuderia is a fully on-chain racing NFT ecosystem that allows minting,
        metadata and image generation, all running on Polygon. Check it out at{" "}
        <StyledLink href="https://scuderia.mfbevan.com" target="_blank">
          scuderia.mfbevan.com
        </StyledLink>{" "}
        or click the 🏎️ above
      </>
    ),
    icons: [
      <ScuderiaLogo key="scuderia" />,
      <NextLogo key="next" />,
      <ReactLogo key="react" />,
      <ChakraUILogo key="chakra" />,
      <GithubLogo key="github" />,
      <VercelLogo key="vercel" />,
      <SolidityLogo key="solidity" />,
      <HardhatLogo key="hardhat" />,
      <EthereumLogo key="ethereum" />,
      <PolygonLogo key="polygon" />,
    ],
  },
  {
    title: "Portfolio",
    subtitle: `What you're seeing right now!`,
    desc: `This site was created using Typescript and Next.js with Chakra UI component library. 
    The site is stored in a Github Repo and served up through Vercel on a custom domain.
    Try out Dark Mode in the Navbar!
    The icons on this page are from Icons8.com`,
    icons: [
      <NextLogo key="next" />,
      <ReactLogo key="react" />,
      <ChakraUILogo key="chakra" />,
      <GithubLogo key="github" />,
      <VercelLogo key="vercel" />,
    ],
  },
  {
    title: "Bit Jump",
    subtitle: "Personal Game Project (May 2020)",
    desc: `A personal project to get a feel for the process of developing a game, right through to releasing it on the Google Play Store. Whilst the plan was never to create a hit game
                for mobile, this project gave me a lot of experience in developing for Android devices, optimizing the mobile experience, and the specifics of deploying an application to a mobile environment.
                Click the Play Store icon above to view the game`,
    icons: [
      <UnityLogo key="unity" />,
      <AndroidLogo key="android" />,
      <CSharpLogo key="c#" />,
      <a
        key="playstore"
        href="https://play.google.com/store/apps/details?id=com.RationalBitStudios.BitJump"
        target="_blank"
        rel="noreferrer"
      >
        <PlayStoreLogo />
      </a>,
    ],
  },
];
