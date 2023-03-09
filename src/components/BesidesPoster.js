import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Poster from '../Things/images/Poster.jpeg';

const BesidesPoster = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#Fbaaaa" fontWeight="900" fontSize="30px">FitCzar Fitness</Typography>
    <Typography fontWeight={770} sx={{ fontSize: { lg: '46px', xs: '42px' } }} mb="23px" mt="30px" color="#bbabaf" >
      Work Hard and be Happy <br />
    </Typography>
    <Typography fontSize="25px" fontFamily="Times Roman" lineHeight="35px" color="#123bbf">
     Look for Exercises Below and Have a wonderful body
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FFaa22', padding: '15px', fontSize: '25px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>View Exercises</a>
    </Stack>
    <Typography fontWeight={900} color="#FFbb11" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '160px' }}>
      SSW-695
    </Typography>
    <img src={Poster} alt="poster" className="poster" />
  </Box>
  )
}

export default BesidesPoster