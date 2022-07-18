import React from "react";
import { Box } from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import {
  Html5,
  CssThree,
  ReactJs,
  Redux,
  Nodedotjs,
  Express,
  Postgresql,
  Git,
  Javascript,
  Sequelize,
  Github,
  Python,
  Mysql,
  Mongodb,
  Cplusplus,
  Typescript,
} from "@icons-pack/react-simple-icons";

const SkillCards = () => {
  return (
    <Box
      display="flex"
      flexDirection={["column", "row"]}
      flexWrap="wrap"
      alignItems="center"
      alignContent="center"
      pb="10vh"
    >
      <SkillCard Icon={Html5} text={"HTML5"} />
      <SkillCard Icon={CssThree} text={"CSS3"} />
      <SkillCard Icon={Javascript} text={"Javascript"} />
      <SkillCard Icon={Typescript} text={"TypeScript"} />
      <SkillCard Icon={ReactJs} text={"React"} />
      <SkillCard Icon={Redux} text={"Redux"} />
      <SkillCard Icon={Nodedotjs} text={"Node Js"} />
      <SkillCard Icon={Express} text={"Express"} />
      <SkillCard Icon={Sequelize} text={"Sequelize"} />
      <SkillCard Icon={Postgresql} text={"PostgreSQL"} />
      <SkillCard Icon={Mysql} text={"MySQL"} />
      <SkillCard Icon={Mongodb} text={"MongoDB"} />
      <SkillCard Icon={Python} text={"Python"} />
      <SkillCard Icon={Cplusplus} text={"C++"} />
      <SkillCard Icon={Git} text={"Git"} />
      <SkillCard Icon={Github} text={"Github"} />
    </Box>
  );
};

export default SkillCards;
