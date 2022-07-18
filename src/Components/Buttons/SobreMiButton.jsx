import React from 'react'
import { Button, Link } from "@chakra-ui/react";
import {InfoOutlineIcon} from "@chakra-ui/icons";

const SobreMiButton = () => {
  return (
    <Link
    href="#SobreMi"
    _hover={{ color: "detailsPrimary", textDecoration:'none'}}
  >
    <Button
      bgColor="textPrimary"
      textDecoration="none"
      mt={3}
      mr={3}
      rightIcon={<InfoOutlineIcon />}
      size={['xs','md']}
    >
      Sobre Mí
    </Button>
  </Link>
  )
}

export default SobreMiButton