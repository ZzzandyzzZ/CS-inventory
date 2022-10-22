import { ViewLayout } from '../layouts/ViewLayout'
import PeopleIcon from '@mui/icons-material/People';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

const AddClassroomForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="classroomName"
              name="classroomName"
              required
              fullWidth
              id="classroomName"
              label="Nombre de Aula"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="category"
              label="Categoria"
              name="category"
              autoComplete="category"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="classroomNumber"
              label="Número de aula"
              name="classroomNumber"
              autoComplete="classroomNumber"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Registrar
        </Button>
      </Box>
    </Box>
  );
}

const ListClassrooms = () => {
  return (
    <List >
      {[0, 1, 2, 3, 4, 5].map((val) =>
        <ListItem
          key={val}
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <MapsHomeWorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"Aula numero " + val}
            secondary={'Código ' + val}
          />
        </ListItem>,
      )}
    </List>
  )
}



export const ClassroomView = () => {
  return (
    <ViewLayout
      AddComponent={AddClassroomForm}
      ListComponent={ListClassrooms}
      title='Aulas' Icon={MapsHomeWorkIcon}
    />
  )
}

