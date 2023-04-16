import React,{useState} from 'react'
import { Container, VStack,Heading,Input,Text } from '@chakra-ui/react'
import './button.css'
import { useNavigate } from "react-router-dom"
import axios from "axios"


const Login = ({  setLoginUser}) => {
const nav=useNavigate()
  const [user,setuser]=useState({
    email:"",
    password:""
  })


  // Update the value of the control that has changed
  const handleChange = e => {
    const { name, value } = e.target
    setuser({
        ...user,
        [name]: value
    })
}


// Called by the "Login" button
const login=()=>{
  axios.post("http://localhost:3003/login", user)
  .then(res => {
    alert(res.data.message)
    setLoginUser(res.data.user)
    nav("/exercisehome")
  })
  .catch(err => {
    alert(err);
  });
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
        <Heading>Welcome</Heading>

        <Input
         type="text" name="email" placeholder='enter email' value={user.email} onChange={handleChange}
        />
        <Input
         type="password" placeholder='enter Password' name="password" value={user.password} onChange={handleChange}
        />



<div className='button' onClick={login}>Log In</div>

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