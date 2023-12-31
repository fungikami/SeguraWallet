import PropTypes from 'prop-types';
import React from 'react';
import Link from 'Link';

// material-ui
import { Box, Tab, Tabs } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import Profile from 'components/users/Profile';
import Billing from 'components/users/Billing';
import Security from 'components/users/Security';
import Notifications from 'components/users/Notifications';
import MainCard from 'components/ui-component/cards/MainCard';

// tabs
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// ==============================|| PROFILE 3 ||============================== //

const Profile3 = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page title="Configuración">
      <MainCard title="Configuración de la cuenta">
        <div>
          <Tabs
            value={value}
            indicatorColor="primary"
            onChange={handleChange}
            sx={{
              mb: 3,
              minHeight: 'auto',
              '& button': {
                minWidth: 100
              },
              '& a': {
                minHeight: 'auto',
                minWidth: 10,
                py: 1.5,
                px: 1,
                mr: 2.25,
                color: 'grey.600'
              },
              '& a.Mui-selected': {
                color: 'primary.main'
              }
            }}
            aria-label="simple tabs example"
            variant="scrollable"
          >
            <Tab component={Link} href="#" label="Perfil" {...a11yProps(0)} />
            <Tab component={Link} href="#" label="Cuentas bancarias" {...a11yProps(1)} />
            <Tab component={Link} href="#" label="Seguridad" {...a11yProps(2)} />
            <Tab component={Link} href="#" label="Notificaciones" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Profile />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Billing />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Security />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Notifications />
          </TabPanel>
        </div>
      </MainCard>
    </Page>
  );
};

Profile3.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Profile3;
