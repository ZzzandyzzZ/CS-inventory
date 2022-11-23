import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button, Grid, IconButton, InputLabel, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, TextField,
} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { useEffect, useState } from 'react';
import { ViewLayout } from '../layouts/ViewLayout';
import { useAddAssetMutation, useDeleteAssetMutation, useGetAssetsQuery } from '../../../store/api/asset/assetApi';

function AddObjectForm() {
  const [category, setCategory] = useState('Categoria');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const [addAsset, addRsp] = useAddAssetMutation();
  useEffect(() => {
    if (addRsp.isSuccess) {
      alert('Registro correcto');
      window.location.reload();
    }
  }, [addRsp]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addAsset({
      id: '1',
      code: '1111',
      denomination: data.get('objectName'),
      color: 'red',
      detail: '',
      brand: category,
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
            <Select
              labelId="asset-form"
              value={category}
              label="Categoria"
              onChange={handleChange}
            >
              <MenuItem value="Categoria">Categoria</MenuItem>
              <MenuItem value="Monitor">Monitor</MenuItem>
              <MenuItem value="Mesa">Mesa</MenuItem>
              <MenuItem value="Silla">Silla</MenuItem>
              <MenuItem value="Teclado">Teclado</MenuItem>
              <MenuItem value="Silla">Silla</MenuItem>
            </Select>
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
  const [deleteAsset, deleteRsp] = useDeleteAssetMutation();

  useEffect(() => {
    if (deleteRsp.isSuccess) {
      alert('Registro eliminado');
      window.location.reload();
    }
  }, [deleteRsp]);
  const { data: assets = [], isLoading } = useGetAssetsQuery();
  return !isLoading && (
    <List>
      {assets.map((asset) => (
        <ListItem
          key={asset.id}
          secondaryAction={(
            <IconButton edge="end" aria-label="delete" onClick={() => deleteAsset(asset.id)}>
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
            primary={`Objeto numero ${asset.code}`}
            secondary={asset.denomination}
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
      title="Objetos"
      Icon={ViewInArIcon}
    />
  );
}
