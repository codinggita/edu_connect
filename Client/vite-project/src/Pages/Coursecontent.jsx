import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent, CardMedia, Container, Typography, } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from '../Components/Navbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Coursecontent() {
  
  return (
  <>
  <Navbar/>
  <Box sx={{mt: 12}}/>
      <Container  maxWidth="lg">
      <Card sx={{ position: 'relative',height: '200px' }}>
  <CardMedia
    component="img"
    height="194"
    src="https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    alt="Paella dish"
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Adjust image fitting as needed
      opacity: 0.7, // Adjust opacity for text visibility
    }}
  />
  <CardContent sx={{ position: 'relative', zIndex: 1 }}> {/* Ensure text is above image */}
    <Typography variant="h2" color="textPrimary" gutterBottom>CourseName</Typography>
    <Typography variant="h4" color="textSecondary" gutterBottom>About the course</Typography>
  </CardContent>
</Card>
<Box sx={{mt: 4}}/>

<Grid container spacing={2}>
        <Grid item xs={8}>
        <Typography variant="h5" gutterBottom>Madame Bovary by Gustave Flaubert</Typography>
        <Typography variant="body1" >Immerse yourself in the tragic tale of Emma Bovary, a woman trapped in a mundane marriage who seeks passion and fulfillment through reckless affairs.</Typography><Typography variant="body1"> This masterpiece of Realism explores themes of social status, societal expectations, and the destructive power of romanticism.</Typography>

        </Grid>
        <Grid item xs={4}>
          <Typography>Type Something Here</Typography>
        </Grid>
      </Grid>

      </Container>
  
  </>
    
    
  );
}

