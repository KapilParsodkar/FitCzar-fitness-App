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
      <Text style={{ textAlign: 'center' }} fontSize={"6xl"}>Leg Exercises - Beginning</Text>
      <VStack>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Squats</Heading>
        <HStack>
          <Image src={squats}  h={['40','300']}/>
          <VStack>
          <Text>The basic squat is an extremely effective lower body move that strengthens all leg muscles including glutes, quads, hamstrings, and calves.  The motion of keeping your balance while maintaining an upright posture will deliver an entire leg workout with core strength as an added bonus, making the squat the ultimate lower body workout.</Text>
          <Text>Body weight alone is a great way to start building strength and challenging your muscles.  That being said, if you find this too easy, hold a pair of dumbbells by your sides or a barbell with no plates across your shoulders to make the squat more effective.  However, make sure you use the instructions below and practice a basic squat until you learn how to do it properly and with a good range of motion.  Range of motion is the key to this exercise.  Slightly bending your knees is not a squat – it’s a knee bend.</Text>
          <Text>Squats help strengthen your back, if you maintain good posture and pull your abdominal muscles in throughout.  Squats also reduce the risk of future injuries by strengthening the knee and ankle muscles.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Stand with your feet slightly wider apart than your hips, toes pointed slightly out, arms straight out in front of you, and your core muscles tight</li>
            <li>Keep your eyes on a point straight ahead of you</li>
            <li>Inhale deeply and push your hips back, and THEN allow your knees to start bending</li>
            <li>Keep your knees over your feet (don't let them move toward one another) and continue to lower yourself until your hips are below your knees</li>
            <li>Exhale, keeping your core tight, and push with your feet flat on the ground to bring yourself back up; don't go up on your toes, or rock back on your heels!</li>
            <li>As you reach full standing position, tighten your buttocks to make sure the glutes are getting their workout</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do? <ul>
            <li>10-12 reps</li>
            <li>(optional) 5 to 10 lbs of weight</li>
            <li>After a week increase by 5 lbs</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Leg Curls</Heading>
        <HStack>
          <Image src={curl}  h={['40','300']}/>
          <VStack>
          <Text>Prone leg curls work the hamstrings and calf muscles, with some benefit for the glues, things, and shins as well if controlled motion is maintained.  They present some risk for anyone with knee or ankle injuries, and these users should begin by using much less weight.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Lie face-down on the prone leg-curl machine, stretching your legs out fully.  The roller pad should rest just above the heels, a few inches below your calves.  Grasp the support handles on each side of the machine.</li>
            <li>Exhale and flex your knees, pulling your ankles as close to your buttocks as possible.  Keep your hips firmly on the bench.</li>
            <li>Hold briefly.</li>
            <li>Inhale as you return your feet to the starting position in a slow, controlled movement.</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do?<ul>
            <li>8-12 reps</li>
            <li>35 to 40 lbs of weight</li>
            <li>After a week increase by 10 lbs</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Leg Extensions</Heading>
        <HStack>
          <Image src={extensions}  h={['40', '300']}/>
          <VStack>
          <Text>Leg extensions target the quadriceps, the large muscles of the front of the thigh.  If your main cardio exercise is walking or running, which relies more on the hamstring muscle at the back of the thigh, leg extensions are especially beneficial to add balance to your leg workouts.</Text>
          <Text>This exercise is normally done on the bench of a lever machine, but can be performed in a chair while wearing ankle weights.  Position the bench or chair so that your knees bend at a 90° angle when seated and the pads or weights are against your ankles.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Grasp the handlebars or armrests to brace yourself</li>
            <li>On a machine, lift and lower both legs together; if using ankle weights, lift and lower one leg, then the other</li>
            <li>Lift the weight by extending your lower legs while exhaling, until your legs are almost straight; don't lock your knees or arch your back; keep your back against the backrest</li>
            <li>Exhale and lower the weight to the starting position</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do?<ul>
            <li>three sets of 10-12 repetitions</li>
            <li>10 to 20 lbs of weight</li>
            <li>After a week increase by 5 lbs</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Lunges</Heading>
        <HStack>
          <Image src={lunges}  h={['40', '300']}/>
          <VStack>
          <Text>Lunges tone and strengthen most of the lower body, including the quads, hamstrings, glutes, and calves.  They also improve hip flexibility, which is important for anyone who spends much of the day sitting.  They're a good complement to squats.</Text>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Stand with your right foot about 2 to 3 feet in front of your left foot (optimal distance depends on your size), with your shoulders back and your hands on your hips</li>
            <li>Bend both knees and lower your body until the back knee is a few inches from the floor and the front leg is at a 90° bend, with your weight about evenly distributed between both legs; if this low a lunge is uncomfortable, lower yourself only halfway to this point</li>
            <li>Push the heel of the front foot against the ground to raise yourself back to your starting position</li>
            <li>After finishing your target number of repetitions, change stance to left foot in front and repeat</li>
          </ol>
          <Text fontSize={"2xl"}>How many to do?<ul>
            <li>three sets of 8-10 repetitions</li>
            <li>no added weight to start</li>
            <li>After a week add 2 more repetitions per side</li>
          </ul></Text>
          </VStack>
        </HStack>
        <br/>

      </VStack>
      <br/>

    </Box>

  )
  
}

export default Elegs


