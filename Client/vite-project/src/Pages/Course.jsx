import React from 'react'
import { Container,Grid,Card,CardMedia,CardActions,CardContent,Button,Typography, Box,Divider} from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../Components/Navbar'


const cards=[1,2,3,4,5,6,7,8,9]

const subjects = ['Math', 'English', 'Science', 'History'];


function Course() {
  
  return (
    <div>
      
        {/* Navbar */}

        <Navbar/>

         {/* Heading */}
         <main>
        <Box sx={{
    bgcolor: 'background.paper',
    pt: 8,
    pb: 6,
    display: 'flex', flexDirection: 'column', alignItems: 'center'
  }} >
<Container maxWidth="sm">
  <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
    Courses
  </Typography>
 
</Container>


{/* Accordion */}
<Box sx={{mt: 4}}>
<Typography variant="h5" align="center" color="textSecondary" paragraph>
    Course Catalog  
  </Typography>

    {subjects.map((subject)=>(
      <Accordion key={subject}>
       <AccordionSummary
        expandIcon={<ExpandMoreIcon />
      }
      sx={{
        fontFamily: 'Arial',
        
      }} 
      >
        {subject}
      </AccordionSummary>
      <AccordionDetails  sx={{
        fontFamily: 'Arial',
        
      }} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
      <AccordionActions sx={{ justifyContent: 'flex-start' }}>
        <Button variant='contained'>Visit Course</Button>
       
      </AccordionActions>
    </Accordion>

    ))}
      
      
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
       
       {/* Footer */}

        <footer sx={{ bgcolor: 'background.paper', p: 6}}>
      <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>Courses page...</Typography>
    </footer>
      
    </div>
  )
}

export default Course
