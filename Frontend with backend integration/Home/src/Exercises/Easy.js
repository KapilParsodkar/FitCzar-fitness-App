
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
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const Easy = () => {
    const nav=useNavigate()
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <Text fontSize="6xl">Easy Exercise</Text>
      <VStack
        alignItems={"stretch"}
        spacing={"8"}
        w={["full", "96"]}
        m={"auto"}
        my={"16"}
      >

        <div className="button" onClick={() => nav("/elegs")}>
          Easy leg exercises
        </div>
        
        <div className="button" onClick={() => nav("/eupper")}>
          Easy upper-body exercises
        </div>
        
        <div className="button" onClick={() => nav("/ecore")}>
          Easy core exercises
        </div>
        
        <div className="button" onClick={() => nav("/eaerobic")}>
          Easy aerobic exercises
        </div>
        
      </VStack>
    </Container>
  )
}

export default Easy