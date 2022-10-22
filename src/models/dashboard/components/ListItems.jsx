import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { classroomPathName, dashboardRootName, objectsPathName, usersPathName } from '../../../constants/constants';

export const MainListItems = ({ open }) => {
  const navigate = useNavigate();
  return (
    <>
    <Grid container
      justifyContent='center'
      direction='column'
      alignItems='center'
      sx={{py: 2}}
    >
      <Avatar sx={{ width: 60, height: 60 }}>AÑ</Avatar>
      <Typography variant='subtitle1' pt={2} display={ open?'':'none' }>Andy Ñaca</Typography>
      <Typography variant='subtitle2' display={ open?'':'none' }>Admin</Typography>

    </Grid>
    <Divider />
    <ListItemButton onClick={() => navigate(dashboardRootName)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText display={ open?'':'none' } primary="Home" />
    </ListItemButton>
    <ListItemButton onClick={() => navigate(`${dashboardRootName}/${usersPathName}`)}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText display={ open?'':'none' } primary="Usuarios" />
    </ListItemButton>
    <ListItemButton onClick={() => navigate(`${dashboardRootName}/${objectsPathName}`)}>
      <ListItemIcon>
        <ViewInArIcon />
      </ListItemIcon>
      <ListItemText display={ open?'':'none' } primary="Objetos" />
    </ListItemButton>
    <ListItemButton onClick={() => navigate(`${dashboardRootName}/${classroomPathName}`)}>
      <ListItemIcon>
        <MapsHomeWorkIcon />
      </ListItemIcon>
      <ListItemText display={ open?'':'none' } primary="Aulas" />
    </ListItemButton>
  </>
  );
}
