import React from 'react'
import { Box, Typography} from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {

  const [value, setValue] = React.useState(0);

    return (
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>

      </Box>
    //   <Box sx={{ width: 500 }}>
    //   <BottomNavigation
    //     showLabels
    //     value={value}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
    //   >
    //     <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
    //     <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    //     <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    //   </BottomNavigation>
    // </Box>
  );
  };

export default Footer
