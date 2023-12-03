import React from 'react';

// material-ui
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Stack, Typography } from '@mui/material';

// project imports
import SubCard from 'components/ui-component/cards/SubCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// ==============================|| PROFILE 3 - NOTIFICATIONS ||============================== //

const Notifications = () => {
  const [state1, setState1] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: false,
    checkedE: true,
    checkedF: false
  });
  const handleChangeState1 = (event) => {
    setState1({ ...state1, [event.target.name]: event.target.checked });
  };
  const [state3, setState3] = React.useState({
    checkedA: true,
    checkedB: false
  });
  const handleChangeState3 = (event) => {
    setState3({ ...state3, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6} md={8}>
        <Grid container spacing={gridSpacing}>
          <Grid item>
            <SubCard title="Configuración de notificaciones">
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" align="left">
                    Me gusta recibir notificaciones de:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormGroup>
                    <Grid container spacing={0}>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox checked={state1.checkedA} onChange={handleChangeState1} name="checkedA" color="primary" />}
                          label="Nuevos Mensajes"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox checked={state1.checkedB} onChange={handleChangeState1} name="checkedB" color="primary" />}
                          label="Transferencias recibidas"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox checked={state1.checkedC} onChange={handleChangeState1} name="checkedC" color="primary" />}
                          label="Cambios de configuración en la cuenta"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox checked={state1.checkedC} onChange={handleChangeState1} name="checkedC" color="primary" />}
                          label="Alertas de seguridad"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox checked={state1.checkedD} onChange={handleChangeState1} name="checkedD" color="primary" />}
                          label="Anuncios de productos y actualizaciones"
                        />
                      </Grid>
                    </Grid>
                  </FormGroup>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6} md={4}>
        <SubCard title="Optar por no recibir notificaciones">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormGroup>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox onChange={handleChangeState3} name="checkedA" color="primary" />}
                      label="Desactivar todas las notificaciones"
                    />
                  </Grid>
                </Grid>
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row">
                <AnimateButton>
                  <Button variant="contained" size="small">
                    Actualizar
                  </Button>
                </AnimateButton>
              </Stack>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default Notifications;
