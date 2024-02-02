import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Grid from '@mui/material/Grid';
import Box  from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import {Container} from '@mui/material';
import {Button} from '@mui/material';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
          item
          xs={6} sm={4} md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1572985353481-b9064d14b646?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative', 
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
              mask: 'url(https://images.unsplash.com/photo-1572985353481-b9064d14b646?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
            },
          }}
        />
          <Grid item xs={6} sm={8} md={5}>
          <Box sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }} >
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          LEARN, CONNECT, THRIVE: Where Education Meets Interactivity.
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
          The premier platform for cultivating meaningful connections, acquiring knowledge, and seeking expert guidance within the confines of your academic institution.   
          </Typography>
{/* 
          <div>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary"> 
                See this
                </Button>
              </Grid>

              <Grid item>
                <Button variant="outlined" color="primary"> 
                Secondary
                </Button>
              </Grid>

            </Grid>
          </div> */}

          <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Teachers Here</Button>
              <Button variant="outlined">Learners Here</Button>
            </Stack>
        </Container>
      </Box>
          </Grid>
          </Grid>
      <Footer/>
    </div>
  )
}

export default Home
