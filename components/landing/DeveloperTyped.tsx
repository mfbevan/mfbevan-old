import Typed from "react-typed";
import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { navbarTitle } from "../../content/portfolio";

const startDelay = 100;
const typeSpeed = 30;
const backSpeed = 20;
const strings = ["Frontend", "Backend", "Blockchain", "Full Stack Developer"];
const name = navbarTitle;

const developerTextDelay = 600;

export const DeveloperTyped = () => {
  const [displaySecondLineCursor, setDisplaySecondLineCursor] = useState(false);

  return (
    <Box sx={{ alignItems: "center" }}>
      <Heading variant="h1" sx={{ fontSize: "5rem" }}>
        <Typed
          strings={[name]}
          startDelay={startDelay}
          typeSpeed={typeSpeed}
          backSpeed={backSpeed}
          onComplete={(instance: { cursor: { remove: () => void } }) => {
            instance.cursor.remove();
            setDisplaySecondLineCursor(true);
          }}
        />
      </Heading>
      <Heading variant="h3" sx={{ fontSize: "2rem" }}>
        <Typed
          strings={strings}
          startDelay={developerTextDelay}
          typeSpeed={typeSpeed}
          backSpeed={backSpeed}
          showCursor={displaySecondLineCursor}
        />
      </Heading>
    </Box>
  );
};
