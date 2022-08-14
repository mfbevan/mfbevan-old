import Typed from "react-typed";
import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";

const startDelay = 200;
const typeSpeed = 45;
const backSpeed = 20;
const strings = ["Frontend", "Backend", "Blockchain", "Full Stack Developer"];
const name = "Matthew Bevan";

const developerTextDelay = 1100;

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
