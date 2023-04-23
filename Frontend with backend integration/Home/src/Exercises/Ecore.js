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

import kneeTuck from "../assests/core/kneeTuck.png"
import bridge from "../assests/core/bridge.png"
import birdDog from "../assests/core/birdDog.png"
import crunch from "../assests/core/crunch.png"
import sideBend from "../assests/core/sideBend.png"
import inclinePlank from "../assests/core/inclinePlank.png"


const Ecore = () => {

  return (
    <Box>
      <Text style={{ textAlign: 'center' }} fontSize={"6xl"}>Core Exercises - Beginning</Text>
      <VStack>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Knee Tucks</Heading>
        <HStack>
          <Image src={kneeTuck}  h={['40','300']}/>
          <VStack>
          <Text>This exercise is a simple way to strengthen and tone abdominal muscles.  It’s best done on a mat, not on a hard floor.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Lie flat on the floor, with your arms above your head.</li>
            <li>Exhale and raise your right knee, as if trying to drive it into your chest.</li>
            <li>At the same time, use your core muscles to lift your shoulder blades off the floor and grab your knee with both hands.</li>
            <li>Hold for a moment, then slowly lower your leg and shoulders to starting position.</li>
            <li>Repeat with the left knee.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>6 to 12 reps</li>
            <li>After two weeks, increase the number of reps by half</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Glute Bridges</Heading>
        <HStack>
          <Image src={bridge}  h={['40','300']}/>
          <VStack>
          <Text>This movement uses your gluteus maximus (glutes) muscles to lift your helps, strengthening your core and toning your butt and thighs.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Lie on your back, preferably on a mat for cushioning, with your knees bent to bring your feet closer to your butt, and your hands at your sides, palm down.</li>
            <li>Tighten your core and glutes.</li>
            <li>Exhaling, squeeze your glutes and push your heels into the floor to drive your hips toward the ceiling.</li>
            <li>When you achieve a straight line from knees to hips to chest, hold for 10 to 30 seconds.</li>
            <li>Slowly lower yourself back to the starting position.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>3 reps</li>
            <li>After a week, increase hold time by 10 seconds; after another week, add a repetition</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Bird Dogs</Heading>
        <HStack>
          <Image src={birdDog}  h={['40','300']}/>
          <VStack>
          <Text>This exercise works the abdominal and back muscles, so it’s good for core strengthening, and improving balance and stability.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Start on all fours, with your shoulders stacked above your hands, and your hips over your knees.</li>
            <li>Tighten your core, and lift your right leg straight out at hip level; at the same time, lift your left arm straight out at shoulder level, palm down.</li>
            <li>Pause in this pose for a couple of seconds, then lower both limbs to the starting position.</li>
            <li>Repeat with your left leg and right arm.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>8 to 12 reps, each side</li>
            <li>After a week, increase number of reps by half</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Abdominal Crunches</Heading>
        <HStack>
          <Image src={crunch}  h={['40','300']}/>
          <VStack>
          <Text>A classic core-strengthening technique, crunches work your abdominal muscles by lifting your upper body.  This should be done on a mat for cushioning.  If you have lower-back pain, approach this exercise with care, starting with fewer repetitions and slower movements.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Lie on your back, knees bent, feet flat on the floor about hip-width apart, arms crossed over your chest.</li>
            <li>Tighten your core while keeping your neck and shoulders relaxed.</li>
            <li>Tuck in your chin and roll your upper body up toward your knees, keeping your lower back and feet on the floor.  Pause for a moment in this position.</li>
            <li>Slowly lower your upper back to the start position.</li>
            <li>Repeat.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>1 set of 8 to 12 reps</li>
            <li>After two weeks, increase number of reps by half</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Seated Side Bends</Heading>
        <HStack>
          <Image src={sideBend}  h={['40','300']}/>
          <VStack>
          <Text>This deceptively easy exercise gently stretches the the neck, shoulders, back, and obliques, can be done almost anywhere, and presents no risk even to beginners.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Sit on the edge of an exercise bench or chair with your arms at your sides and your feet flat on the floor.</li>
            <li>Keeping your butt solidly on the seat, lean to your right and reach straight down toward the ground with your right hand.</li>
            <li>Return to the starting position.</li>
            <li>Repeat on the left side.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>10 to 20 reps</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Incline Planks</Heading>
        <HStack>
          <Image src={inclinePlank}  h={['40','300']}/>
          <VStack>
          <Text>This is an exercise for the entire body core, and improves posture.  It uses a sturdy chair, bench, or other low obstacle for support.  The lower the support, the more difficult the exercise becomes.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Kneel in front of the supporting bench and lean forward to place your hands or elbows on it.</li>
            <li>Lift your body up into a straight line from shoulders to ankles, supported only on your hands/elbows and the balls of your feet.  If necessary, walk your feet back to get the required distance.  Keep your shoulders stacked over your upper arms, and your core tight so that you don’t sag downward.</li>
             <li>Hold for 30 to 45 seconds, then lower yourself back to the kneeling position.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>2 reps, 30 to 45 seconds each</li>
            <li>After two weeks, add a third repetition; after two more weeks, add 15 seconds to your hold time</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>


      </VStack>
      <br/>

    </Box>
 

  )
}

export default Ecore
