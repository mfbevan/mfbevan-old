import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { DesktopNav } from "./NavigationDesktop";
import { MobileNav } from "./NavigationMobile";
import { navbarTitle } from "../../content/portfolio";
import { ColorModeToggle } from "../providers/ColorModeToggle";
import { Socials } from "./Socials";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="absolute" top="0" left="0" right="0">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 2 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        roundedBottom="2xl"
        boxShadow="base"
      >
        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href={"/"}>
            <Text
              my="auto"
              ml={{ base: "2", md: "4" }}
              textAlign="left"
              fontFamily={"heading"}
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
              _hover={{
                textDecoration: "none",
                color: "blue.400",
                cursor: "pointer",
              }}
            >
              {navbarTitle}
            </Text>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Socials />
        <ColorModeToggle />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export { Navbar };
