import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Text,
  Container,
  Table,
  Box,
  Heading, Image
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import curls from "../assests/upper/dumbellCurls.png"


const Hupper = () => {

  return (
    <Box>
      <Text style={{ textAlign: 'center' }} fontSize={"6xl"}>Upper-Body Exercises - Advanced</Text>
      <VStack>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto"></Heading>
        <HStack>
          <Image src={curls}  h={['40','300']}/>
          <VStack>
          <Text></Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>10 to 12 reps</li>
            <li>20 to 40 lbs of weight</li>
            <li>After a week increase by 5 lbs</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

      </VStack>
      <br/>

    </Box>
 

  )
}

export default Hupper

