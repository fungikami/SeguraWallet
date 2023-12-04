// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// project imports
import SubCard from 'components/ui-component/cards/SubCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// ==============================|| PROFILE 3 - SECURITY ||============================== //

const Security = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item sm={6} md={8}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <SubCard title="Cambiar contraseña">
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <TextField id="outlined-basic9" type="password" fullWidth label="Contraseña actual" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic10" type="password" fullWidth label="Nueva contraseña" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic11" type="password" fullWidth label="Confirmar contraseña" />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row">
                    <AnimateButton>
                      <Button variant="contained">Cambiar contraseña</Button>
                    </AnimateButton>
                  </Stack>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6} md={4}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <SubCard title="Eliminar cuenta">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    Para desactivar su cuenta, primero elimine sus recursos. Si eres el único propietario de algún equipo, asigna otro
                    propietario o desactivar el equipo.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row">
                    <AnimateButton>
                      <Button
                        sx={{
                          color: theme.palette.error.main,
                          borderColor: theme.palette.error.main,
                          '&:hover': {
                            background: theme.palette.error.light + 25,
                            borderColor: theme.palette.error.main
                          }
                        }}
                        variant="outlined"
                        size="small"
                      >
                        Desactivar cuenta
                      </Button>
                    </AnimateButton>
                  </Stack>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6} md={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <SubCard title="Verificación en dos pasos (2FA)">
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <TextField id="outlined-basic9" type="password" fullWidth label="Número de teléfono" />
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">¿Cómo quieres obtener los códigos?</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                      <FormControlLabel value="sms" control={<Radio />} label="Mensaje de texto" />
                      <FormControlLabel value="call" control={<Radio />} label="Llamada telefónica" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row">
                    <AnimateButton>
                      <Button variant="contained">Activar 2FA</Button>
                    </AnimateButton>
                  </Stack>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Security;
