import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, filterJobs } from "../../redux-toolkit/getAndFilter";
import { Box, Heading, Divider, Button, Link } from "@chakra-ui/react";
import  Proyecto  from "./Proyecto.jsx";

const Proyectos = () => {
  // esto fue una prueba, FUNCIONA, lo dejo hasta que lo arme bien en los hooks
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <>
      
      <Box h="100%" id="SobreMi" pt="10vh" pl="20vw">
        <Box
          h="auto"
          w="60vw"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h3" size="2xl" pt={5} color="textColor">
            Mis Trabajos
          </Heading>
          <Box mt={10} mb={10}>

              {jobs.length && jobs.map((j) => {
                return (
                  <Proyecto
                    key={j.id}
                    name={j.name}
                    id={j.id}
                    cardImg={j.cardImg}
                    shortDescription={j.shortDescription}
                    linkToPage={j.linkToPage}
                    linkToRepo={j.linkToRepo}
                    technologiesIcons={j.technologiesIcons}
                    description={j.description}
                    frontEndTech={j.frontEndTech}
                    backEndTech={j.backEndTech}
                    dbAndORM={j.dbAndORM}
                    otherTechs={j.otherTechs}
                    imgsGalery={j.imgsGalery}
                  />
                );
              })}

          </Box>
        </Box>
      </Box>
      <Box pl="30vw" pr="30vw" pt="10vh">
        <Divider />
      </Box>
    </>
  );
};

export default Proyectos;
