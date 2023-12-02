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
import AttachmentCard from 'components/ui-component/cards/AttachmentCard';
import BillCard from 'components/ui-component/cards/BillCard';
import IconNumberCard from 'components/ui-component/cards/IconNumberCard';
import { AddCard, Check, ShoppingBag } from '@mui/icons-material';

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
            img="https://cdn-icons-png.flaticon.com/512/2745/2745122.png"
          />
        </Grid>
        <Grid item xs={4}>
          <RevenueCard
            primary="Total de gastos"
            secondary="Bs. 1501.12"
            content="Gastos en el mes >"
            color="#9c27b0"
            iconPrimary={null}
            // dollar icon
            img="https://cdn-icons-png.flaticon.com/512/2745/2745122.png"
          />
        </Grid>
        <Grid item xs={4}>
          <Grid container gap={1}>
            <Grid item xs={12}>
              <IconNumberCard title="Ingresos en el año >" primary="Bs. 3001.01" color={theme.palette.info.light} iconPrimary={AddCard} />
            </Grid>
            <Grid item xs={12}>
              <IconNumberCard title="Gastos en el año >" primary="Bs. 7522.10" color="#9c27b0" iconPrimary={ShoppingBag} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom section */}
      <Grid container spacing={gridSpacing}></Grid>
    </Page>
  );
};

SamplePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SamplePage;
