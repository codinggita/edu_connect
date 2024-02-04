import React from 'react'
import {Box} from "@mui/material"
import SideNavbar from '../Components/SideNavbar'
import ProfileNavbar from '../Components/ProfileNavbar'

function Profile() {
  return (
    <>
    <ProfileNavbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
      
        <SideNavbar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <h1>Home</h1>
       
      </Box>
      
    </Box>
    
    </>
    
  )
}

export default Profile