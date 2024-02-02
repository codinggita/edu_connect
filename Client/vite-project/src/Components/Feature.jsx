import React from 'react'
import {Typography,AppBar,Card,CardActions, CardMedia,CssBaseline,Grid,Toolbar,Container, Stack, Button, Box} from '@mui/material'
import Navbar from './Navbar'


const Feature = () => {
  return (
    <>
    <CssBaseline/>
    
    <main>
   
      <div>
      <Navbar/>
      <Box sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }} >
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          LEARN, CONNECT, THRIVE: Where Education Meets Interactivity.
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
      </div>
    </main>
    </>
  )
}

export default Feature