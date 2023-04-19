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
import overheadPress from "../assests/upper/overheadPress.png"
import extensions from "../assests/upper/backExtensions.png"


const Mupper = () => {

  return (
    <Box>
      <Text style={{ textAlign: 'center' }} fontSize={"6xl"}>Upper-Body Exercises - Intermediate</Text>
      <VStack>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Dumbell Curls</Heading>
        <HStack>
          <Image src={curls}  h={['40','300']}/>
          <VStack>
          <Text>Training each arm independently, with one weight in each hand, helps you develop symmetrically, evening out the difference between your left and right arms.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Standing with feet about hips distance apart, hold the weights in front of your thighs with your palms facing out and arms fully extended.</li>
            <li>Brace your abs and bend the elbows, curling the weights towards the shoulders.  Make sure your elbows don’t come forward but stay at your torso.</li>
            <li>Slowly lower to starting position without losing tension on the muscle, and repeat.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>8 to 12 reps</li>
            <li>15 to 25 lbs of weight</li>
            <li>After a week increase by 5 lbs</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Overhead Presses</Heading>
        <HStack>
          <Image src={overheadPress}  h={['40','300']}/>
          <VStack>
          <Text>This exercise uses a pair of dumbells to develop the shoulder muscles.  Before beginning, try lifting the weights straight up over your head, palms facing out, while keeping your core braced.  If you can't help arching your back in this position, choose lighter weights.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Stand with feet about hip-width apart, and bend your elbows to bring the dumbells up into the start position, at the same level as your ears.</li>
            <li>Keeping your core tight and without arching your back, press the weights straight up above you as high as you can reach.</li>
            <li>Lower the weights to the start position in a slow, controlled motion.</li>
            <li>Repeat the previous two steps.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>8 to 12 reps</li>
            <li>15 to 25 lbs of weight</li>
            <li>After a week increase by 5 lbs</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Back Extensions</Heading>
        <HStack>
          <Image src={extensions}  h={['40','300']}/>
          <VStack>
          <Text>This is a good exercise for strengthening the back and core.  It’s best done on a mat rather than on a hard floor.  If you find it too easy, try it with your arms extended straight in front of you.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Lie face-down on the mat and place your hands on the floor next to your ears, elbows bent.</li>
            <li>Engage your abs and slowly lift your chest off the ground, focusing on using the lower back muscles.</li>
            <li>You can gently use your hands for support if you need to, but try lifting them also, parallel to your body, so that you use your back muscles as much as possible.</li>
            <li>Lower and repeat.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>3 sets of 12 to 16 reps</li>
            <li>no weight</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>


      </VStack>
      <br/>

    </Box>

  )
}

export default Mupper