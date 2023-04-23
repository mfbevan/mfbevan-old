import { Center, Heading, Wrap, WrapItem } from "@chakra-ui/react";
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

      <Wrap justify="center">
        {projects.map((_exp, index) => (
          <WrapItem key={index} maxW="400px">
            <ExperienceCard experience={_exp} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default Experience;
