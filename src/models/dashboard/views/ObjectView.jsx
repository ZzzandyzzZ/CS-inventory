import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField,
} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { ViewLayout } from '../layouts/ViewLayout';
import { useAddAssetMutation, useGetAssetsQuery } from '../../../store/api/asset/assetApi';

function AddObjectForm() {
  const [addAsset, result] = useAddAssetMutation();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addAsset({
      id: '1',
      code: '1111',
      denomination: data.get('objectName'),
      color: 'red',
      detail: '',
      brand: data.get('category'),
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
  const { data: assets = [], isLoading } = useGetAssetsQuery();
  return (
    <List>
      {assets.map((asset) => (
        <ListItem
          key={asset.id}
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
      title="Usuarios"
      Icon={ViewInArIcon}
    />
  );
}
