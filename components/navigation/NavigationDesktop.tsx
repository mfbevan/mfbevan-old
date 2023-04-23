import { useColorModeValue, Stack, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { navItems } from "../../content/portfolio";

export const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map(({ label, href }) => (
        <Box key={label}>
          <Link href={href ?? ""}>
            <Text
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: "blue.400",
                cursor: "pointer",
              }}
            >
              {label}
            </Text>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};
