import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import ico from "../../asets/ev.png";
const NavBar = () => {
  return (
    <Box>
      <Box
        display="flex"
        textAlign="center"
        justifyContent="space-around"
        borderBottom="1px"
        position="fixed"
        top={0}
        zIndex={1000}
        bgGradient="linear(to-r , backgroundHome 70%, backgroundHomeSecondary)"
        paddingRight= "50px"
        p={4}
        pl={[4]}
        w="100vw"
      >
        <Link href="#" _hover={{ textDecoration: "none" }}>
          <img src={ico} alt="" style={{ width: "55px" }} />
        </Link>
        <Link href="#SobreMi" _hover={{ textDecoration: "none" }}>
          <Text
            color="textColor"
            _hover={{
              color: "detailsPrimary",
              textShadow: "3px 3px 7px #0FFF4F",
            }}
          >
            Sobre Mí
          </Text>
        </Link>

        <Link href="#Proyectos" _hover={{ textDecoration: "none" }}>
          <Text
            color="textColor"
            _hover={{
              color: "detailsPrimary",
              textShadow: "3px 3px 7px #0FFF4F",
            }}
          >
            Proyectos
          </Text>
        </Link>

        <Link href="#Contactame" _hover={{ textDecoration: "none" }}>
          <Text
            color="textColor"

            _hover={{
              color: "detailsPrimary",
              textShadow: "3px 3px 7px #0FFF4F",
            }}
          >
            Contactame
          </Text>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1TjswbqgkuirwSooVYX3SJ9jGPSOT0kNK/view?usp=sharing"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <Text
            color="textColor"
            _hover={{
              color: "detailsPrimary",
              textShadow: "3px 3px 7px #0FFF4F",
            }}
          >
            CV   
          </Text>
        </Link>
        {/* <Divider /> */}
      </Box>
    </Box>
  );
};

export default NavBar;
