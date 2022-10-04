import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { Avatar, Divider, Grid, Typography } from '@mui/material';

export const mainListItems = (
  <>
    <Grid container
      justifyContent='center'
      direction='column'
      alignItems='center'
      sx={{py: 2}}
    >
      <Avatar sx={{ width: 60, height: 60 }}>AÑ</Avatar>
      <Typography variant='subtitle1' pt={2}>Andy Ñaca</Typography>
      <Typography variant='subtitle2'>Admin</Typography>
    </Grid>
    <Divider />
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ViewInArIcon />
      </ListItemIcon>
      <ListItemText primary="Objetos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MapsHomeWorkIcon />
      </ListItemIcon>
      <ListItemText primary="Aulas" />
    </ListItemButton>
  </>
);
