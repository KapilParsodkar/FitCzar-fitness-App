
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

import squats from "../assests/legs/squats.png"
import curl from "../assests/legs/curl.png"
import extensions from "../assests/legs/extensions.jpeg"
import lunges from "../assests/legs/lunges.png"

const Elegs = () => {
  return (
   <Box>
  <Text style={{ textAlign: 'center' }} fontSize={"6xl"}>Leg Exercises</Text>
  <VStack>
  <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">squats</Heading>

  <HStack>
  <Image src={squats}  h={['40','300']}/>
    <Text>The basic squat is an extremely effective lower body move that strengthens all leg muscles including glutes, quads, hamstrings and calves. During the squat you use every single lower body muscle, the motion of keeping your balance all while maintaining an upright posture will deliver an entire leg workout with core strength as an added bonus making the squat the ultimate lower body workout.

The basic squat is a user-friendly exercise that anyone can do. Body weight alone is always a great way to build strength and challenge your muscles. That being said, if you have moved past beginner level you can always add holding dumbbells or supporting a barbell to make the squat more effective. However, make sure you use the instructions below and practice a basic squat until you learn how to do it properly and with good range of motion. Range of motion is the key to effectiveness in this exercise. Slightly bending your knees is not truly a squat – it’s a knee bend. To be effective in having a stronger and tighter butt and legs.

Squats also help strengthen your back when you practice good posture in your squat and pull your abdominal muscles in throughout. Squat can also reduce future injuries by strengthening both the knee and ankle muscles.</Text>
<br></br>


  </HStack>
  <Text fontSize={"3xl"}>How many to do? <ul>
    <li>10-12 reps</li>
    <li>use 5lbs to 10lbs</li>
    <li>After a week increase 5 lbs</li>
  </ul></Text>
<br/>
  <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Legcurls</Heading>

<HStack>
<Image src={curl}  h={['40','300']}/>
  <Text>Lie face down on the lying leg curls machine, stretching your legs out fully. The roller pad should rest just above the heels, a few inches over your calves. Grasp the support handles on each side of the machine.
Exhale and flex your knees, pulling your ankles as close to your buttocks as possible. Keep your hips firmly on the bench.
Hold briefly.
Inhale as you return your feet to the starting position in a slow and controlled movement</Text>
<br></br>


</HStack>
<Text fontSize={"3xl"}>How many to do? <ul>
  <li>10-12 reps</li>
  <li>use 35lbs to 40lbs</li>
  <li>After a week increase 10 lbs</li>
</ul></Text>
  </VStack>


   </Box>

  )
}

export default Elegs


