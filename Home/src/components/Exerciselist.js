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
const Exerciselist = () => {
    const [exercise,setexercise]=useState([])
   useEffect(()=>{
           getexercise()
   })
   const getexercise=async ()=>{
    let result=await fetch("http://localhost:3001/exercises")
    let r=await result.json();
    setexercise(r)

   }
   const deleteexercise=async(id)=>{
      let result=fetch(`http://localhost:3001/exercise/${id}`,{
     method:"Delete"
      })
      let r= await result.json()
      if(r){
        getexercise()
      }
   }
  return (
    <div className='product-list'>
       <Text fontSize={'5xl'}>Exercises list</Text>
        <UnorderedList>
            <ListItem>S.no</ListItem>
            <ListItem>name of exercise</ListItem>
            <ListItem>sets</ListItem>
            <ListItem>reps</ListItem>
            <ListItem>lbs</ListItem>
            <ListItem>Delete</ListItem>
            <ListItem>Update</ListItem>
        </UnorderedList>
        {
            exercise.map((i,index)=>
            <UnorderedList>
  <ListItem>{index+1}</ListItem>
  <ListItem>{i.name}</ListItem>
  <ListItem>{i.sets}</ListItem>
  <ListItem>{i.reps}</ListItem>
  <ListItem>{i.lbs}</ListItem>
  <ListItem><button className='button' onClick={()=>deleteexercise(i._id)}>Delete</button></ListItem>
  <ListItem><Link to={"/update/"+i._id}>Update</Link></ListItem>
</UnorderedList>
)
        }
    
    </div>
  )
}

export default Exerciselist