import React,{useState,useEffect} from 'react'
import { Container, VStack,Heading,Input,Text } from '@chakra-ui/react'
import './button.css'
import { useNavigate } from "react-router-dom"
import axios from "axios"


const Login = () => {
  const nav=useNavigate()
    const [email,setemail]=useState('')
    const [pwd,setpwd]=useState('')

    useEffect(()=>{
      const auth=localStorage.getItem('user')
      if(auth){
            nav("/")
      }
    })
    const handlelogin=async ()=>{
        console.log(email,pwd)
        const result=await fetch("http://localhost:3001/login",{
          method:'post',
          body:JSON.stringify({email,pwd}),
           headers:{
              'Content-Type':'application/json'
           }
          })
          let r= await result.json()
          console.log(r)
          if(r.name){
            localStorage.setItem("user",JSON.stringify(r))
            nav("/")
          }else{
            alert("enter coreect details")
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
        <Heading>Welcome</Heading>

        <Input
         type="text" name="email" placeholder='enter email'  value={email} onChange={(e)=>setemail(e.target.value)}
        />
        <Input
         type="password" placeholder='enter Password' name="password" onChange={(e)=>setpwd(e.target.value)} value={pwd}
        />



<div className='button' onClick={handlelogin}>Log In</div>

        <Text textAlign={'right'}>
          New User?{' '}
          <div className='button' onClick={() => nav("/signup")}>Sign Up</div>
      
        </Text>
      </VStack>
    </form>
  </Container>
  )
}

export default Login