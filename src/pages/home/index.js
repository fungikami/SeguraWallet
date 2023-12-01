import * as React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Box,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import EuroIcon from '@mui/icons-material/Euro';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// project imports
import LAYOUT from 'constant';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import RevenueCard from 'components/ui-component/cards/RevenueCard';
import { gridSpacing } from 'store/constant';
import { Stack } from '@mui/system';

// ==============================|| SAMPLE PAGE ||============================== //
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
// table data
function createData(date, concept, status, cost) {
  return { date, concept, status, cost };
}
const rows = [
  createData('12 Nov 2023', 'ZARA', 'Pendiente', '$ 1200'),
  createData('11 Nov 2023', 'Amazon', 'Aprobado', '$ 1500'),
  createData('10 Nov 2023', 'Matrícula de mi hijo', 'Rechazado', '$ 800'),
  createData('09 Nov 2023', 'Mercado Libre', 'Aprobado', '$ 1800')
];

const rows2 = [
  createData('12 Dic 2023', 'ZARA', 'Pendiente', '$ 1200'),
  createData('11 Dic 2023', 'Amazon', 'Aprobado', '$ 1500'),
  createData('10 Dic 2023', 'Matrícula de mi hijo', 'Rechazado', '$ 800'),
  createData('09 Dic 2023', 'Mercado Libre', 'Aprobado', '$ 1800')
];

const SamplePage = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Page title="Inicio">
      <MainCard title="Balances">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeabl
        >
          <Grid mx={2}>
            <RevenueCard
              primary="MERCANTIL"
              secondary="10.5 BS"
              content="Cuentas receptores >"
              iconPrimary={EuroIcon}
              color={theme.palette.primary.main}
              img="/assets/images/mercantil.png"
            />
          </Grid>
          <Grid mx={2}>
            <RevenueCard
              primary="BANESCO"
              secondary="0.5 BS"
              content="Cuentas receptores >"
              iconPrimary={MonetizationOnTwoToneIcon}
              color="#108c64"
              img="/assets/images/banesco.png"
            />
          </Grid>
          <Grid mx={2}>
            <RevenueCard
              primary="BANCAMIGA"
              secondary="100.5 BS"
              content="Cuentas receptores >"
              iconPrimary={EuroIcon}
              color="#0468a8"
              img="/assets/images/bancamiga.png"
            />
          </Grid>
        </Carousel>
      </MainCard>
      <Divider sx={{ my: 1 }} />
      <MainCard title="Transacciones">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Recientes" {...a11yProps(0)} />
                  <Tab label="Proximamente" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <TableContainer>
                  <Table>
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow hover key={index} sx={{ cursor: 'pointer', backgroundColor: index % 2 ? '#EDE7F6' : '' }}>
                          <TableCell>{row.date}</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>{row.concept}</TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell align="right" sx={{ pr: 3 }}>
                            {row.cost}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <TableContainer>
                  <Table>
                    <TableBody>
                      {rows2.map((row, index) => (
                        <TableRow hover key={index}>
                          <TableCell>{row.date}</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>{row.concept}</TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell align="right" sx={{ pr: 3 }}>
                            {row.cost}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CustomTabPanel>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <MainCard title="Recibe pagos en otras monedas">
                <Typography variant="body2">
                  Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Solicitar Nueva Moneda
                </Button>
              </MainCard>
              <MainCard title="Obtén las divisas que necesites">
                <Typography variant="body2">
                  Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Obtener Divisas
                </Button>
              </MainCard>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>
    </Page>
  );
};

SamplePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SamplePage;