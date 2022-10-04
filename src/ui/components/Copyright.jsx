import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Cs-inventory
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}