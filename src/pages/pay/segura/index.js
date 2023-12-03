import React, { useState, forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { ScubaDiving } from '@mui/icons-material';
import SuccessCard from 'components/ui-component/cards/SuccessCard';

const steps = ['Formulario', 'Verificación', 'Resultado'];

// ==============================|| SAMPLE PAGE ||============================== //
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const SamplePage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Page title="Pagar">
      <MainCard title="Pagar a otra cuenta de SeguraWallet">
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = <Typography variant="caption">Optional</Typography>;
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <SuccessCard />
          ) : (
            <>
              <Grid container spacing={gridSpacing} my={4}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Cuentas a debitar" select>
                    <option value="1">Mercantil</option>
                  </TextField>
                </Grid>
                <Grid container item xs={6}>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: '5px 0px 0px 5px',
                      border: '1px solid',
                      borderColor: theme.palette.primary.main,
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Typography variant="h6" sx={{ mt: 2, color: '#fff' }}>
                      Desde Contactos
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      backgroundColor: theme.palette.grey[100],
                      borderRadius: '0px 5px 5px 0px',
                      border: '1px solid gray',
                      borderColor: theme.palette.grey[200],
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography variant="h6" sx={{ mt: 2, color: 'gray' }}>
                      Sin Registrar
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Beneficiario" select SelectProps={{ native: true }}>
                    <option value="1">Waleria</option>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Monto"
                    type="number"
                    startAdornment={
                      <Typography variant="h6" sx={{ mt: 2, color: 'gray' }}>
                        Bs.
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Concepto" multiline rows={4} />
                </Grid>

                <Grid item xs={12}>
                  <Alert severity="info">Monto máximo: 100.000 Bs.</Alert>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                  Atrás
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Saltar
                  </Button>
                )}

                <Button
                  onClick={handleNext}
                  sx={{
                    color: '#fff',
                    background: theme.palette.primary.main,
                    border: '1px solid'
                  }}
                >
                  {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </MainCard>
    </Page>
  );
};

SamplePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SamplePage;
