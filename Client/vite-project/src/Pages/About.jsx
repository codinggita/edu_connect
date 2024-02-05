import React from 'react'
import {Typography,Box,CssBaseline,Card,CardActions, CardMedia,CardContent,Button,Container,Divider} from '@mui/material'

import Navbar from '../Components/Navbar'
import Image from "./Assests/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg"


const About = () => {
  return (
    <>
    <CssBaseline/>
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

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Amon"
        height="180"
        image={Image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Amon
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Hi there! I'm Amon, a highly motivated and enthusiastic 3rd year full-stack developer.I'm passionate about building innovative and user-friendly web applications, and I'm always eager to learn new technologies and expand my skillset. 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        If you're interested in connecting, please feel free to reach out to me on LinkedIn or GitHub.        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Contact Me</Button>
        
      </CardActions>
    </Card>
      </Box>

      <Divider sx={{ mt: 2 }}/>
        <Box sx={{ mt: 2 }} />
    
    <footer sx={{ bgcolor: 'background.paper', p: 6}}>
      <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>Courses page...</Typography>
    </footer>
    </>
  )
}

export default About