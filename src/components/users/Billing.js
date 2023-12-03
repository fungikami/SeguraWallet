import Link from 'Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  CardMedia,
  Divider,
  Grid,
  Link as MuiLink,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

// project imports
import BillCard from 'components/ui-component/cards/BillCard';
import SubCard from 'components/ui-component/cards/SubCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import Chip from 'components/ui-component/extended/Chip';
import { gridSpacing } from 'store/constant';

// assets
const bancamiga = '/assets/images/bancamiga.png';
const mercantil = '/assets/images/mercantil.png';
const banesco = '/assets/images/banesco.png';

// table data
function createData(tid, date, amount, badgeText, badgeType) {
  return { tid, date, amount, badgeText, badgeType };
}

const rows = [
  createData('12877227695', '26 Feb 2021 9:16 am', '$56.32', 'Awaiting', 'warning'),
  createData('12901477937', '30 Jan 2021 2:54 pm', '$75.56', 'Paid', 'success'),
  createData('12767886919', '22 Jan 2021 12:01 pm', '$34.23', 'Paid', 'success')
];

// ==============================|| PROFILE 3 - BILLING ||============================== //

const Billing = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <SubCard
          title="Cuentas bancarias"
          secondary={
            <AnimateButton>
              <Button variant="contained" size="small">
                Agregar cuenta
              </Button>
            </AnimateButton>
          }
        >
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                    <CardMedia component="img" image={banesco} title="payment" sx={{ width: 65 }} />
                    <Stack>
                      <Typography variant="subtitle1">Banesco</Typography>
                      <Typography variant="subtitle2">5269 07XX XXXX 8110</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item>
                  <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                    <Chip label="Default" size="small" />
                    <Typography variant="caption" sx={{ color: 'grey.300' }}>
                      |
                    </Typography>
                    <MuiLink component={Link} href="#" underline="hover">
                      Editar
                    </MuiLink>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                    <CardMedia component="img" image={bancamiga} title="payment" sx={{ width: 65 }} />
                    <Stack>
                      <Typography component="div" variant="subtitle1">
                        Bancamiga
                      </Typography>
                      <Typography variant="subtitle2">6109 07XX XXXX 8020</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item>
                  <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                    <MuiLink component={Link} href="#" color="secondary" underline="hover">
                      Cambiarlo a Default
                    </MuiLink>
                    <Typography variant="caption" sx={{ color: 'grey.300' }}>
                      |
                    </Typography>
                    <MuiLink component={Link} href="#" underline="hover">
                      Editar
                    </MuiLink>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                    <CardMedia component="img" image={mercantil} title="payment" sx={{ width: 65 }} />
                    <Stack>
                      <Typography component="div" variant="subtitle1">
                        Mercantil
                      </Typography>
                      <Typography variant="subtitle2">7278 07XX XXXX 4290</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item>
                  <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                    <MuiLink component={Link} href="#" color="secondary" underline="hover">
                      Cambiarlo a Default
                    </MuiLink>
                    <Typography variant="caption" sx={{ color: 'grey.300' }}>
                      |
                    </Typography>
                    <MuiLink component={Link} href="#" underline="hover">
                      Editar
                    </MuiLink>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      <Grid item xs={12}>
        <SubCard
          sx={{ overflowX: 'auto' }}
          title={
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid>Historial de transacciones</Grid>
              <DownloadIcon sx={{ ml: 0.75 }} />
            </Grid>
          }
          content={false}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: 3 }}>ID</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Costo</TableCell>
                  <TableCell sx={{ pr: 3 }}>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow hover key={index}>
                    <TableCell sx={{ pl: 3 }}>{row.tid}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell sx={{ pr: 3 }}>
                      <Chip chipcolor={row.badgeType} label={row.badgeText} size="small" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default Billing;
