// third-party
import { FormattedMessage } from 'react-intl';
import InsightsIcon from '@mui/icons-material/Insights';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import HomeIcon from '@mui/icons-material/Home';
import { IconSailboatOff } from '@tabler/icons';

// constant
const icons = {
  HomeIcon,
  InsightsIcon,
  SsidChartIcon,
  CardMembershipIcon,
  AccountBalanceIcon
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: <FormattedMessage id="pages" />,
  caption: <FormattedMessage id="pages-caption" />,
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Inicio',
      type: 'item',
      url: '/home',
      icon: icons.HomeIcon,
      breadcrumbs: true
    },
    {
      id: 'analysis',
      title: 'Análisis',
      type: 'item',
      url: '/analysis',
      icon: icons.InsightsIcon,
      breadcrumbs: true
    },
    {
      id: 'pay',
      title: 'Pagar',
      type: 'collapse',
      url: '/pay',
      icon: icons.CardMembershipIcon,
      breadcrumbs: true,
      children: [
        {
          id: 'segura',
          title: 'Pagar a otro Segura',
          type: 'item',
          url: '/pay/segura',
          icon: icons.CardMembershipIcon,
          breadcrumbs: true
        }
      ]
    },
    {
      id: 'accounts',
      title: 'Cuentas Bancarias',
      type: 'item',
      url: '/accounts',
      icon: icons.AccountBalanceIcon,
      breadcrumbs: true
    }
  ]
};

export default pages;
