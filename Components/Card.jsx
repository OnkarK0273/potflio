import { Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";
import { Icon } from '@chakra-ui/react'
export default function Card({html_url,forks_count,stargazers_count,language,name}) {
  return (
    <Box  boxShadow='base' p='6' rounded='md' bg='white' >
        <Link fontSize={20} color={'blue.400'} href={html_url}>{name}</Link>

        <Flex alignItems={'center'}>
        <Icon boxSize={6} as={TbGitFork}/>
        <Text>:{forks_count}</Text>
        </Flex>

        <Flex>
        <Icon boxSize={6} as={AiOutlineStar}/>
        <Text>:{stargazers_count}</Text>
        </Flex>
        <Text>language: {language}</Text>
    </Box>
  )
}
// Link open's specific project
// Star count
// Fork Count
// language
// TbGitFork
// AiOutlineStar