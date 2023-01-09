import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import Card from '../Components/Card'
export default function Projects({data}) {
    console.log(data)
  return (
    <Box>
        <Heading p='20px' textAlign={'center'}>Projects</Heading>
        <Grid templateColumns={{lg:'repeat(3, 1fr)',md:'repeat(2, 1fr)' }}gap={4}>
            {
                data.map((el)=>(<Card key={el.id} {...el}/>))
            }
        </Grid>
    </Box>

  )
}

export async function getStaticProps() {
    let res = await fetch("https://api.github.com/search/repositories?q=user:OnkarK0273+fork:true&sort=updated&per_page=10&type=Repositories")
    let data = await res.json()
    console.log(data)
    return {
      props: {
        data:data.items

      }, // will be passed to the page component as props
    }
  }
  