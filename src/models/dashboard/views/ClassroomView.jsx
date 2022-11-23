import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, TextField,
} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { useEffect, useState } from 'react';
import { ViewLayout } from '../layouts/ViewLayout';
import { useAddLocationMutation, useDeleteLocationMutation, useGetlocationsQuery } from '../../../store/api/location/locationApi';

function AddClassroomForm() {
  const [locationType, setLocationType] = useState('Tipo de Ubicacion');

  const [addLocation, addRsp] = useAddLocationMutation();

  useEffect(() => {
    if (addRsp.isSuccess) {
      alert('Registro correcto');
      window.location.reload();
    }
  }, [addRsp]);
  const handleChange = (event) => {
    setLocationType(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addLocation({
      id: '1',
      code: data.get('code'),
      location_type: locationType,
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
            <Select
              labelId="asset-form"
              value={locationType}
              label="Tipo de Ubicación"
              onChange={handleChange}
            >
              <MenuItem value="Tipo de Ubicacion">Tipo de Ubicación</MenuItem>
              <MenuItem value="Aula">Aula</MenuItem>
              <MenuItem value="Laboratorio">Laboratorio</MenuItem>
              <MenuItem value="Auditorio">Auditorio</MenuItem>

            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="code"
              label="Código de aula"
              name="code"
              autoComplete="code"
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

function ListClassrooms() {
  const [deleteLocation, deleteRsp] = useDeleteLocationMutation();

  useEffect(() => {
    if (deleteRsp.isSuccess) {
      alert('Registro eliminado');
      window.location.reload();
    }
  }, [deleteRsp]);
  const { data: locations = [], isLoading } = useGetlocationsQuery();
  return !isLoading && (
    <List>
      {locations.map((location) => (
        <ListItem
          key={location.id}
          secondaryAction={(
            <IconButton edge="end" aria-label="delete" onClick={() => deleteLocation(location.id)}>
              <DeleteIcon />
            </IconButton>
          )}
        >
          <ListItemAvatar>
            <Avatar>
              <MapsHomeWorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Aula numero ${location.code}`}
            secondary={`Tipo ${location.location_type}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export function ClassroomView() {
  return (
    <ViewLayout
      AddComponent={AddClassroomForm}
      ListComponent={ListClassrooms}
      title="Aulas"
      Icon={MapsHomeWorkIcon}
    />
  );
}
