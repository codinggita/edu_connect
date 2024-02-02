import React from 'react'
import Grid from '@mui/material/Grid';


const Pricing = () => {
  return (
    <div>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        </Grid>
        
      
    </div>
  )
}

export default Pricing

