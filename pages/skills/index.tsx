import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import { SkillsCard } from "../../components/cards/SkillsCard";

const Skills: NextPage = () => {
  return (
    <>
      <Center py={6}>
        <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
          Skills
        </Heading>
      </Center>

      <SkillsCard />
    </>
  );
};

export default Skills;
