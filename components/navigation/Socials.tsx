import { HStack } from "@chakra-ui/react";
import { GithubLinkLogo, LinkedInLinkLogo, TwitterLinkLogo } from "../icons";

const Socials = () => (
  <HStack spacing={2} mr={4} h="48px">
    <GithubLinkLogo />
    <LinkedInLinkLogo />
    <TwitterLinkLogo />
  </HStack>
);

export { Socials };
