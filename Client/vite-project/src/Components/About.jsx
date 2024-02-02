import React from 'react'
import {Typography,Box,Stack, Button, AppBar,Card,CardActions, CardMedia,CssBaseline,Grid,Toolbar,Container} from '@mui/material'
import UserProfilePage from './UserProfilePage'


const About = () => {
  return (
    <>
    <CssBaseline/>
    {/* <main>
      <div>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Hello Everyone this is a About page. 
          </Typography>
        </Container>
      </div>
    </main> */}
    <Box sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }} >
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Hello Everyone!   
          </Typography>
        </Container>
      </Box>
    <UserProfilePage/>
    </>
  )
}

export default About
