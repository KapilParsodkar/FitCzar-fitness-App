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

import plank from "../assests/core/plank.png"
import birdDogMed from "../assests/core/birdDogMed.png"
import mountainClimber from "../assests/core/mountainClimber.png"


const Mcore = () => {

  return (
    <Box>
      <Text style={{ textAlign: 'center' }} fontSize={"6xl"}>Core Exercises - Intermediate</Text>
      <VStack>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Planks</Heading>
        <HStack>
          <Image src={plank}  h={['40','200']}/>
          <VStack>
          <Text>This is a full-body exercise that targets your core, including back, glutes, abdominals, and legs, but also works the shoulders.  It should be done on a mat to cushion and protect your elbows.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Lie flat on your stomach, with your forearms resting on the floor next to your upper body, your feet about hip-width apart, and your toes curled up to support your weight on the balls of your feet.</li>
            <li>Push your body up with your elbows and forearms, keeping your shoulders stacked over your elbows.</li>
            <li>Tighten your core to pull your body into a straight line from shoulders to feet.</li>
            <li>Hold for 20 to 30 seconds.</li>
            <li>Repeat.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>3 to 5 reps</li>
            <li>After two weeks, increase the time of each rep by half</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Bird Dogs</Heading>
        <HStack>
          <Image src={birdDogMed}  h={['40','300']}/>
          <VStack>
          <Text>This variation on the basic bird-dog movement provides more work for the abs and back, while increasing core mobility.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Start on all fours, with your shoulders stacked above your hands, and your hips over your knees.</li>
            <li>Tighten your core, and lift your right leg straight out at hip level; at the same time, lift your left arm straight out at shoulder level, palm down, and pause here for a moment.</li>
            <li>Bring your right knee and left elbow to each other, and then return both to the full extended position.</li>
            <li>Repeat.</li>
            <li>Perform the same set of reps with your left leg and right arm.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>8 to 12 reps, each side</li>
            <li>After a week, increase number of reps by half</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Mountain Climbers</Heading>
        <HStack>
          <Image src={mountainClimber}  h={['40','300']}/>
          <VStack>
          <Text>This exercise has some of the benefits of a plank, while also providing a knee-limbering workout, balance training, and an aerobic boost.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Start in plank position but with your hands resting on the ground rather than your forearms.</li>
            <li>Lunge your right knee toward your chest, keeping your back straight and your hips down.</li>
            <li>Return your right leg to the starting position while simultaneously lunging your left knee to your chest.</li>
            <li>Continue alternating legs.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>10 to 16 reps, each side</li>
            <li>After a week, increase number of reps by half</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>


      </VStack>
      <br/>

    </Box>
 

  )
}

export default Mcore
