import React from 'react'

import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import logo from '../Things/images/logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '125px', xs: '45px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={logo} alt="logo" style={{ width: '100px', height: '90px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="38px"
      fontFamily="Times Roman"
      fontSize="28px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#ffaa11', borderBottom: '3px solid #aabbff' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#ffaa11' }}>Exercises</a>
    </Stack>
  </Stack>
  )
}

export default Navbar