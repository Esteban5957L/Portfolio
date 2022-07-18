import React from "react";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";

const SobreMi = () => {
  return (
    <Box h="100%" id="SobreMi" pt="10vh" pl="20vw">
      <Box
        h="auto"
        w="60vw"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h3" size={["2xl"]} pt={5} color="textColor">
          Sobre Mí
        </Heading>
        <Text p={[5, 10]} color="textColor" fontSize={["", "2xl"]}>
          Estudiante de ingeniería en sistemas de información en la UTN (Arg).
          Cuento con experiencia trabajando en equipo y diriguiendolos como
          lider y/o colaborador.
          <br />
          <br />
          Con pensamiento lógico, autodidacta, proactivo y dedicado, me
          desenvuelvo muy bien trabajando en equipo ya que me gusta mucho
          cooperar y enfocarme en el cumplimiento de objetivos por medio de
          metodologías agiles.
          <br />
          <br />
          Soy una persona muy curiosa que quiere entender el funcionamiento de
          todo y eso me motiva a estar en un proceso de aprendizaje constante.
        </Text>
      </Box>
    </Box>
  );
};

export default SobreMi;
