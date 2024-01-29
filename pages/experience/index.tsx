import { Center, Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AboutMeCard } from "../../components/cards/AboutMeCard";
import { ExperienceCard } from "../../components/cards/ExperienceCard";
import { education, experiences } from "../../content/portfolio";

const Experience: NextPage = () => {
  return (
    <Flex flexDirection="column" py="80px">
      <Center py={4}>
        <Heading fontSize="2xl" fontWeight={500}>
          About Me
        </Heading>
      </Center>
      <AboutMeCard />
      <Center py={4}>
        <Heading fontSize="2xl" fontWeight={500}>
          Employment History
        </Heading>
      </Center>
      {experiences.map((_exp) => (
        <ExperienceCard key={_exp.title} experience={_exp} />
      ))}
      <Center py={4}>
        <Heading fontSize="2xl" fontWeight={500}>
          Education
        </Heading>
      </Center>
      {education.map((_exp) => (
        <ExperienceCard key={_exp.title} experience={_exp} />
      ))}
    </Flex>
  );
};

export default Experience;
