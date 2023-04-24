
import { Text } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'
const UpdateExercises = () => {
    const nav=useNavigate()
    const [name,setname]=useState("")
    const [sets,setsets]=useState("")
    const [reps,setreps]=useState("")
    const [lbs,setlbs]=useState("")
   
    const params=useParams()

    useEffect(()=>{
      getexercisedetails()
    },[])

    const getexercisedetails=async()=>{
     let result=await fetch(`http://localhost:3001/exercise/${params.id}`)
     let r=await result.json()
     setname(r.name)
     setsets(r.sets)
     setreps(r.reps)
    
     setlbs(r.lbs)
    }
    const updateexercise= async()=>{
        
   
     let result= await fetch(`http://localhost:3001/exercise/${params.id}`,{
      method:"Put",
      body:JSON.stringify({name,sets,reps,lbs}),
      headers:{
          "Content-Type":"application/json"
      }
  
     })
     result= await result.json()
     console.log(result)
     nav("/exerciselist")

    }
  return (
    <div className='product'>
        <Text fontSize={'5xl'}>Update Exercise</Text>
        <input className='inputbox' type="text" placeholder='enter exercise name'
        value={name}
      onChange={(e)=>{setname(e.target.value)}}
        />
   
      
        <input type="text" placeholder='enter total sets'
            className='inputbox' 
            value={sets}
            onChange={(e)=>{setsets(e.target.value)}}
        />
           
      
        <input type="text" placeholder='enter total reps'
            className='inputbox' 
            value={reps}
            onChange={(e)=>{setreps(e.target.value)}}
        />
          
      
        <input type="text" placeholder='enter weight you want to do'
            className='inputbox' 
            value={lbs}
            onChange={(e)=>{setlbs(e.target.value)}}
        />
     
        <button className='button' onClick={updateexercise}>Update Exercise</button>

    </div>
  )
}

export default UpdateExercises