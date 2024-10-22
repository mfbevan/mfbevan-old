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
  image: string;
}

export const personalProjects: IProject[] = [
  {
    title: (
      <Link href="https://explorer.nexeth.xyz" target="_blank">
        Nexeth Explorer
      </Link>
    ),
    subtitle: "Blockchain Explorer. ⚡️ Supercharged ⚡️.",
    desc: (
      <>
        Nexeth unifies your search across Ethereum and L2s (including testnets).
        Explore networks, tokens, NFTs, and transactions – all from a single
        powerful interface. If you prefer Etherscan or BlockScout, you are only
        a click away via a search command.
        <StyledLink
          href="https://explorer.nexeth.xyz/"
          target="_blank"
          pl="5px"
        >
          explorer.nexeth.xyz
        </StyledLink>
      </>
    ),
    icons: [
      <NextLogo key="next" />,
      <ReactLogo key="react" />,
      <GithubLogo key="github" />,
      <VercelLogo key="vercel" />,
      <EthereumLogo key="ethereum" />,
      <SolidityLogo key="solidity" />,
    ],
    image: "/projects/nexeth.png",
  },
  {
    title: (
      <Link
        href="https://www.npmjs.com/package/@nexeth/heimdall"
        target="_blank"
      >
        @nexeth/heimdall
      </Link>
    ),
    subtitle: "Ethereum Block Listening SDK",
    desc: "Heimdall is a powerful tool designed to abstract the complexity of listening to blockchain events on Ethereum, built on top of viem. It allows for easy monitoring of blocks, transactions, transaction hashes, and transaction receipts, providing a simplified interface for interaction with the Ethereum blockchain",
    icons: [
      <EthereumLogo key="ethereum" />,
      <TypescriptLogo key="typescript" />,
    ],
    image: "/projects/heimdall.png",
  },
  // {
  //   title: (
  //     <Link href="https://drive.nexeth.xyz" target="_blank">
  //       IPFS Drive
  //     </Link>
  //   ),
  //   subtitle: "Decentralised File Storage Solution",
  //   desc: (
  //     <>
  //       Create decentralised data drives and store content in them as NFTs. No
  //       database, no APIs.
  //       <StyledLink href="https://drive.nexeth.xyz/" target="_blank" pl="5px">
  //         drive.nexeth.xyz
  //       </StyledLink>
  //     </>
  //   ),
  //   icons: [
  //     <NextLogo key="next" />,
  //     <ReactLogo key="react" />,
  //     <ChakraUILogo key="chakra" />,
  //     <GithubLogo key="github" />,
  //     <VercelLogo key="vercel" />,
  //     <EthereumLogo key="ethereum" />,
  //     <SolidityLogo key="solidity" />,
  //   ],
  //   image: "/projects/drive.jpeg",
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
    image: "/projects/ethdash.png",
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
    image: "/projects/scuderia.png",
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
    image: "/projects/mfbevan.png",
  },
  {
    title: "Bit Jump",
    subtitle: "Personal Game Project (May 2020)",
    desc: `A personal project to get a feel for the process of developing a game, right through to releasing it on the Google Play Store. Whilst the plan was never to create a hit game
    for mobile, this project gave me a lot of experience in developing for Android devices, optimizing the mobile experience, and the specifics of deploying an application to a mobile environment.
    (Since removed from the Play Store)`,
    icons: [
      <UnityLogo key="unity" />,
      <AndroidLogo key="android" />,
      <CSharpLogo key="c#" />,
      <PlayStoreLogo key="play-store" />,
    ],
    image: "/projects/bitjump.png",
  },
];

export const commercialProjects: IProject[] = [
  {
    title: (
      <Link href="https://www.mevwatch.info" target="_blank">
        mevwatch.info
      </Link>
    ),
    subtitle: "Ethereum MEV Dashboard",
    desc: (
      <>
        Some MEV-Boost relays are regulated under OFAC and will censor certain
        transactions. MEVWatch is a tool to monitor the current MEV landscape
        and general network health to ensure that Ethereum remains credibly
        neutral. Check out the site at{" "}
        <StyledLink href="https://www.mevwatch.info" target="_blank">
          www.mevwatch.info
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
    image: "/projects/mevwatch.png",
  },
  {
    title: (
      <Link href="https://beta.polyone.io" target="_blank">
        PolyOne.io
      </Link>
    ),
    subtitle: "Ethereum NFT Marketplace",
    desc: (
      <>
        A creator focused primary and secondary Sale NFT Marketplace running on
        Ethereum Mainnet. Users can deploy individual NFT collections via a
        Manifold proxy integration and list their tokens in the PolyOne
        marketplace. For this project I developed the Smart Contracts, frontend
        and backend to faciliate contract creation, listing and purchasing of
        tokens.
      </>
    ),
    icons: [],
    image: "projects/polyone.png",
  },
];
