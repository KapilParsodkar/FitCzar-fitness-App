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

  // To store user input
  const [user,setuser]=useState({
    name:"",
    email:"",
    password:"",
    reenterPwd:""
  })


  // Capture user entries
  const handleChange = e => {
    const { name, value } = e.target
    setuser({
        ...user,
        [name]: value
    })
  }


  // Called by "Sign Up" button
  const signup = () => {
    const { name, email, password, reenterPwd } = user;
    // Regex for testing format of user input
    const email_regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name && email && password && (password === reenterPwd)) {
      // Check for minimum length
      if (password.length < 8) {
        alert("Password must be at least 8 characters")
      }
      // Check the format of the e-mail address
      else if (email_regex.test(email) === false) {
        alert(email + " is not structured as a valid e-mail address");
      }
      else {
        axios.post("http://localhost:3003/signup", user)
            .then(res => {
              alert(res.data.message);
              nav("/login")
            })
            .catch(err => {
              alert(err);
            });
      }
    } else {
      alert("invalid post");
    }
  }


  // Render the page
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

        <div className='button' onClick={signup}>Sign Up</div>

        <Text textAlign={'right'}>
          Already Signed Up?{' '}
          <div className='button' onClick={() => nav("/login")}>Log In</div>
        </Text>
      </VStack>
    </form>
  </Container>
  )
}

export default Signup