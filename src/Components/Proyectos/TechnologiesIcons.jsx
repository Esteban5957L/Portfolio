import React from "react";
import {
  Html5,
  CssThree,
  ReactJs,
  Redux,
  Nodedotjs,
  Express,
  Postgresql,
  Mui,
  Chakraui,
  Gnubash,
  Javascript,
  Sequelize,
  Github,
  Mongodb,
} from "@icons-pack/react-simple-icons";
import { Box } from "@chakra-ui/react";

const TechnologiesIcons = ({ technologiesIcons }) => {
  return (
    <>
    {
      technologiesIcons.includes('Html5') &&
      <Box p={1}>
        <Html5  color="#FBFBFB" height="30" width="30"/>
      </Box>
    }
    {
      technologiesIcons.includes('CssThree') &&
      <Box p={1}>
        <CssThree color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('ReactJs') &&
      <Box p={1}>
        <ReactJs color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Redux') &&
      <Box p={1}>
        <Redux color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Nodedotjs') &&
      <Box p={1}>
        <Nodedotjs color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Express') &&
      <Box p={1}>
        <Express color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Postgresql') &&
      <Box p={1}>
        <Postgresql color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Mui') &&
      <Box p={1}>
        <Mui color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Chakraui') &&
      <Box p={1}>
        <Chakraui color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Gnubash') &&
      <Box p={1}>
        <Gnubash color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Javascript') &&
      <Box p={1}>
        <Javascript color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Sequelize') &&
      <Box p={1}>
        <Sequelize color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Github') &&
      <Box p={1}>
        <Github color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    {
      technologiesIcons.includes('Mongodb') &&
      <Box p={1}>
        <Mongodb color="#FBFBFB" height="30" width="30" />
      </Box>
    }
    </>
  );
};

export default TechnologiesIcons;
