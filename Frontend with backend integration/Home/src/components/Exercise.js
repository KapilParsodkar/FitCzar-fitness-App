import React from 'react'
import './exercise.css'
import {Text} from "@chakra-ui/react"

const ExerciseHome = ({setLoginUser}) => {
  return (
    <div className='exer'>
      <h1 className='button'>exercise home page</h1>
      <div className='button' onClick={()=>setLoginUser({})}>Logout</div>
    </div>
  )
}

export default ExerciseHome