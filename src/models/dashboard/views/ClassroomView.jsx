import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, TextField,
} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { useEffect, useState } from 'react';
import { ViewLayout } from '../layouts/ViewLayout';
import { useAddLocationMutation, useDeleteLocationMutation, useGetlocationsQuery } from '../../../store/api/location/locationApi';
import { addNewRegister, setCurrentView, startSavingRegister, removeRegister} from '../../../store/currentView';

function AddClassroomForm() {
  const [locationType, setLocationType] = useState('Tipo de Ubicacion');

  const [addLocation, addRsp] = useAddLocationMutation();
  const [classRegister, setClassRegister] = useState({});
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (addRsp.isSuccess) {
      enqueueSnackbar('Objeto registrado correctamente', { variant: 'success' });
      dispatch(addNewRegister({ ...classRegister, id: addRsp.data.id }));
    }
    if (addRsp.isError) {
      enqueueSnackbar('Error al registrar objecto', { variant: 'error' });
    }
  }, [addRsp]);
  const handleChange = (event) => {
    setLocationType(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const classroom = {
      code: data.get('code'),
      location_type: locationType,
    };
    setClassRegister(classroom);
    addLocation(classroom);
    dispatch(startSavingRegister());
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
  const { enqueueSnackbar } = useSnackbar();
  const [registerId, setRegisterId] = useState(null);
  const dispatch = useDispatch();

  const handleDeleteRegister = (id) => {
    deleteLocation(id);
    setRegisterId(id);
  };
  useEffect(() => {
    if (deleteRsp.isSuccess) {
      enqueueSnackbar('Eliminado correctamente', { variant: 'success' });
      dispatch(removeRegister(registerId));
    }
    if (deleteRsp.isError) {
      enqueueSnackbar('Error al eliminar aula', { variant: 'error' });
    }
  }, [deleteRsp]);
  const { data: locations = [], isLoading } = useGetlocationsQuery();
  return !isLoading && (
    <List>
      {locations.map((location) => (
        <ListItem
          key={location.id}
          secondaryAction={(
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteRegister(location.id)}>
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
