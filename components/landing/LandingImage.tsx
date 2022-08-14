import { DeveloperTyped } from "./DeveloperTyped";
import { useState } from "react";
import Image from "next/Image";
import { Box, useBreakpointValue } from "@chakra-ui/react";

export const LandingImage = () => {
  const [startTyping, setStartTyping] = useState(false);

  const finishLoading = () => {
    setStartTyping(true);
  };

  const top = useBreakpointValue({ base: "20%", md: "35%" });

  return (
    <Box sx={{ width: "100%", height: "95vh", position: "fixed" }}>
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
