import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { IExperience, languages, operatingSystems, toolsServices } from "../../content";

const SkillsCard = () => {

  return (
    <Center>
      <Box
        maxW="2xl"
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="xl"
        rounded="md"
        textAlign="left"
        mx={2}
      >
        <Box p={6}>
          <Stack spacing={0} align="left">
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
            <Wrap p={4}>
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
