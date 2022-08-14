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
  AzureLogo,
  MUILogo,
  DockerLogo,
  CloudflareLogo,
  SolidityLogo,
  TerraformLogo,
} from "../components/icons/PortfolioIcons";

export interface IExperience {
  title: string;
  subtitle: string;
  desc: string;
  icons: ReactNode[];
}

export const experiences: IExperience[] = [
  {
    title: "Labrys",
    subtitle: "Full-Stack Blockchain Developer (March 2022 - NOW)",
    desc: `At Labrys I work as a Full Stack Software Developer, tackling problems in both the Web 2.0 and Web 3.0 world, 
    building web applications and smart contracts alongside some of the best developers in the crypto space today.`,
    icons: [
      <SolidityLogo key="solidity" />,
      <ReactLogo key="react" />,
      <TypescriptLogo key="typescript" />,
      <NodeLogo key="node" />,
      <GithubLogo key="github" />,
      <GitlabLogo key="gitlab" />,
      <JiraLogo key="jira" />,
    ],
  },
  {
    title: "Optizmo Technologies, LLC",
    subtitle: "Full-Stack Developer (July 2021 - March 2022)",
    desc: `Completing tasks across the Full Stack including Typescript React development on the Frontend, a Typescript Node.js backend,
          Terraform infrastructure as code, and PostgreSQL databases where I also gained experience in CI/CD pipelines and Test-Driven Development and Behaviour-Driven Development. 
          This job took place in an Agile environment with daily standups,
          weekly task grooming sessions and fulfilling a number of rotating roles each sprint. This included many positions including Sprint Boss (Scrum Master), 
          Tech Support (replying to client queries and concerns and raising bugs appropriately),
          Alarms Monitoring (monitoring our deployed services) and Sprint Review (managing a bi-weekly sprint review to assess progress).`,
    icons: [
      <ReactLogo key="react" />,
      <TypescriptLogo key="typescript" />,
      <TerraformLogo key="terraform" />,
      <NodeLogo key="node" />,
      <GitlabLogo key="gitlab" />,
      <JiraLogo key="jira" />,
      <PostgresLogo key="postgres" />,
      <AWSLogo key="aws" />,
      <AzureLogo key="azure" />,
      <MUILogo key="mui" />,
      <DockerLogo key="docker" />,
      <CloudflareLogo key="cloudflare" />,
    ],
  },
  {
    title: `Hogan's Wellington Point Hotel`,
    subtitle: "Duty Manager (2018 - 2021)",
    desc: `Bar management, financial management, event planning, overseeing
  of daily operations, administration, security, customer service, excellent time management & communication, conflict resolution skills`,
    icons: [],
  },
];
