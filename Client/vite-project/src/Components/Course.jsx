import React from 'react'
import { Container,Grid,Card,CardMedia,CardActions,CardContent,Button,Typography, Box,Stack,Divider} from '@mui/material'
import Navbar from './Navbar'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const cards=[1,2,3,4,5,6,7,8,9]

const subjects = ['Math', 'English', 'Science', 'History'];


function Course() {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
        {/* Navbar */}

        <Navbar/>

         {/* Words */}
         <main>
        <Box sx={{
    bgcolor: 'background.paper',
    pt: 8,
    pb: 6,
    display: 'flex', flexDirection: 'column', alignItems: 'center'
  }} >
<Container maxWidth="sm">
  <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
    Course Catalog
  </Typography>
  <Typography variant="h5" align="center" color="textSecondary" paragraph>
    Hello Everyone this is a Course Catalog  
  </Typography>
</Container>


{/* Select */}
<Box sx={{mt: 4}}>
<FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          
          {subjects.map((subject) => (
            <MenuItem key={subject} value={subject}>
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Box>
      </Box>

      <Divider sx={{ mt: 2 }}/>

        {/* Cards */}
        <Container sx={{py: 10}} maxWidth="md" >
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
    Trending Courses  
  </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {cards.map((card)=>(

               <Grid item key={card} xs={12} sm={6} md={4}>
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
                   
                   <Button size="small" color="primary" variant="outlined">Open</Button>
                 </CardActions>
 
               </Card>
             </Grid>
             


            ))}
           
          </Grid>
        </Container>
        </main>

        <Divider sx={{ mt: 2 }}/>
        <Box sx={{ mt: 2 }} />
       

        <footer sx={{ bgcolor: 'background.paper', p: 6}}>
      <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>Courses page...</Typography>
    </footer>
      
    </div>
  )
}

export default Course