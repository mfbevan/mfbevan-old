import { DeveloperTyped } from "./DeveloperTyped";
import { useState } from "react";
import Image from "next/image";
import { Box, useBreakpointValue } from "@chakra-ui/react";

export const LandingImage = () => {
  const [startTyping, setStartTyping] = useState(false);

  const finishLoading = () => {
    setStartTyping(true);
  };

  const top = useBreakpointValue({ base: "20%", md: "35%" });

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        zIndex: 100,
      }}
    >
      <Image
        layout="fill"
        objectFit="cover"
        style={{ opacity: "80%" }}
        src="/desk2.jpg"
        alt="Desk"
        onLoad={finishLoading}
      />
      {startTyping ? (
        <Box
          style={{
            top,
            position: "absolute",
            color: "white",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        >
          <DeveloperTyped />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};
