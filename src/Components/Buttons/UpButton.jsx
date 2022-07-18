import React from 'react';
import {Button, Link} from "@chakra-ui/react";
import {ChevronUpIcon} from "@chakra-ui/icons";

const UpButton = () => {
  return (
    <Link href='#'>
        <Button
            display={['none','none','block']}
            mb={20}
            ml='80vw'
            position='fixed'
            rigth={0}
            bottom={0}
            type='link'
        >
            <ChevronUpIcon/>
        </Button>
    </Link>
  )
}

export default UpButton