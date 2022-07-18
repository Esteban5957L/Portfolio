import React from "react";
import { Box, Divider, Heading } from "@chakra-ui/react";
import Redes from "./Redes";
import Mensaje from "./Mensaje";

const Contactame = () => {
  return (
    <>  
      <Box h="100%" id="SobreMi" pt="10vh" pl="20vw">
        <Box h="auto" w="60vw" display="flex" flexDirection="column">
          <Heading as="h5" size="2xl" pt={5} pb={5} color="textColor" textAlign="center">
            Contactame
          </Heading>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Redes />
            {/* <Mensaje /> */}
          </Box>
        </Box>
      </Box>
      <Box pt="15vh">
        <Divider />
      </Box>
    </>
  );
};

export default Contactame;
