import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function Copyright({ sx }) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={sx}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Cs-inventory
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

Copyright.propTypes = {
  sx: PropTypes.shape({}).isRequired,
};
