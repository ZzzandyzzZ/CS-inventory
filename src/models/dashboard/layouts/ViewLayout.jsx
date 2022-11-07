import { useState } from 'react';

import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Typography } from '@mui/material';

export function ViewLayout({
  AddComponent, ListComponent, title, Icon,
}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Icon sx={{ fontSize: '80px', pr: '10px' }} />
        <Typography variant="h4">{ title }</Typography>
      </Grid>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} centered>
            <Tab label="Agregar" value="1" />
            <Tab label="Listar" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AddComponent />
        </TabPanel>
        <TabPanel value="2">
          <ListComponent />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

ViewLayout.propTypes = {
  AddComponent: PropTypes.element.isRequired,
  ListComponent: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  Icon: PropTypes.element.isRequired,
};
