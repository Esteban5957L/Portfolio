import { Button } from '@chakra-ui/react'
import { Github } from '@icons-pack/react-simple-icons'
import React from 'react'
import { Link } from 'react-router-dom'

const ToRepoButton = ({linkToRepo}) => {
  return (
    <Link
    href={linkToRepo}
    target="_blank"
    _hover={{ color: "detailsPrimary", textDecoration: "none" }}
  >
    <Button m={2} rightIcon={<Github />}>
      Ver código
    </Button>
  </Link>
  )
}

export default ToRepoButton