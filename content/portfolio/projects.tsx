import { Link } from "@chakra-ui/react";
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
} from "../../components/icons/PortfolioIcons";

export interface IProject {
  title: string;
  subtitle: string;
  desc: ReactNode;
  icons: ReactNode[];
}

export const projects: IProject[] = [
  {
    title: "Scuderia",
    subtitle: "Personal Development Project @ Labrys (2022)",
    desc: (
      <>
        Scuderia is a fully on-chain racing NFT ecosystem that allows minting,
        metadata and image generation, racing and betting, all running on
        Polygon. Check it out at{" "}
        <Link
          href="https://scuderia.mfbevan.com"
          target="_blank"
          rel="noreferrer"
        >
          scuderia.mfbevan.com
        </Link>{" "}
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
