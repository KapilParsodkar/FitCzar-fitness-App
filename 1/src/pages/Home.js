import React,{useState} from 'react'
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchBar from '../components/SearchBar'
import BesidesPoster from '../components/BesidesPoster'

const Home = () => {
    const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
    <BesidesPoster/>
    <SearchBar setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home