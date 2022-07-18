import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import Hola from "./Hola";
import SobreMi from "../Sobre Mi/SobreMi";
import Tecnologias from "../Tecnologias/Tecnologias";
import Proyectos from "../Proyectos/Proyectos";
import Contactame from "../Contactame/Contactame";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Particles from "react-tsparticles";
import { loadFull }  from "tsparticles";
import UpButton from "../Buttons/UpButton";
import { useEffect } from "react";
import { useState } from "react";
import options from "./options"


const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const [upButton, setupButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 10){
        setupButton(true)
      }else{
        setupButton(false)
      }
    });
  }, [])
  

  return (
    <Box>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
      />
      <NavBar />

      <Box
        bgGradient="linear(to-r , backgroundHome 70%, backgroundHomeSecondary)"
        h="100vh"
      >
        <Hola />
      </Box>
        {
          upButton ? <UpButton /> : null
        }
      <Box
        bgGradient="linear(to-r , backgroundHome 70%, backgroundHomeSecondary)"
        h="auto"
      >
        <Box pl="30vw" pr="30vw" pb="10vh">
          <Divider />
        </Box>
        <SobreMi />
      </Box>


      <Box
        id="Tecnologias"
        bgGradient="linear(to-r , backgroundHome 70%, backgroundHomeSecondary)"
        h="auto"
      >
        <Tecnologias />
      </Box>
      <Box
        id="Proyectos"
        bgGradient="linear(to-r , backgroundHome 70%, backgroundHomeSecondary)"
        h="auto"
      >
        <Proyectos />
      </Box>
      <Box
        id="Contactame"
        bgGradient="linear(to-r , backgroundHome 70%, backgroundHomeSecondary)"
        h="auto"
      >
        <Contactame />
      </Box>
      <Box
        id="Footer"
        bgGradient="linear(to-r , backgroundHome 70%, backgroundHomeSecondary)"
        h="auto"
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
