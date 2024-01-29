import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  languages,
  operatingSystems,
  toolsServices,
} from "../../content/portfolio";

const SkillsCard = () => {
  return (
    <Center py={2}>
      <Box
        maxW="2xl"
        w="full"
        bg={useColorModeValue("white", "gray.700")}
        boxShadow="md"
        rounded="2xl"
        textAlign="left"
        mx={2}
        color={useColorModeValue("gray.700", "gray.300")}
        border="1px solid"
        borderColor={useColorModeValue("gray.50", "gray.700")}
      >
        <Box p={6}>
          <Stack spacing={0} align="left">
            <Heading fontSize="lg" fontWeight={500} fontFamily="body">
              Soft Skills
            </Heading>
            <UnorderedList p={4}>
              <ListItem>Management experience</ListItem>
              <ListItem>
                Excellent written and verbal communication skills
              </ListItem>
              <ListItem>Highly motivated with a positive attitude</ListItem>
              <ListItem>Attention to detail</ListItem>
              <ListItem>Highly reliable with a great work ethic</ListItem>
              <ListItem>High personal standards</ListItem>
            </UnorderedList>
            <Heading fontSize="lg" fontWeight={500} fontFamily="body">
              Hard Skills
            </Heading>
            <Text py={4}>
              Highly proficient in Node & Typescript for creating front and
              backend services and deploying them to the cloud through AWS, GCP
              and Vercel. I have particular experience in RESTful API
              development and AWS ECS workers for fast, scalable infrastructure.
            </Text>
            <Text pb={4}>
              In blockchain development I am able to implement, test and deploy
              Solidity Smart Contracts for the Ethereum EVM, with testing and
              contract interaction implemented using Hardhat and ethers.js.
            </Text>

            <Heading fontSize="lg" fontWeight={500} fontFamily="body">
              Languages
            </Heading>
            <Wrap py={4}>
              {languages.map((_icon) => (
                <WrapItem key={_icon!.toString()}>{_icon}</WrapItem>
              ))}
            </Wrap>
            <Heading fontSize="lg" fontWeight={500} fontFamily="body">
              Tools & Services
            </Heading>
            <Wrap py={4}>
              {toolsServices.map((_icon) => (
                <WrapItem key={_icon!.toString()}>{_icon}</WrapItem>
              ))}
            </Wrap>
            <Heading fontSize="lg" fontWeight={500} fontFamily="body">
              Operating Systems
            </Heading>
            <Wrap py={4}>
              {operatingSystems.map((_icon) => (
                <WrapItem key={_icon!.toString()}>{_icon}</WrapItem>
              ))}
            </Wrap>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export { SkillsCard };
