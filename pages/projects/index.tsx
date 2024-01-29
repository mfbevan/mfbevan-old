import {
  Center,
  Heading,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { ExperienceCard } from "../../components/cards/ExperienceCard";
import { personalProjects, commercialProjects } from "../../content/portfolio";

const Experience: NextPage = () => {
  return (
    <Flex flexDirection="column" py="80px">
      <Center py={4}>
        <Heading fontSize="2xl" fontWeight={500}>
          Projects
        </Heading>
      </Center>

      <Tabs isFitted position="relative" variant="unstyled">
        <TabList>
          <Tab>Personal</Tab>
          <Tab>Commercial</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Wrap justify="center">
              {personalProjects.map((_exp, index) => (
                <WrapItem key={index} maxW="400px">
                  <ExperienceCard experience={_exp} />
                </WrapItem>
              ))}
            </Wrap>
          </TabPanel>
          <TabPanel>
            <Wrap justify="center">
              {commercialProjects.map((_exp, index) => (
                <WrapItem key={index} maxW="400px">
                  <ExperienceCard experience={_exp} />
                </WrapItem>
              ))}
            </Wrap>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Experience;
