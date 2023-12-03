import * as React from 'react';

// material-ui
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import 'react-multi-carousel/lib/styles.css';

// project imports
import { AddCard, ShoppingBag } from '@mui/icons-material';
import Page from 'components/ui-component/Page';
import IconNumberCard from 'components/ui-component/cards/IconNumberCard';
import MainCard from 'components/ui-component/cards/MainCard';
import RevenueCard from 'components/ui-component/cards/RevenueCard';
import Layout from 'layout';
import { gridSpacing } from 'store/constant';
import PopularCard from './PopularCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';

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
        <Grid item xs={4}>
          <RevenueCard
            primary="Total de ingresos"
            secondary="Bs. 3780.27"
            content="Ingresos en el mes >"
            // a green color
            color={theme.palette.info.light}
            iconPrimary={null}
            img="https://cdn-icons-png.flaticon.com/512/6963/6963703.png"
          />
        </Grid>
        <Grid item xs={4}>
          <RevenueCard
            primary="Total de gastos"
            secondary="Bs. 1501.12"
            content="Gastos en el mes >"
            color="#9c27b0"
            iconPrimary={null}
            img="https://cdn-icons-png.flaticon.com/512/8539/8539117.png"
          />
        </Grid>
        <Grid item xs={4}>
          <Grid container gap={1}>
            <Grid item xs={12}>
              <IconNumberCard title="Ingresos en el año >" primary="Bs. 7522.10" color={theme.palette.info.light} iconPrimary={AddCard} />
            </Grid>
            <Grid item xs={12}>
              <IconNumberCard title="Gastos en el año >" primary="Bs. 3001.01" color="#9c27b0" iconPrimary={ShoppingBag} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom section */}
      <Grid container spacing={gridSpacing} sx={{ mt: '2px' }}>
        {/* Left side */}
        <Grid item xs={8}>
          <MainCard title="Estadísticas financieras" content="Ver todos >">
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <TotalGrowthBarChart isLoading={false} />
              </Grid>
            </Grid>
          </MainCard>
        </Grid>

        {/* Right side */}
        <Grid item xs={4}>
          <MainCard title="Pronóstico" content="Ver recomendaciones >">
            <Grid container spacing={gridSpacing}>
              <PopularCard isLoading={false} />
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
};

SamplePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SamplePage;
