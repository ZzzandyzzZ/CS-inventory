import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

export const mainListItems = (
  <>
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
