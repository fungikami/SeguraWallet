import React, { useState, forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Dialog, DialogContent, Button, Card, CardContent, Grid, Typography, Slide, TextField } from '@mui/material';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| SAMPLE PAGE ||============================== //
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const SamplePage = () => {
  const theme = useTheme();

  const cardStyle = {
    cursor: 'pointer',
    spacing: 1,
    height: '200px',
    color: '#fff',
    background: `linear-gradient(90deg, #7652bf 30%, #9774d4 100%)`,
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100],
    '&:hover': {
      background: `linear-gradient(90deg, #977bc9 30%, #b39ddb 100%)`,
      borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200]
    }
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  let composePosition = {};
  const [position, setPosition] = useState(true);
  if (!position) {
    composePosition = {
      '& .MuiDialog-container': {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        '& .MuiPaper-root': { mb: 0, borderRadius: '12px 12px 0px 0px', maxWidth: 595 }
      }
    };
  }

  return (
    <Page title="Pagar">
      <MainCard title="Pagar">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} lg={3}>
            <Card
              sx={cardStyle}
              onClick={
                // redir to /segura
                () => (window.location.href = '/pay/segura')
              }
            >
              <CardContent>
                <Grid container spacing={1} justifyContent="center" alignItems="center" display="row" flexDirection="column">
                  <PriceCheckIcon sx={{ fontSize: '7rem' }} />
                  <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h3" sx={{ color: '#fff', textAlign: 'center' }}>
                      Pagar a otra cuenta de SeguraWallet
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card sx={cardStyle}>
              <CardContent>
                <Grid container spacing={1} justifyContent="center" alignItems="center" display="row" flexDirection="column">
                  <SecurityUpdateGoodIcon sx={{ fontSize: '7rem' }} />{' '}
                  <Grid item>
                    <Typography variant="h3" sx={{ color: '#fff' }}>
                      Pago Móvil
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card sx={cardStyle}>
              <CardContent>
                <Grid container spacing={1} justifyContent="center" alignItems="center" display="row" flexDirection="column">
                  <AddBusinessIcon sx={{ fontSize: '7rem' }} />{' '}
                  <Grid item>
                    <Typography variant="h3" sx={{ color: '#fff' }}>
                      Pagar servicios
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card sx={cardStyle}>
              <CardContent>
                <Grid container spacing={1} justifyContent="center" alignItems="center" display="row" flexDirection="column">
                  <AddToHomeScreenIcon sx={{ fontSize: '7rem' }} />{' '}
                  <Grid item>
                    <Typography variant="h3" sx={{ color: '#fff' }}>
                      Recargar saldo
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card sx={cardStyle}>
              <CardContent>
                <Grid container spacing={1} justifyContent="center" alignItems="center" display="row" flexDirection="column">
                  <ReceiptLongIcon sx={{ fontSize: '7rem' }} />{' '}
                  <Grid item>
                    <Typography variant="h3" sx={{ color: '#fff' }}>
                      Impuestos/Tributos
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card sx={cardStyle}>
              <CardContent>
                <Grid container spacing={1} justifyContent="center" alignItems="center" display="row" flexDirection="column">
                  <MoreHorizIcon sx={{ fontSize: '7rem' }} />{' '}
                  <Grid item>
                    <Typography variant="h3" sx={{ color: '#fff' }}>
                      Otros
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleCloseDialog} sx={composePosition}>
          <DialogContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignItems="center" spacing={0}>
                  <Grid item sm zeroMinWidth>
                    <Typography component="div" align="left" variant="h4">
                      Pagar
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="To" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Subject" />
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item sx={{ flexGrow: 1 }} />
                  <Grid item>
                    <Button variant="contained">Pagar</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </MainCard>
    </Page>
  );
};

SamplePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SamplePage;
