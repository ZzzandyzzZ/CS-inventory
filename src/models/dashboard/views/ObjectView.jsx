import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField,
} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { ViewLayout } from '../layouts/ViewLayout';

function AddObjectForm() {
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
              autoComplete="objectName"
              name="objectName"
              required
              fullWidth
              id="objectName"
              label="Nombre de Objeto"
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

function ListObjects() {
  return (
    <List>
      {[0, 1, 2, 3, 4].map((val) => (
        <ListItem
          key={val}
          secondaryAction={(
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          )}
        >
          <ListItemAvatar>
            <Avatar>
              <ViewInArIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Objeto numero ${val}`}
            secondary={`Código ${val}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export function ObjectView() {
  return (
    <ViewLayout
      AddComponent={AddObjectForm}
      ListComponent={ListObjects}
      title="Usuarios"
      Icon={ViewInArIcon}
    />
  );
}
