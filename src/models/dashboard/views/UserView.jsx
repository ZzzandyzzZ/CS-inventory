import PeopleIcon from '@mui/icons-material/People';

import PropTypes from 'prop-types';

import { Grid, TextField } from '@mui/material';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useAddUserMutation, useDeleteUserMutation, useGetUsersQuery } from '../../../store/api/user';
import { DashboardViewLayout } from '../layouts/DashboardViewLayout';
import { useForm } from '../../../hooks';
import { addNewRegister, setCurrentView, startSavingRegister } from '../../../store/currentView';

const userInitialForm = {
  dni: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
};
export function UserRegisterFormFields({ resetForm = false }) {
  const {
    dni, firstName, lastName, phone, email, onInputChange, onResetForm,
  } = useForm(userInitialForm);

  useEffect(() => {
    if (resetForm)onResetForm();
  }, [resetForm]);

  return (
    <>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="dni"
          label="DNI"
          name="dni"
          autoComplete="dni"
          value={dni}
          onChange={onInputChange}
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
          value={firstName}
          onChange={onInputChange}
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
          onChange={onInputChange}
          value={lastName}
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
          value={phone}
          onChange={onInputChange}
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
          value={email}
          onChange={onInputChange}
          autoComplete="given-email"
        />
      </Grid>
    </>
  );
}
UserRegisterFormFields.propTypes = {
  resetForm: PropTypes.bool.isRequired,
};

export function UserView() {
  const [userRegister, setUserRegister] = useState({});
  const dispatch = useDispatch();
  const [addUser, addResponse] = useAddUserMutation();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const viewData = {
      primaryShowKey: 'first_name',
      secondaryShowKey: 'dni',
      title: 'Usuarios',
    };
    dispatch(setCurrentView(viewData));
  }, []);
  useEffect(() => {
    if (addResponse.isSuccess) {
      enqueueSnackbar('Usuario registrado correctamente', { variant: 'success' });
      dispatch(addNewRegister({ ...userRegister, id: addResponse.data.id }));
    }
    if (addResponse.isError) {
      enqueueSnackbar('Error al registrar usuario', { variant: 'error' });
    }
  }, [addResponse]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      rol: 'admin',
      first_name: data.get('firstName'),
      last_name: data.get('lastName'),
      dni: data.get('dni'),
    };
    setUserRegister(user);
    addUser(user);
    dispatch(startSavingRegister());
  };
  return (
    <DashboardViewLayout
      handleSubmit={handleSubmit}
      ListIcon={PeopleIcon}
      RegisterFormElements={UserRegisterFormFields}
      useDeleteMutation={useDeleteUserMutation}
      useGetQuery={useGetUsersQuery}
    >
      <UserRegisterFormFields resetForm={addResponse.isSuccess} />
    </DashboardViewLayout>
  );
}
