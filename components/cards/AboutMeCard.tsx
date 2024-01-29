import { Box, Center, useColorModeValue, Text } from "@chakra-ui/react";

const AboutMeCard = () => (
  <Center py={2}>
    <Box
      maxW="2xl"
      w="full"
      boxShadow="md"
      rounded="2xl"
      textAlign="left"
      mx={2}
      bg={useColorModeValue("white", "gray.700")}
      border="1px solid"
      borderColor={useColorModeValue("gray.50", "gray.700")}
    >
      <Box>
        <Text
          fontSize="sm"
          color={useColorModeValue("gray.700", "white")}
          p={6}
        >
          My name is Matthew. I am a software developer with a passion for
          programming and problem solving. After completing a Bachelor of
          Computer Science, I jumped at the chance to kickstart my professional
          career as a Full Stack Developer working on enterprise email
          suppression list management software, and quickly found a home
          building in the Web 2.0 space. Frustrated with the inherent
          centralisation and lack of individual ownership across an internet
          owned by the Big Five, the concept of blockchain technology piqued my
          interest in 2021. Blockchain and the crypto space opens a world of
          opportunity for decentralisation, self-sovereign ownership and scaling
          like never before that I am passionate to be a part of since joining
          Labrys in 2022. At Labrys I work as a Senior Software Developer,
          tackling problems in both the Web 2.0 and Web 3.0 world, building web
          applications and smart contracts alongside some of the best developers
          in the crypto space today.
        </Text>
      </Box>
    </Box>
  </Center>
);

export { AboutMeCard };
