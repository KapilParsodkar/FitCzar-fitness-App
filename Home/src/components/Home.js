import React from 'react'
import {Box, Heading, Image,Text} from '@chakra-ui/react'
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import {Image} from 'react-bootstrap'



import img1 from "../assests/1.jpg"
import img2 from "../assests/2.jpeg"
import img3 from "../assests/3.jpeg"
import img4 from "../assests/4.jpeg"
import img5 from "../assests/5.png"
import { Container } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box>
    <MyCarousel/>
    <Container maxW={'container.xl'}minH={'100vh'} p='16'>
    <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Description</Heading>
    <Stack h="full" p={"4"}
    alignItems={"center"}
        direction={['column','row']}>
<Image src={img5} h={['40','400']} filter={"hue-rotate(160deg)"}/>
 <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]}
 textAlign={"center"} > 
FitCzar: A gymnasium, also known as a gym, is an indoor location for athletics. The word is derived from the ancient Greek term "gymnasium". They are commonly found in athletic and fitness centers, and as activity and learning spaces in educational institutions.
 </Text>
    </Stack>
    </Container>
    </Box>
  )
}

const head={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:'uppercase',
    p:'4',
    size:"4xl"

}

const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showStatus={false} showThumbs={false}>
    <Box w="full" h={'100vh'}>
   <Image src={img1}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...head}>
    FitCzar

    </Heading>

    </Box>

    <Box w="full" h={'100vh'}>
   <Image src={img2}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...head}>
   Health is wealth

    </Heading>

    </Box>

    <Box w="full" h={'100vh'}>
   <Image src={img3}/>
    <Heading bgColor={'blackAlpha.300'} color={'white'} {...head}>
  Fitness is calmness

    </Heading>

    </Box>
    <Box w="full" h={'100vh'}>
   <Image src={img4}/>
    <Heading bgColor={'blackAlpha.300'} color={'white'} {...head}>
   Life with good health is relaxing

    </Heading>

    </Box>
    

    </Carousel>
)

export default Home