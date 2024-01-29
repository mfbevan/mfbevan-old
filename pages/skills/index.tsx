import { Center, Heading, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { SkillsCard } from "../../components/cards/SkillsCard";

const Skills: NextPage = () => {
  return (
    <Flex flexDirection="column" py="80px">
      <Center py={6}>
        <Heading fontSize="2xl" fontWeight={500}>
          Skills
        </Heading>
      </Center>

      <SkillsCard />
    </Flex>
  );
};

export default Skills;
