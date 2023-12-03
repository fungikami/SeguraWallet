import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import {
  Box,
  CardContent,
  Divider,
  Grid,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EuroIcon from '@mui/icons-material/Euro';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// project imports
import Card from '@mui/material/Card';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import RevenueCard from 'components/ui-component/cards/RevenueCard';
import Layout from 'layout';
import { gridSpacing } from 'store/constant';

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
  createData('12 Nov 2023', 'ZARA', 'Pendiente', 'Bs. 1200'),
  createData('11 Nov 2023', 'Amazon', 'Aprobado', 'Bs. 1500'),
  createData('09 Nov 2023', 'Mercado Libre', 'Aprobado', 'Bs. 1800')
];

const rows2 = [
  createData('12 Dic 2023', 'ZARA', 'Pendiente', 'Bs. 1200'),
  createData('11 Dic 2023', 'Amazon', 'Aprobado', 'Bs. 1500'),
  createData('09 Dic 2023', 'Mercado Libre', 'Aprobado', 'Bs. 1800')
];

const SamplePage = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Page title="Cuentas">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={8}>
          <MainCard title="Mis cuentas">
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
                  items: 2,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 2,
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
                  primary="Mercantil"
                  secondary="10.5 BS"
                  content="Abrir detalle >"
                  iconPrimary={EuroIcon}
                  color={theme.palette.primary.main}
                  img="/assets/images/mercantil.png"
                />
              </Grid>

              <Grid mx={2}>
                <RevenueCard
                  primary="Bancamiga"
                  secondary="100.5 BS"
                  content="Abrir detalle >"
                  iconPrimary={EuroIcon}
                  color="#0468a8"
                  img="/assets/images/bancamiga.png"
                />
              </Grid>
            </Carousel>
          </MainCard>
          <Divider sx={{ my: 1 }} />

          <MainCard title="Transacciones de la cuenta">
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Ultimos 25 movimientos" {...a11yProps(0)} />
                  <Tab label="Saldos retenidos" {...a11yProps(1)} />
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
          </MainCard>
        </Grid>

        <Grid item xs={4}>
          <MainCard title="Detalles del banco">
            <Grid container spacing={gridSpacing}>
              {/* Vertical grid */}
              <Grid item xs={12}>
                <Card
                  sx={{
                    background: `linear-gradient(90deg, ${theme.palette.primary.main} 50%, #EDE7F6 100%)`,
                    color: '#fff',
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CardContent>
                    <AccountBalanceIcon sx={{ fontSize: 80 }} />
                    {/*  */}
                  </CardContent>
                </Card>
                <Box
                  sx={{
                    mt: -2,
                    mx: 'auto',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    width: 50,
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #fff'
                  }}
                >
                  <img src="/assets/images/mercantil.png" alt="logo" width={30} height={30} />
                </Box>
              </Grid>

              <Grid item xs={12}>
                {/* Hola */}

                <MainCard title="Mercantil" sx={{ height: '100%' }}>
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                        Nombre del titular
                      </Typography>
                      <Typography variant="h4" sx={{ color: 'text.primary' }}>
                        Jean Carlos
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: 'text.secondary', mt: 2 }}>
                        Tipo de cuenta
                      </Typography>
                      <Typography variant="h4" sx={{ color: 'text.primary' }}>
                        Personal | Corriente
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: 'text.secondary', mt: 2 }}>
                        Número de cuenta
                      </Typography>
                      <Typography variant="h4" sx={{ color: 'text.primary' }}>
                        0105-0000-00-0000000000
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                        Saldo disponible
                      </Typography>
                      <Typography variant="h3" sx={{ color: 'text.primary' }}>
                        10.5 BS
                      </Typography>
                    </Grid>
                  </Grid>
                </MainCard>
              </Grid>
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
