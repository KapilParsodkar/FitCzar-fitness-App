
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

const Medium = () => {
    const nav=useNavigate()
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <Text fontSize="6xl">Medium Exercise</Text>
      <VStack
        alignItems={"stretch"}
        spacing={"8"}
        w={["full", "96"]}
        m={"auto"}
        my={"16"}
      >

    

        <div className="button" onClick={() => nav("/mlegs")}>
          Medium legs
        </div>
        
        <div className="button" onClick={() => nav("/mupper")}>
    Medium upper
        </div>
      </VStack>
    </Container>
  )
}

export default Medium