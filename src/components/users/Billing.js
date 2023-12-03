// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

// project imports
import SubCard from 'components/ui-component/cards/SubCard';
import Chip from 'components/ui-component/extended/Chip';
import { gridSpacing } from 'store/constant';

// table data
function createData(tid, date, amount, badgeText, badgeType) {
  return { tid, date, amount, badgeText, badgeType };
}

const rows = [
  createData('12877227695', '26 Nov 2023 9:16 am', '$56.32', 'Pendiente', 'warning'),
  createData('12901477937', '30 Oct 2023 2:54 pm', '$75.56', 'Finalizado', 'success'),
  createData('12767886919', '22 Oct 2023 12:01 pm', '$34.23', 'Finalizado', 'success')
];

// ==============================|| PROFILE 3 - BILLING ||============================== //

const Billing = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={gridSpacing}>
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
