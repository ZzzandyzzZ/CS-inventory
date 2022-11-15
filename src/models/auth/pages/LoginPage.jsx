import {
  Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Card,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import  Google  from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Copyright } from '../../ui/Copyright';
import { login } from '../../../store/user/userSlice';
import { startGoogleSignIn } from '../../../store/user/thunks';

export function LoginPage() {


  const disptach = useDispatch();
  const { status } = useSelector((state) => state.user);
  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard', { replace: true });
  };

  const dispatch = useDispatch();
  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }


  return (
    <Container component="main" maxWidth="xs" sx={{pt:10}}>
      <Card>
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexWrap:'wrap',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicia sesión
          </Typography>
          <Box  sx={{ mt: 1 }}>
            <Button
              disabled={ isAuthenticating}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onGoogleSignIn}
            >
              <Google sx={{ mr: 2 }} />
              Iniciar sesión con Google
            </Button>

            <br />
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Card>
    </Container>
  );
}
