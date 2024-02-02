import React from 'react'
import {Typography,Box,Stack, Button, AppBar,Card,CardActions, CardMedia,CssBaseline,Grid,Toolbar,Container} from '@mui/material'
import UserProfilePage from './UserProfilePage'
import Navbar from './Navbar'
import Footer from './Footer'


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
    <Navbar/>
    <Box sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
    
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(245, 245, 245, 0.95))`,
          }} >
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" component="div" sx={{ mb: 6 }}>
      Hello Everyone! Welcome to our platform, a revolutionary web application designed to foster
      interactive learning experiences and facilitate the sharing of educational resources among
      students worldwide.
    </Typography>
    <Typography variant="body1" align="center" color="textSecondary" component="div" sx={{ mb: 6 }}>
      Our mission is to unite students from global colleges, offering a diverse array of courses
      presented by their peers.
    </Typography>
    <Typography variant="body1" align="center" color="textSecondary" component="div" sx={{ mb: 6 }}>
    With our platform, users have the freedom to explore a wide range of courses tailored to their interests and academic needs. From language studies to advanced mathematics, there's something for everyone.
    </Typography>
    <Typography variant="body1" align="center" color="textSecondary" component="div" sx={{ mb: 6 }}>
    Join us on our journey to redefine the way students learn and collaborate. Together, let's embrace the power of knowledge exchange and create a brighter future for education.    </Typography>

        </Container>
      </Box>
    <UserProfilePage/>
    <Footer/>
    </>
  )
}

export default About
