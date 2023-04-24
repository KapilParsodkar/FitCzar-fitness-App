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
import latPulldown from "../assests/upper/latPulldown.png"
import tricepsKickback from "../assests/upper/tricepsKickback.png"


const Hupper = () => {

  return (
    <Box>
      <Text style={{ textAlign: 'center' }} fontSize={"6xl"}>Upper-Body Exercises - Advanced</Text>
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
            <li>10 to 12 reps</li>
            <li>30 to 40 lbs per dumbell</li>
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
            <li>25 to 40 lbs per dumbell</li>
            <li>After a week increase by 5 lbs</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Back Extensions</Heading>
        <HStack>
          <Image src={extensions}  h={['40','300']}/>
          <VStack>
          <Text>This is a good exercise for strengthening the back and core.  It’s best done on a mat rather than on a hard floor.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Lie face-down on the mat with your arms extending straight out above your head.</li>
            <li>Engage your abs and slowly lift your chest and arms off the ground, focusing on using the lower back muscles.</li>
            <li>Lower and repeat.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>3 sets of 15 to 18 reps</li>
            <li>no weight</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Lat Pulldowns</Heading>
        <HStack>
          <Image src={latPulldown}  h={['40','300']}/>
          <VStack>
          <Text>This exercise strengthens the shoulders, and the back muscles that support the spine.  It has the added benefit of improving posture.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Sit straddling the bench, facing the machine.  Grip the bar with hands a bit more than shoulder width apart, palms facing forward.</li>
            <li>Use your back to pull the bar down to your chest by squeezing your shoulder blades together.  Leaning backward slightly as you do this is fine.</li>
            <li>Allow the bar to return slowly to starting position, keeping your shoulders down -- don't let the weight of the bar pull them up.</li>
            <li>Repeat.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>3 sets of 8 to 12 reps</li>
            <li>80 to 140 lbs of weight total</li>
            <li>After a week increase by 10 lbs</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Triceps Kickbacks</Heading>
        <HStack>
          <Image src={tricepsKickback}  h={['40','300']}/>
          <VStack>
          <Text>The triceps kickback improves upper-arm and upper-body strength, stabilizes shoulder joints, and improves movement during many types of sports.  The starting version is supported by a padded bench, although it can be performed standing as well.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Place your left knee on the bench, and lean forward to place your left hand on the bench as well, keeping your back straight.</li>
            <li>Hold the dumbell in your right hand, with your upper arm parallel to the ground and the weight hanging down.</li>
            <li>Push the dumbell up and back until your arm is almost straight, but avoid locking your elbow.</li>
            <li>Lower the dumbell to starting position in a controlled motion, without letting your upper arm drop.</li>
            <li>Pause for just a moment and repeat -- don’t swing the weight or use its momentum for the next kickback, as that cheats you of the benefits of this exercise.</li>
            <li>After finishing your right side, do the same on your left side.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>3 sets of 8 to 12 reps, both left and right sides</li>
            <li>30 to 45 lbs of weight</li>
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

