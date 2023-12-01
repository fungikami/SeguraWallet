import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography, useMediaQuery } from '@mui/material';

// =============================|| REVENUE CARD ||============================= //

const RevenueCard = ({ primary, secondary, content, iconPrimary, color, img }) => {
  const theme = useTheme();
  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

  return (
    <Card
      sx={{
        background:
          // Degradado del color a la izquierda
          `linear-gradient(90deg, ${color} 30%, #EDE7F6 100%)`,
        position: 'relative',
        color: '#fff',
        height: '200px'
      }}
    >
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            position: 'absolute',
            right: 13,
            top: 14,
            color: '#fff',
            '&> svg': { width: 100, height: 100, opacity: '0.5' },
            [theme.breakpoints.down('sm')]: {
              top: 13,
              '&> svg': { width: 80, height: 80 }
            }
          }}
        >
          {/* {primaryIcon} */}
          <img
            src={img}
            alt="logo"
            width={100}
            height={100}
            // lower saturation and opacity and blend with background
            style={{ filter: 'saturate(1)', opacity: '0.4', mixBlendMode: 'multiply' }}
          />
        </Typography>
        <Grid container direction={matchDownXs ? 'column' : 'row'} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h3" color="inherit">
              {primary}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" color="inherit">
              {secondary}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 5, cursor: 'pointer' }}>
            <Typography variant="h4" color="inherit">
              {content}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

RevenueCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  content: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string,
  img: PropTypes.string
};

export default RevenueCard;
