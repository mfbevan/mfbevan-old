// import desk from "../../public/desk3.png";
import desk from "../../public/desk2.jpg";
import { DeveloperTyped } from "./DeveloperTyped";
import { useState } from "react";
import Image from "next/Image";
import { Box } from "@chakra-ui/react";

export const ScrollIcon = () => (
  <a href="#about-me">
    <div className="chevron"></div>
    <div className="chevron"></div>
    <div className="chevron"></div>
  </a>
);
export const LandingImage = () => {
  const [startTyping, setStartTyping] = useState(false);

  const finishLoading = () => {
    setStartTyping(true);
  };
  return (
    <Box sx={{width: '100%', height: '95vh', position: 'relative'}}>
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
            position: "absolute",
            color: "white",
            top: "40%",
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

export default LandingImage;
