import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Grid from '@mui/material/Grid';
import Box  from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CssBaseline, Stack, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import {Container} from '@mui/material';
import {Button} from '@mui/material';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline/>
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
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              mask: 'url(https://images.unsplash.com/photo-1572985353481-b9064d14b646?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
            },
          }}
        />
          <Grid item xs={6} sm={8} md={5}>
          <Box sx={{
            bgcolor: 'background.paper',
            pt: 20,
            pb: 6,
          }} >
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          LEARN, CONNECT, THRIVE
          </Typography>
          <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          Where Education Meets Interactivity.
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
          The premier platform for cultivating meaningful connections, acquiring knowledge, and seeking expert guidance within the confines of your academic institution.   
          </Typography>

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

          <Container sx={{py: 8}} maxWidth="md" >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                 <CardMedia 
                 component="div"
                 sx={{
                   // 16:9
                   pt: '56.25%',
                 }}
                 image="http://source.unsplash.com/random"
                 title="Image title"
                 />
                 <CardContent sx={{ flexGrow: 1 }}>
                   <Typography gutterBottom variant="h5">Heading</Typography>
                   <Typography>This is cardMedia</Typography>
                 </CardContent>
                 <CardActions>
                   <Button size="small" color="primary">View</Button>
                   <Button size="small" color="primary">Edit</Button>
                 </CardActions>
 
               </Card>
             </Grid>
             <Grid item xs={12} sm={6} md={4}>
               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                 <CardMedia 
                 component="div"
                 sx={{
                   // 16:9
                   pt: '56.25%',
                 }}
                 image="http://source.unsplash.com/random"
                 title="Image title"
                 />
                 <CardContent sx={{ flexGrow: 1 }}>
                   <Typography gutterBottom variant="h5">Heading</Typography>
                   <Typography>This is cardMedia</Typography>
                 </CardContent>
                 <CardActions>
                   <Button size="small" color="primary">View</Button>
                   <Button size="small" color="primary">Edit</Button>
                 </CardActions>
 
               </Card>
             </Grid>
           
          </Grid>
        </Container>
      <Footer/>
    </div>
  )
}

export default Home
