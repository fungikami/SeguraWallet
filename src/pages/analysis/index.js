import * as React from 'react';

// material-ui
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import 'react-multi-carousel/lib/styles.css';

// project imports
import Page from 'components/ui-component/Page';
import RevenueCard from 'components/ui-component/cards/RevenueCard';
import Layout from 'layout';
import { gridSpacing } from 'store/constant';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Page title="Inicio">
      <Grid container spacing={gridSpacing}>
        {/* Left side */}
        <Grid item xs={8}>
          {/* Top section */}
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
              <RevenueCard
                primary="Total de ingresos"
                secondary="Bs. 6780.27"
                content="Total de ingresos en el mes"
                // a green color
                color={theme.palette.success.main}
                iconPrimary={null}
                img="https://cdn-icons-png.flaticon.com/512/2745/2745122.png"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <RevenueCard
                primary="Total de gastos"
                secondary="Bs. 4501.12"
                content="Total de gastos en el mes"
                color={theme.palette.error.main}
                iconPrimary={null}
                // dollar icon
                img="https://cdn-icons-png.flaticon.com/512/2745/2745122.png"
              />
            </Grid>
          </Grid>

          {/* Bottom section */}
          <Grid container spacing={gridSpacing}></Grid>
        </Grid>

        {/* Right side */}
        <Grid item xs={4}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={12}>
              <RevenueCard
                primary="Total de ingresos"
                secondary="Bs. 6780.27"
                content="Total de ingresos en el mes"
                // a green color
                color={theme.palette.success.main}
                iconPrimary={null}
                img="https://cdn-icons-png.flaticon.com/512/2745/2745122.png"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <RevenueCard
                primary="Total de gastos"
                secondary="Bs. 4501.12"
                content="Total de gastos en el mes"
                color={theme.palette.error.main}
                iconPrimary={null}
                // dollar icon
                img="https://cdn-icons-png.flaticon.com/512/2745/2745122.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

SamplePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SamplePage;
