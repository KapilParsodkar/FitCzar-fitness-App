
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Container, VStack,Heading,Input,Text } from '@chakra-ui/react'
const Profile = () => {
    const nav=useNavigate()
    const [fname,setname]=useState("")
    const [lname,setlname]=useState("")
    const [age,setage]=useState("")
    const [gen,setgen]=useState("")
    const [h,seth]=useState("")
    const [w,setw]=useState("")
    const [elevel,setlevel]=useState("")

    let gens = [
       
      { label: "male", value: "male" },
      { label: "female", value: "female" }
  ]

  let elevls=[
       
    { label: "beginner", value: "beginner" },
    { label: "intermediate", value: "intermediate" },
    { label: "advanced", value: "advanced" },
]
  let handlegen = (e) => {
    setgen(e.target.value)
  }

  let handlelevel = (e) => {
    setlevel(e.target.value)
  }

    const profile= async()=>{
     
 
   
  
        const userid= JSON.parse(localStorage.getItem("user"))._id
        const result= await fetch("http://localhost:3001/profile",{
            method:"post",
            body:JSON.stringify({fname,lname,age,gen,h,w,elevel,userid}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        let r=await result.json()
        console.log(r)
        if(r.elevel=="beginner"){
          nav('/easy')
        }else if(r.elevel=="intermediate"){
          nav('/medium')
        }else if(r.elevel=="advanced"){
          nav('/hard')
        }else{
          nav('/profileshow')
        }
       

     
    }
  return (
  
    <div className='product'>
        <Text fontSize={"6xl"}>Profile</Text>
        <input className='inputbox' type="text" placeholder='enter  name'
        value={fname}
      onChange={(e)=>{setname(e.target.value)}}
        />
      
      
        <input type="text" placeholder='enter last name'
            className='inputbox' 
            value={lname}
            onChange={(e)=>{setlname(e.target.value)}}
        />
             
      
        <input type="text" placeholder='enter age'
            className='inputbox' 
            value={age}
            onChange={(e)=>{setage(e.target.value)}}
        />
   
   <select onChange={handlegen}> 
      <option value="">whats your gender</option>
       
      {gens.map((gen) => <option value={gen.value}>{gen.label}</option>)}
    </select>
      <br></br><br></br>
    <select onChange={handlelevel}> 
      <option value="">whats your level of fitness</option>
       
      {elevls.map((elevel) => <option value={elevel.value}>{elevel.label}</option>)}
    </select>

    <input type="text" placeholder='enter Height'
            className='inputbox' 
            value={h}
            onChange={(e)=>{seth(e.target.value)}}
        />
          <input type="text" placeholder='enter weight'
            className='inputbox' 
            value={w}
            onChange={(e)=>{setw(e.target.value)}}
        />
   
        <button className='button' onClick={profile}>Add details</button>

    </div>
  )
}

export default Profile