import {
  Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { Copyright } from '../../ui/Copyright';

export function LoginPage() {
  const navigate = useNavigate();
  const clientId = '832440690389-q53p3c1ojvfh8tep6i20ko6476tgpslk.apps.googleusercontent.com';
  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({ clientId });
    });
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
    navigate('/dashboard', { replace: true });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard', { replace: true });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <GoogleLogin
            clientId={clientId}
            buttonText="Iniciar sesión con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
            className="google_login"
          />
          <br />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
