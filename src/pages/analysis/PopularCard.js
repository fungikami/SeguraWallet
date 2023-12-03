import PropTypes from 'prop-types';

// material-ui
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';

// project imports
import MainCard from '../../components/ui-component/cards/MainCard';
import SkeletonPopularCard from '../../components/ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from '../../store/constant';
import BajajAreaChartCard from './BajajAreaChartCard';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

// style constant
const style = (theme) => ({
  cardAction: {
    padding: '10px',
    paddingTop: 0,
    justifyContent: 'center'
  },
  primaryLight: {
    color: theme.palette.primary[200],
    cursor: 'pointer'
  },
  divider: {
    marginTop: '12px',
    marginBottom: '12px'
  },
  avatarSuccess: {
    width: '16px',
    height: '16px',
    borderRadius: '5px',
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.dark,
    marginLeft: '15px'
  },
  successDark: {
    color: theme.palette.success.dark
  },
  avatarError: {
    width: '16px',
    height: '16px',
    borderRadius: '5px',
    backgroundColor: theme.palette.orange.light,
    color: theme.palette.orange.dark,
    marginLeft: '15px'
  },
  errorDark: {
    color: theme.palette.orange.dark
  }
});

const PopularCard = ({ isLoading }) => (
  <>
    {isLoading ? (
      <SkeletonPopularCard />
    ) : (
      <MainCard content={false}>
        <CardContent>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <BajajAreaChartCard />
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="column">
                <Grid item>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle1" color="inherit">
                        Balance neto futuro
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            Bs. 1839.00
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Avatar variant="rounded" sx={style}>
                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                          </Avatar>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={style}>
                    10% crecimiento
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={style} />
              <Grid container direction="column">
                <Grid item>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle1" color="inherit">
                        Enero
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            Bs. 100.00
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Avatar variant="rounded" sx={style}>
                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                          </Avatar>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={style}>
                    10% Dec
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={style} />
              <Grid container direction="column">
                <Grid item>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle1" color="inherit">
                        Febrero
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            Bs. 200.00
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Avatar variant="rounded" sx={style}>
                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                          </Avatar>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={style}>
                    10% crecimiento
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={style} />
              <Grid container direction="column">
                <Grid item>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle1" color="inherit">
                        Marzo
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            Bs. 189.00
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Avatar variant="rounded" sx={style}>
                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                          </Avatar>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={style}>
                    10% decrecimiento
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={style} />
              <Grid container direction="column">
                <Grid item>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle1" color="inherit">
                        Abril
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            Bs. 281.00
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Avatar variant="rounded" sx={style}>
                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                          </Avatar>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={style}>
                    10% decrecimiento
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={style}>
          <Button size="small" disableElevation>
            Ver recomendaciones
            <ChevronRightOutlinedIcon />
          </Button>
        </CardActions>
      </MainCard>
    )}
  </>
);

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;
