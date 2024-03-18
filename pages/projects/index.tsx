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
  Text,
  chakra,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { ExperienceCard } from "../../components/cards/ExperienceCard";
import { personalProjects, commercialProjects } from "../../content/portfolio";
import Link from "next/link";

const Experience: NextPage = () => {
  return (
    <Flex flexDirection="column" py="80px" maxW="4xl" mx="auto">
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
            <Text textAlign="center" fontSize="sm">
              The following projects have been worked on during my time at{" "}
              <Link href="https://labrys.io" target="_blank">
                <chakra.span
                  color="blue.500"
                  textDecoration="underline"
                  cursor="pointer"
                >
                  Labrys
                </chakra.span>
              </Link>
            </Text>

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
