import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Stack, Button,Box} from '@mui/material'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate()

  return (
    
    <AppBar  color="primary">
        <Toolbar sx={{ justifyContent: 'space-between' }}>

        <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Container for logo and title */}
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <Diversity2Icon />
          </IconButton>
          <Button color="inherit" sx={{ fontSize: 18, ml: 1,}} onClick={()=>{navigate("/")}}>EDUCONNECT
            
          </Button>
        </Box>

        <Stack direction='row' spacing={2}>
            <Button color='inherit' onClick={()=>{navigate("/courses")}}>Courses</Button>
            <Button color='inherit' onClick={()=>{navigate("/about")}}>About</Button>
            <Button color='inherit' onClick={()=>{navigate("/login")}}>Login</Button>
            <Button color='inherit' onClick={()=>{navigate("/signup")}}>Sign Up</Button>
        </Stack>
          

          
        </Toolbar>
      </AppBar>
    
    )
}

export default Navbar