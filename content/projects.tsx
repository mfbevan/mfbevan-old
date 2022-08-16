import { ReactNode } from "react";
import {
  ReactLogo,
  TypescriptLogo,
  NodeLogo,
  GitlabLogo,
  JiraLogo,
  GithubLogo,
  PostgresLogo,
  AWSLogo,
  MUILogo,
  DockerLogo,
  CloudflareLogo,
  SolidityLogo,
  TerraformLogo,
  KubernetesLogo,
  MongoDBLogo,
  ChakraUILogo,
  PythonLogo,
  MariaDbLogo,
  AndroidLogo,
  CSharpLogo,
  PlayStoreLogo,
  UnityLogo,
  VercelLogo,
} from "../components/icons/PortfolioIcons";

export interface IProject {
  title: string;
  subtitle: string;
  desc: string;
  icons: ReactNode[];
}

export const projects: IProject[] = [
  {
    title: "Portfolio",
    subtitle: `What you're seeing right now!`,
    desc: `This site was created using Typescript and Next.js with Chakra UI component library. 
    The site is stored in a Github Repo and served up through Vercel on a custom domain.
    Try out Dark Mode in the Navbar!
    The icons on this page are from Icons8.com`,
    icons: [
      <ReactLogo key="react" />,
      <ChakraUILogo key="chakra" />,
      <GithubLogo key="github" />,
      <VercelLogo key="vercel" />
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
