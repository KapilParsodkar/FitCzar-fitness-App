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

import jumpRope from "../assests/aerobic/jumpRope.png"
import elliptical from "../assests/aerobic/elliptical.png"


const Eaerobic = () => {

  return (
    <Box>
      <Text style={{ textAlign: 'center' }} fontSize={"6xl"}>Aerobic Exercises - Beginning</Text>
      <VStack>
      
      <Text>Aerobic exercises, also referred to as cardio workouts, improve your endurance and the health of your heart, lungs, and circulatory system.  They also aid sleep, boost mood, lower blood pressure, regulate blood sugars, and burn fat.  They require more time and generally less intensity than muscle-building exercises -- minutes, not seconds.</Text>

      <Text>The American Heart Association recommends about 150 minutes of aerobic exercise per week, or 30 minutes a day for five days out of the week.  This time can be broken up, however.  Three ten-minute walks in a day hits those numbers.</Text>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Jump Rope</Heading>
        <HStack>
          <Image src={jumpRope}  h={['40','300']}/>
          <VStack>
          <Text>All you need is a rope or heavy cord, and room to use it.  Make sure your exercise area is smooth, level, and clear of obstructions, including having enough room overhead to swing the rope.  To check rope length, stand on it with feet and ensure that it reaches at least to your armpits.</Text>
          <Text>It’s very common for the rope to catch on your feet if your timing is off or you get tired.  If you have trouble with the timing, practice jumping up and down on one spot before you start.  The muscles of your toes and ankles do most of the work.  Separately, while standing still, practice twirling the rope from behind your feet over your head and down in front.  The wrists do this, while your upper arms hardly move.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Stand with your feet about hip width apart, arms down at your sides holding the handles of the rope, which rests on the ground behind your feet.</li>
            <li>Using your wrists, whirl the rope up behind you and over your head.</li>
            <li>As the rope coming down in front is about the level of your waist, jump and pull your feet up to allow it to pass under you.  It just needs a couple of inches.</li>
            <li>Perform a second, smaller jump while the rope continues its motion behind you and upward again -- in this beginning version, there are TWO jumps for each full circuit of the rope.  This is for timing.</li>
            <li>Continue.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>3 sets of 20 reps</li>
            <li>After two weeks, increase the number of reps by half</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Ellipticals</Heading>
        <HStack>
          <Image src={elliptical}  h={['40','300']}/>
          <VStack>
          <Text>The elliptical machine provides a full cardiovascular workout that’s easier on your back and joints than running.  It looks intimidating, but it simulates a jogger’s gait without the pounding and is intuitive to use, giving constant tactile feedback.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Use the handlebars to steady yourself getting on the machine, and maintain a relaxed grip on each of them.</li>
            <li>Position your feet comfortably on the pedals.</li>
            <li>Push down and forward with whatever foot is in front, letting the other foot travel back and then up until it becomes the pushing foot; use the handles for balance but don't push or pull against them.</li>
            <li>Keep going, at a comfortable pace!  This is a tactile exercise, and words are no substitute for trying it and finding your rhythm.</li>
          </ol>
          <Text fontSize={"2xl"}>How long?<ul>
            <li>15 to 20 minutes</li>
            <li>After a weeks, add 5 minutes</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>


      </VStack>
      <br/>

    </Box>
 

  )
}

export default Eaerobic
