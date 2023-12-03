// material-ui
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src="/assets/images/logo.png" alt="Berry" height="40" />
      <Typography
        variant="h1"
        sx={{
          ml: 1,
          display: { xs: 'none', md: 'block' },
          color: theme.palette.primary.main,
          fontSize: '2rem',
        }}
      >
        Segura
      </Typography>
    </Box>
  );
};

export default Logo;
