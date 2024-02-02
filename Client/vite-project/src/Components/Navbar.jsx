import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Stack, Button,Box} from '@mui/material'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <AppBar  color="primary">
        <Toolbar sx={{ justifyContent: 'space-between' }}>

        <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Container for logo and title */}
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <Diversity2Icon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ ml: 1 }}> {/* Add left margin for spacing */}
            EDUCONNECT
          </Typography>
        </Box>

        <Stack direction='row' spacing={2}>
            <Button color='inherit'><Link to="/feature">Features</Link></Button>
            <Button color='inherit'><Link to="/pricing">Pricing</Link></Button>
            <Button color='inherit'><Link to="/about">About</Link></Button>
            <Button color='inherit'><Link to="/login">Login</Link></Button>
        </Stack>
          

          
        </Toolbar>
      </AppBar>
    
    )
}

export default Navbar