import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
// const logo = 'https://i.ibb.co/s9Qys2j/logo.png';
export default function Navbar() {
  return (
    <Stack 
      direction="row"
      alignItems="center" 
      padding={2} 
      sx={{ backgroundColor: '#000', color: '#fff', position: 'sticky', top: 0, justifyContent:"space-between" }}>
      <Link to="/" style={{display: "flex", alignItems: "center"}}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      {/* <span style={{fontSize: 22, fontWeight: 600, marginLeft: 10}}>YouTube</span> */}
      <SearchBar />
    </Stack>
  )
}
