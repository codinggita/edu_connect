import React from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@mui/material'
import Diversity2Icon from '@mui/icons-material/Diversity2';

const Navbar = () => {
  return (
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <Diversity2Icon/>
          </IconButton>
          <Typography variant='h6' component='div' sx={{flexGrow:1}}>
            EDUCONNECT
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar
