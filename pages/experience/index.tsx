import { Center, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AboutMeCard } from "../../components/cards/AboutMeCard";
import { ExperienceCard } from "../../components/cards/ExperienceCard";
import { education, experiences } from "../../content/portfolio";

const Experience: NextPage = () => {
  return (
    <>
      <Center py={4}>
        <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
          About Me
        </Heading>
      </Center>
      <AboutMeCard />
      <Center py={4}>
        <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
          Employment History
        </Heading>
      </Center>
      {experiences.map((_exp) => (
        <ExperienceCard key={_exp.title} experience={_exp} />
      ))}
      <Center py={4}>
        <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
          Education
        </Heading>
      </Center>
      {education.map((_exp) => (
        <ExperienceCard key={_exp.title} experience={_exp} />
      ))}
    </>
  );
};

export default Experience;
