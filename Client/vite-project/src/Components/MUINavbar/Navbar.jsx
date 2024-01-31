import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Stack, Button,Box} from '@mui/material'
import Diversity2Icon from '@mui/icons-material/Diversity2';

const Navbar = () => {
  return (
      <AppBar position="static">
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
            <Button color='inherit'>Features</Button>
            <Button color='inherit'>Pricing</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Login</Button>
          </Stack>
          
        </Toolbar>
      </AppBar>
  )
}

export default Navbar
