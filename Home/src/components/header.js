import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack, Text} from "@chakra-ui/react"
import {Link,useNavigate} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"
//import { Text } from 'react-bootstrap/lib/Navbar'
const Header = () => {
  const nav=useNavigate()
  const auth=localStorage.getItem('user')
  const logout=()=>{
   localStorage.clear()
   nav("/signup")
  }
    const {isOpen,onOpen,onClose}=useDisclosure()
  return (
    <>
        <Button
         zIndex={"overlay"}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={"full"}
        colorScheme="cyan"
        onClick={onOpen}
        >
        <BiMenuAltLeft size={'20'}/>
        </Button>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
         <DrawerCloseButton/>
            <DrawerHeader>FitCzar</DrawerHeader>
            <DrawerBody>
            {
              auth?
              <VStack alignItems={'flex-start'}>
    
    <Button  onClick={onClose}  variant={'ghost'} colorScheme={"cyan"}>
      <Link to={'/'}>Home</Link>
    </Button>
    <Text>Exercises</Text>
    <Button  onClick={onClose}  variant={'ghost'} colorScheme={"cyan"}>
      <Link to={'/easy'}>Easy level</Link>
    </Button>
    <Button  onClick={onClose}  variant={'ghost'} colorScheme={"cyan"}>
      <Link to={'/medium'}>Medium Level</Link>
    </Button>
    <Button  onClick={onClose}  variant={'ghost'} colorScheme={"cyan"}>
      <Link to={'/hard'}>Hard level</Link>
    </Button>
    <Button  onClick={onClose}  variant={'ghost'} colorScheme={"cyan"}>
      <Link to={'/exerciselist'}>Exercises list</Link>
    </Button>
    <Button  onClick={onClose}  variant={'ghost'} colorScheme={"cyan"}>
      <Link to={'/add'}>Add Exercises</Link>
    </Button>
    <Button  onClick={onClose}  variant={'ghost'} colorScheme={"cyan"}>
      <Link to={'/profile'}>Profile</Link>
    </Button>
    <Button  onClick={onClose}  variant={'ghost'} colorScheme={"cyan"}>
      <Link to={'/profileshow'}>ProfileDetails</Link>
    </Button>

    <Button  onClick={logout}  variant={'ghost'} colorScheme={"cyan"}>
    Logout ({JSON.parse(auth).name})
    </Button>



</VStack>

:
<HStack pos={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
  <Button  onClick={onClose}  colorScheme={"cyan"}>
  <Link to={'/login'}>log in</Link></Button>

  <Button   onClick={onClose} colorScheme={"cyan"} variant={"outline"}>
  <Link to={'/signup'}>sign up</Link></Button>
</HStack>
            }

            </DrawerBody>
     
        </DrawerContent>
      </DrawerOverlay>
        </Drawer>
    </>
  )
}

export default Header