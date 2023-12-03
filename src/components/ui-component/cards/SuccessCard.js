import PropTypes from 'prop-types';

// material-ui
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

// ==============================|| CUSTOM SUB CARD ||============================== //

const SuccessCard = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          border: '1px solid',
          borderColor: theme.palette.grey[400],
          ':hover': {
            boxShadow: theme.palette.mode === 'dark' ? '0 2px 14px 0 rgb(33 150 243 / 10%)' : '0 2px 14px 0 rgb(32 40 45 / 8%)'
          },
          width: '50%',
          mt: 3
        }}
      >
        {/* top */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2.5,
            bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.primary.light,
            color: theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.primary.dark
          }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: '5rem' }} />
        </Box>
        <CardHeader
          sx={{ p: 2.5, textAlign: 'center' }}
          title={
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                Pago exitoso
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.primary.dark }}
              >
                Bs. 1270.00
              </Typography>
            </Box>
          }
        />

        {/* divider */}
        <Divider
          sx={{
            opacity: 1,
            borderColor: theme.palette.grey[400]
          }}
        />

        {/* content */}

        <CardContent sx={{ p: 2.5 }}>
          <Typography variant="subtitle1">Desde cuenta</Typography>
          <Typography variant="h4" sx={{ color: theme.palette.primary.dark, mb: 2 }}>
            0151-0001-0000-0000-0000
          </Typography>
          <Typography variant="subtitle1">Destinatario</Typography>
          <Typography variant="h4" sx={{ color: theme.palette.primary.dark, mb: 2 }}>
            Juan Perez
          </Typography>
          <Typography variant="subtitle1">Mensaje</Typography>
          <Typography variant="h4" sx={{ color: theme.palette.primary.dark, mb: 2 }}>
            Reparacion de vehiculo + repuestos
          </Typography>
          <Typography variant="subtitle1">Fecha</Typography>
          <Typography variant="h4" sx={{ color: theme.palette.primary.dark, mb: 2 }}>
            02/12/2023 05:10:23 PM
          </Typography>
          <Typography variant="subtitle1">Número de referencia</Typography>
          <Typography variant="h4" sx={{ color: theme.palette.primary.dark, mb: 2 }}>
            123456789
          </Typography>
        </CardContent>

        {/* buttons */}
        <Divider
          sx={{
            opacity: 1,
            borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 15 : theme.palette.grey[200]
          }}
        />

        {/* 2 botones: Salir, Imprimir */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2.5 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Salir
          </Button>
          <Button variant="contained" color="secondary">
            Imprimir
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

SuccessCard.propTypes = {
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  sx: PropTypes.object,
  contentSX: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

SuccessCard.defaultProps = {
  content: true
};

export default SuccessCard;
