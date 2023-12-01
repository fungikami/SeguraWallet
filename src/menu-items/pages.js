// third-party
import { FormattedMessage } from 'react-intl';
import InsightsIcon from '@mui/icons-material/Insights';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SsidChartIcon from '@mui/icons-material/SsidChart';

// constant
const icons = {
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
      icon: icons.InsightsIcon,
      breadcrumbs: true
    },
    {
      id: 'analysis',
      title: 'Análisis',
      type: 'item',
      url: '/analysis',
      icon: icons.SsidChartIcon,
      breadcrumbs: true
    },
    {
      id: 'pay',
      title: 'Pagar',
      type: 'item',
      url: '/pay',
      icon: icons.CardMembershipIcon,
      breadcrumbs: true
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
