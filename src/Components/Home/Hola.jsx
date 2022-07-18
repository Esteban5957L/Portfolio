import React from "react";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import DescargarCv from "../Buttons/DescargarCv";
import SobreMiButton from "../Buttons/SobreMiButton";
import Typewriter from "typewriter-effect";

const Hola = () => {
  const machineText = (typewriter) => {
    typewriter.typeString("Hola, soy Esteban Villalba.").start();
  };
  const machineText2 = (typewriter) => {
    typewriter
      .pauseFor(4500)
      .typeString("Desarrollador Web Full Stack")
      .start();
  };

  return (
    <Box textAlign="center" pt="33vh">
      <Box>
        <Heading
          as="h1"
          size={["", "1xl", "2xl"]}
          color="textSecondary"
          m={3}
          p={3}
        >
          <Typewriter onInit={machineText} />
          {/* Full Stack Web Developer */}
        </Heading>

        <Heading
          as="h1"
          size={["1xl", "2xl", "4xl"]}
          color="textColor"
          m={3}
          p={3}
        >
          <Typewriter onInit={machineText2} />
          {/* Hola, soy Esteban Villalba */}
        </Heading>
      </Box>
      <Box>
        <SobreMiButton />
        <DescargarCv />
      </Box>
    </Box>
  );
};

export default Hola;
