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
import axios from "axios";


const Profile = ({setLoginUser}) => {
  const nav = useNavigate();
  const [post, setPost] = useState(
  [])
  useEffect(() => {
    axios.get("http://localhost:3003/profile")
 
    .then((response) => {
      setPost(response.data);
    });
  }, []);



  if (!post) return <div>Loading...</div>;

  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <Text fontSize="6xl">Profile</Text>
      <VStack
        alignItems={"stretch"}
        spacing={"8"}
        w={["full", "96"]}
        m={"auto"}
        my={"16"}
      >
<table border={'122px'}>
  <tr>
    <th>Name</th>
    <th>Email</th>
  </tr>
  {post.map(i => {
    return (
      <tr>
        <td>{i.name}</td>
        <td>{i.email}</td>
      </tr>
    )
  })}
</table>
    

        <div className="button" onClick={() => nav("/exercisehome")}>
          ExerciseHome
        </div>
      </VStack>
    </Container>
  );
};

export default Profile;