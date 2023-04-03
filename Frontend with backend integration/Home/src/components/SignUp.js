import React,{useState} from 'react'
import {
  Avatar,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import './button.css'
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Signup = () => {

  const nav=useNavigate()

  const [user,setuser]=useState({
    name:"",
    email:"",
    password:"",
    reenterPwd:""
  })



  const handleChange = e => {
    const { name, value } = e.target
    setuser({
        ...user,
        [name]: value
    })
}

const signup = () => {
  const { name, email, password, reenterPwd } = user;
  if (name && email && password && (password === reenterPwd)) {
    axios.post("http://localhost:3003/signup", user)
      .then(res => {
        alert(res.data.message);
        nav("/login")
      })
      .catch(err => {
        alert(err);
      });
  } else {
    alert("invalid post");
  }
}
  return (
  

    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
      <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['full', '96']}
        m={'auto'}
        my={'16'}
      >
        <Heading>Create a account</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'} />

        <input type="text" name="name" value={user.name}  placeholder='enter Name' onChange={handleChange}
        />
        <input type="text" name="email" value={user.email} placeholder='enter email' onChange={handleChange}
        />
        <input type="password"  name="password" value={user.password} placeholder='enter Password' onChange={handleChange}
        />

        <input type="password"  name="reenterPwd" value={user.reenterPwd}  placeholder='Re-enter Password' onChange={handleChange}/>

        <div className='button' onClick={signup}>SignUp</div>

        <Text textAlign={'right'}>
          Already Signed Up?{' '}
          <div className='button' onClick={() => nav("/login")}>Login</div>
        </Text>
      </VStack>
    </form>
  </Container>
  )
}

export default Signup