import React,{useState,useEffect} from 'react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Text,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './button.css'
import {useParams} from 'react-router-dom'
const Profileshow = () => {

  const params=useParams()

  const[profile,setprofile]=useState([])
  useEffect(()=>{
    getprofile()
  },[])

   const getprofile=async ()=>{
    let result=await fetch(`http://localhost:3001/profiled`)
     let r=await result.json()
     setprofile(r)
   

   }
   
  return (
    <div className='product-list'>
       <Text fontSize={'5xl'}>Profile details</Text>
        <UnorderedList>
      
            <ListItem>first name</ListItem>
            <ListItem>Last name</ListItem>
            <ListItem>age</ListItem>
            <ListItem>gender</ListItem>
            <ListItem>height</ListItem>
            <ListItem>Weight</ListItem>
            <ListItem>fitness level</ListItem>
        </UnorderedList>
        {
            profile.map((i)=>
            <UnorderedList>

  <ListItem>{i.fname}</ListItem>
  <ListItem>{i.lname}</ListItem>
  <ListItem>{i.age}</ListItem>
  <ListItem>{i.gen}</ListItem>
  <ListItem>{i.h}</ListItem>
  <ListItem>{i.w}</ListItem>
  <ListItem>{i.elevel}</ListItem>

</UnorderedList>
)
        }
    
    </div>
  )
}

export default Profileshow