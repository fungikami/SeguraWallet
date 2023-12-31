import PropTypes from 'prop-types';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from './MainCard';

// =============================|| ICON NUMBER CARD ||============================= //

const IconNumberCard = ({ title, primary, color, iconPrimary }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary /> : null;

  return (
    <MainCard sx={{ backgroundColor: color, color: '#fff' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="subtitle2" sx={{ color: '#fff' }}>
                {primaryIcon}
              </Typography>
              <Typography variant="h5" color="inherit">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" color="inherit">{primary}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

IconNumberCard.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.string,
  color: PropTypes.string,
  iconPrimary: PropTypes.object
};

export default IconNumberCard;
