import React from "react";
import { Box, Text } from "@chakra-ui/react";

const SkillCard = ({ Icon, text }) => {
  return (
    <Box
      boxSizing="content-box"
      p={8}
      pt={10}
      _hover={{ transform: "scale(1.1)" }}
    >
      <Icon color="#FBFBFB" height="70" width="70" />
      <Text pt={2} textAlign="center" color="textColor">
        {text}
      </Text>
    </Box>
  );
};

export default SkillCard;
