import React,{useState,useEffect} from 'react'
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
  const [name,setname]=useState("");
  const [pwd,setpwd]=useState("");
  const [email,setemail]=useState("")
  const nav=useNavigate()

  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
          nav("/login")
    }
  })
  const data=async()=>{
      console.log(name,email,pwd)
      const result=await fetch("http://localhost:3001/signup",{
      method:'post',
      body:JSON.stringify({name,email,pwd}),
       headers:{
          'Content-Type':'application/json'
       }
      })
      let r= await result.json()
      console.log(r)
      localStorage.setItem("user",JSON.stringify(r))
      nav("/login")
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

        <input type="text" name="name"   placeholder='enter Name' value={name} onChange={(e)=>setname(e.target.value)} 
        />
        <input type="text" name="email" placeholder='enter email'   value={email} onChange={(e)=>setemail(e.target.value)} 
        />
        <input type="password"  name="password" placeholder='enter Password'value={pwd} onChange={(e)=>setpwd(e.target.value)} 
        />

     

        <div className='button' onClick={data}>Sign Up</div>

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