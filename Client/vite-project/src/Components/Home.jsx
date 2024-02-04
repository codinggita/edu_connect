import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Grid from '@mui/material/Grid';
import Box  from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CssBaseline, Stack, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import {Container} from '@mui/material';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';


const tiers = [
  {
    title: 'Personalized Learning',
    price: 'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.',
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Trusted Content',
    subheader: '',
    price: 'Created by experts, Edu Connect’s library of trusted, standards-aligned practice and lessons covers through early college, grammar, science, history, and more. It’s all free for learners and teachers.',
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Empower Teachers',
    price: 'With Edu Connect, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.',
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const Home = () => {
  return (
    <div>
      <Navbar/>

      {/* main page */}
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

          {/* Cards */}
          <Box
  sx={{
    bgcolor: 'background.paper',
    pt: 8,
    pb: 6,
    display: 'flex', // Ensure full-width container
    flexDirection: 'column', // Stack cards vertically
    alignItems: 'center', // Center card container
    // Add subtle background gradient (optional)
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.85), rgba(245, 245, 245, 0.85))`,
  }}
>
  <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
    Why EDU CONNECT?
  </Typography>
  <Container maxWidth="md" component="main" sx={{ pt: 4, pb: 6 }}>
    <Grid container spacing={4} alignItems="center"> {/* Adjust spacing and alignment */}
      {tiers.map((tier) => (
        <Grid item key={tier.title} xs={12} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 4 }}> {/* Apply subtle shadow and rounded corners */}
            <CardHeader
              title={tier.title}
              titleTypographyProps={{ align: 'center', sx: { fontWeight: 'bold' } }} // Bold title
              subheaderTypographyProps={{ align: 'center', color: 'textSecondary' }}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                color: (theme) => theme.palette.getContrastText(theme.palette.background.paper),
              }}
            />
            <CardContent>
              <Typography variant="body1" align="center" color="textPrimary">
                {tier.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
      <Footer/>
    </div>
  )
}

export default Home
