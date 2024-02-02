import React from 'react'
import {Typography,AppBar,Card,CardActions,IconButton, CardMedia,CardContent,CssBaseline,Grid,Toolbar,Container, Stack, Button, Box} from '@mui/material'
import Navbar from './Navbar'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const Feature = () => {
  return (
    <>
    <AppBar  color="primary">
        <Toolbar sx={{ justifyContent: 'space-between' }}>

        <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Container for logo and title */}
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <Diversity2Icon />
          </IconButton>
          <Button color="inherit" sx={{ fontSize: 18, ml: 1 }}><Link to="/">EDUCONNECT</Link>
            
          </Button>
        </Box>

        <Stack direction='row' spacing={2}>
            <Button color='inherit'><Link to="/feature">Features</Link></Button>
            <Button color='inherit'><Link to="/pricing">Pricing</Link></Button>
            <Button color='inherit'><Link to="/about">About</Link></Button>
            <Button color='inherit'><Link to="/login">Login</Link></Button>
        </Stack>
          

          
        </Toolbar>
      </AppBar>
    
    <Box sx={{ mt: 8 }}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <CardMedia
            component="img"
            image="http://source.unsplash.com/random"
            alt="Image 1"
            // Adjust height and width as needed
            height={250}
            width={200}
          />
          <CardContent>
            <Typography variant="h5" align="center">
              Teachers
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
            Unlock your teaching potential with our platform! Enjoy seamless lesson planning, interactive tools, and a supportive community. Gain exposure to a global audience, set your own rates, and receive timely payouts. Elevate your teaching experience and join us today – where innovation meets education for a brighter future.            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained">Teach</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardMedia
            component="img"
            image="http://source.unsplash.com/random"
            alt="Image 2"
            // Adjust height and width as needed
            height={250}
            width={200}
          />
          <CardContent>
            <Typography variant="h5" align="center">
              Learners
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
            Unlock your potential with our platform! Access diverse courses, personalized learning paths, and expert instructors. Gain practical skills, earn certifications, and accelerate your career. Join a vibrant community of learners today and embark on a journey of continuous growth and success.            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained">Learn</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    </Box>
    <Footer/>
    </>
  )
}

export default Feature