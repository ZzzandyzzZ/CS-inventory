import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DeleteIcon from '@mui/icons-material/Delete';
import { green } from '@mui/material/colors';
import {
  Avatar, Button, CircularProgress, Grid, IconButton,
  LinearProgress, ListItem, ListItemAvatar, ListItemText, Stack, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { removeRegister, setRegisters } from '../../../store/currentView';

function ListRegisters({ ListIcon, useDeleteMutation }) {
  const {
    primaryShowKey, secondaryShowKey, registers,
  } = useSelector((state) => state.currentView);
  const [deleteRegister, delResponse] = useDeleteMutation();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [registerId, setRegisterId] = useState(null);

  const handleDeleteRegister = (id) => {
    deleteRegister(id);
    setRegisterId(id);
  };

  useEffect(() => {
    if (delResponse.isSuccess) {
      enqueueSnackbar('Eliminado correctamente', { variant: 'success' });
      dispatch(removeRegister(registerId));
    }
    if (delResponse.isError) {
      enqueueSnackbar('Error al registrar usuario', { variant: 'error' });
    }
  }, [delResponse]);

  return (
    <Stack spacing={2}>
      {registers.map((data) => ((delResponse.isLoading && registerId === data.id)
        ? <LinearProgress key={data.id} />
        : (
          <ListItem
            key={data.id}
            secondaryAction={(
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteRegister(data.id)}>
                <DeleteIcon />
              </IconButton>
          )}
          >
            <ListItemAvatar>
              <Avatar>
                <ListIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={data[primaryShowKey]}
              secondary={data[secondaryShowKey]}
            />
          </ListItem>
        )))}
    </Stack>
  );
}

ListRegisters.propTypes = {
  useDeleteMutation: PropTypes.func.isRequired,
  ListIcon: PropTypes.shape({}).isRequired,
};

export function RegisterForm({ handleSubmit, children }) {
  const { isSavingRegister } = useSelector((state) => state.currentView);
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
          {/* Register form fields */}
          { children }
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isSavingRegister}
        >
          Registrar
          {isSavingRegister && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
          )}
        </Button>
      </Box>
    </Box>
  );
}

RegisterForm.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export function DashboardViewLayout({
  children, ListIcon, useDeleteMutation, useGetQuery, handleSubmit,
}) {
  const {
    title,
  } = useSelector((state) => state.currentView);
  const [value, setValue] = useState('add');
  const dispatch = useDispatch();
  const { data, isLoading } = useGetQuery();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (!data) return;
    dispatch(setRegisters(data));
  }, [isLoading]);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <ListIcon sx={{ fontSize: '80px', pr: '10px' }} />
        <Typography variant="h4">{ title }</Typography>
      </Grid>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} centered>
            <Tab label="Agregar" value="add" />
            <Tab label="Listar" value="list" />
          </TabList>
        </Box>
        <TabPanel value="add">
          <RegisterForm handleSubmit={handleSubmit}>
            {children}
          </RegisterForm>
        </TabPanel>
        <TabPanel value="list">
          <ListRegisters useDeleteMutation={useDeleteMutation} ListIcon={ListIcon} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

DashboardViewLayout.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  ListIcon: PropTypes.shape({}).isRequired,
  useDeleteMutation: PropTypes.func.isRequired,
  useGetQuery: PropTypes.func.isRequired,
};
