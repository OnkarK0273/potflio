import Head from 'next/head'


import { Box ,Button,Flex,Heading,Image, Link, ListItem, Tag, Text, UnorderedList, VStack} from '@chakra-ui/react'





export default function Home({blog}) {
  console.log(blog.avatar_url)
  return (
    <>
      
      <VStack textAlign={'center'} alignItems="center" p='20px' >
      <Image src={blog.avatar_url} w='400px' alt="profile" rounded={10} m="auto"/>
      <Heading >{blog.name}</Heading>
      <Text color={'gray.500'} fontSize={25}>@{blog.login}</Text>
      <Text w='400px' m="auto" >{blog.bio}</Text>
      <Text></Text>
      <Flex columnGap={5} >
        <Button><Link  href={blog.html_url}>Follow</Link></Button>
        <Button><Link href="https://drive.google.com/file/d/10caKf20AnU9VYco2-Nj4q6VsuQqDUbjc/view?usp=share_link">Resume</Link></Button>
      </Flex>

      <Flex Flex columnGap={5} p='20px' >
      <Tag bg="orange.300">HTML</Tag>
      <Tag bg="blue.300">CSS</Tag>
      <Tag bg="yellow.300">JavaScript</Tag>
      <Tag bg="teal.300">ReactJS</Tag>
      </Flex>
      <Heading>Education</Heading>
      <UnorderedList>
        <ListItem>Full-stack web-devlopment _6/22 - 2/23 <br /> -Masai school</ListItem>
        <ListItem>Bachelor of Engineering  _6/2017 - 12/2020 <br/>-SETI,Kolhapur</ListItem>
        
      </UnorderedList>
      </VStack>
      
    </>
  )
}

export async function getStaticProps() {
  let res = await fetch("https://api.github.com/users/OnkarK0273")
  let data = await res.json()
  console.log(data)
  return {
    props: {
      blog:data
    }, // will be passed to the page component as props
  }
}
