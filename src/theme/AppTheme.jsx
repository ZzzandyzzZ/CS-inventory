import PropTypes from 'prop-types';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { blueTheme } from './blueTheme';

export function AppTheme({ children }) {
  return (
    <ThemeProvider theme={blueTheme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
};
