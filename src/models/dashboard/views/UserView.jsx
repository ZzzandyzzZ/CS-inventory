import PeopleIcon from '@mui/icons-material/People';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField,
} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { ViewLayout } from '../layouts/ViewLayout';
import { useAddUserMutation, useDeleteUserMutation, useGetUsersQuery } from '../../../store/api/user';

function AddUserForm() {
  const [addUser, addRsp] = useAddUserMutation();

  useEffect(() => {
    if (addRsp.isSuccess) {
      alert('Registro correcto');
    }
  }, [addRsp]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addUser({
      id: '1',
      rol: 'admin',
      first_name: data.get('firstName'),
      last_name: data.get('lastName'),
      dni: data.get('dni'),
    });
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

function ListUsers() {
  const [deleteUser, deleteRsp] = useDeleteUserMutation();

  useEffect(() => {
    if (deleteRsp.isSuccess) {
      alert('Registro eliminado');
    }
  }, [deleteRsp]);
  const { data: users = [], isLoading } = useGetUsersQuery();

  return !isLoading && (
    <List>
      {users.map((user) => (
        <ListItem
          key={user.id}
          secondaryAction={(
            <IconButton edge="end" aria-label="delete" onClick={() => deleteUser(user.id)}>
              <DeleteIcon />
            </IconButton>
          )}
        >
          <ListItemAvatar>
            <Avatar>
              <PeopleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={user.first_name}
            secondary={`DNI: ${user.dni}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export function UserView() {
  return (
    <ViewLayout
      AddComponent={AddUserForm}
      ListComponent={ListUsers}
      title="Usuarios"
      Icon={PeopleIcon}
    />
  );
}
