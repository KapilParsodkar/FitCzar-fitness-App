import React from 'react'
import './exercise.css'
import {Text} from "@chakra-ui/react"
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack,Container} from "@chakra-ui/react"
import {BrowserRouter as Router,Routes,Route,useNavigate} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"


const ExerciseHome = ({setLoginUser}) => {
  const nav=useNavigate()
  return (

 

     <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
              <Text fontSize='6xl'>Exercise Home page</Text>
      <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['full', '96']}
        m={'auto'}
        my={'16'}
      > 
          
        <div className='button' onClick={() => nav("/profile")}>Profile
        </div>
      
         </VStack>
         <div className='button' onClick={()=>setLoginUser({})}>Logout</div>
    </Container>

 
      

  )
}

export default ExerciseHome