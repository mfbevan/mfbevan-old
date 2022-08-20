import { Center, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { ExperienceCard } from "../../components/cards/ExperienceCard";
import { projects } from "../../content/portfolio";

const Experience: NextPage = () => {
  return (
    <>
      <Center py={4}>
        <Heading fontSize="2xl" fontWeight={500}>
          Projects
        </Heading>
      </Center>
      
      {projects.map((_exp) => (
        <ExperienceCard key={_exp.title} experience={_exp} />
      ))}
    </>
  );
};

export default Experience;
