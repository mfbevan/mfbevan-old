import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import { IExperience, IProject } from "../../content/portfolio";

const ExperienceCard = ({
  experience,
}: {
  experience: IExperience | IProject;
}) => {
  const { title, subtitle, desc, icons, image } = experience;

  return (
    <Center py={2} h="full">
      <Box
        maxW="2xl"
        w="full"
        h="full"
        bg={useColorModeValue("white", "gray.700")}
        boxShadow="md"
        rounded="2xl"
        textAlign="left"
        mx={2}
        border="1px solid"
        borderColor={useColorModeValue("gray.50", "gray.700")}
      >
        <Box p={6}>
          <Stack spacing={0} align="left" mb={5}>
            <Heading fontSize="xl" fontWeight={500} fontFamily="body">
              {title}
            </Heading>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.500", "gray.400")}
              pb="10px"
            >
              {subtitle}
            </Text>
            {image && (
              <Image
                src={image}
                alt={image}
                h="200px"
                objectFit="cover"
                rounded="md"
                boxShadow="base"
              />
            )}
            {icons.length ? (
              <Wrap py={4}>
                {icons.map((_icon) => (
                  <WrapItem key={_icon!.toString()}>{_icon}</WrapItem>
                ))}
              </Wrap>
            ) : (
              <Box py={2} />
            )}
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.700", "gray.200")}
            >
              {desc}
            </Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export { ExperienceCard };
