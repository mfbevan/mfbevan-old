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
  NextLogo,
  VercelLogo,
  EthereumLogo,
  ConfluenceLogo,
} from "../../components/icons/PortfolioIcons";

export interface IExperience {
  title: string;
  subtitle: string;
  desc: string;
  icons: ReactNode[];
  image?: string;
}

export const experiences: IExperience[] = [
  {
    title: "Labrys",
    subtitle: "Full-Stack Blockchain Engineer (March 2022 - NOW)",
    desc: `At Labrys I work as a Senior Software Engineer, tackling problems in both the Web 2.0 and Web 3.0 world, 
    building web applications and smart contracts alongside some of the best developers in the crypto space today.`,
    icons: [
      <SolidityLogo key="solidity" />,
      <EthereumLogo key="ethereum" />,
      <ReactLogo key="react" />,
      <TypescriptLogo key="typescript" />,
      <NodeLogo key="node" />,
      <GithubLogo key="github" />,
      <GitlabLogo key="gitlab" />,
      <JiraLogo key="jira" />,
      <ConfluenceLogo key="confluence" />,
      <KubernetesLogo key="kubernetes" />,
      <MongoDBLogo key="mongodb" />,
      <MUILogo key="mui" />,
      <ChakraUILogo key="chakra" />,
      <NextLogo key="next" />,
      <VercelLogo key="vercel" />,
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
      <MUILogo key="mui" />,
      <DockerLogo key="docker" />,
      <CloudflareLogo key="cloudflare" />,
    ],
  },
  {
    title: "Foundation Society",
    subtitle:
      "Full-Stack Development - University Capstone Project (March 2021 - November 2021)",
    desc: "For my final year Capstone Project, myself and a 3 like-minded developers set out to create a Competition Portal for the Australian Space Design Competition (ASDC), a competition for secondary school students with a passion for space. The portal that we developed allowed students to sign up to the competition, for teachers to manager their teams, and for the competition staff to manage student and team data, including generating reports for accomodation, team submissions, and contact information. We also developed a submissions portal using AWS S3 where competition staff could create a new deliverable, to which individual students or teams could make submissions such as sign-up forms, and their final reports for the competition. The technologies I was exposed to in this project included a React Frontend, MariaDB database and AWS SAM Serverless API written in Python, where we used AWS Lambda to create a scalable serverless infrastructure that was low cost for the ASDC.",
    icons: [
      <ReactLogo key="react" />,
      <NodeLogo key="node" />,
      <GithubLogo key="github" />,
      <JiraLogo key="jira" />,
      <PythonLogo key="python" />,
      <AWSLogo key="aws" />,
      <MariaDbLogo key="mariadb" />,
      <MUILogo key="mui" />,
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

export const education: IExperience[] = [
  {
    title: "Bachelor Information Technology - Computer Science",
    subtitle: "Queensland University Technology (2018-2021) GPA 6.81",
    desc: "Building IT Systems, Database Management, Impact of IT, Computer Technology Fundamentals, Programming Principles, IT Systems Design, Information Security, Networks, Discrete Structures, Software Development, Cloud Computing, IT Project Management, Algorithms and Complexity, Cryptography, Systems Programming, Energy in Engineering, Sustainability and Professional Practice, Engineering Computation, Microprocessors and Digital Systems, Engineering Design, Engineering Mechanics, Electrical Engineering Foundations, Signals Analysis, Linear Algebra, Dynamics, Control and Dynamic Systems, Dynamics of Machines, Mechatronics Design",
    icons: [],
  },
];
