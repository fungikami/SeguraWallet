import React from 'react';

// material-ui
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import chartData from './chart-data/bajaj-area-chart';

// style constant
const style = (theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.light
  },
  content: {
    padding: '0px !important'
  },
  contentContainer: {
    padding: '16px',
    paddingBottom: 0,
    color: '#fff'
  },
  fontStyle: {
    fontWeight: 400
  }
});

const BajajAreaChartCard = () => {
  const theme = useTheme();

  const orangeDark = theme.palette.secondary[800];

  React.useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: {
        theme: 'light'
      }
    };
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
  }, [orangeDark]);

  return (
    <Card sx={style}>
      <CardContent sx={style}>
        <Grid container sx={style}>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }}>
                  Tendencia (meses)
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                  Bs. 1839.20
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" sx={{ color: theme.palette.grey[800] }}>
              10% crecimiento
            </Typography>
          </Grid>
        </Grid>
        <Chart {...chartData} />
      </CardContent>
    </Card>
  );
};

export default BajajAreaChartCard;
