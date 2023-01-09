import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <Flex bg="teal.500" p="20px" columnGap={10}>
        <Link href={'/'}>Home</Link>
        <Link href={'/Projects'}>Projects</Link>
    </Flex>
  )
}

