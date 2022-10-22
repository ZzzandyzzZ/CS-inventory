import { ViewLayout } from '../layouts/ViewLayout'
import PeopleIcon from '@mui/icons-material/People';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const AddUserForm = () => {

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
              required
              fullWidth
              id="dni"
              label="DNI"
              name="dni"
              autoComplete="dni"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Nombre"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Apellido"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-phone"
              name="phone"
              required
              fullWidth
              id="phone"
              label="Teléfono"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="given-email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="password"
              label="Contraseña"
              name="password"
              autoComplete="password"
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

const ListUsers = () => {
  return (
    <List >
      {[0, 1, 2, 3].map((val) =>
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
              <PeopleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"Usuario numero " + val}
            secondary={'DNI ' + val}
          />
        </ListItem>,
      )}
    </List>
  )
}

export const UserView = () => {
  return (
    <ViewLayout
      AddComponent={AddUserForm}
      ListComponent={ListUsers}
      title='Usuarios' Icon={PeopleIcon}
    />
  )
}
