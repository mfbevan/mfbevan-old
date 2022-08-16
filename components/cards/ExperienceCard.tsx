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
import { IExperience } from "../../content";

const ExperienceCard = ({ experience }: { experience: IExperience }) => {
  const { title, subtitle, desc, icons } = experience;

  return (
    <Center py={6}>
      <Box
        maxW="xl"
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="xl"
        rounded="md"
        textAlign="left"
        mx={2}
      >
        <Box p={6}>
          <Stack spacing={0} align="left" mb={5}>
            <Heading fontSize="xl" fontWeight={500} fontFamily="body">
              {title}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {subtitle}
            </Text>
            <Wrap py={4}>
              {icons.map((_icon) => (
                <WrapItem key={_icon!.toString()}>{_icon}</WrapItem>
              ))}
            </Wrap>
            <Text fontSize="sm" color="gray.500">
              {desc}
            </Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export { ExperienceCard };
