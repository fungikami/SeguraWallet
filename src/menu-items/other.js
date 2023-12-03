// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap, IconLogout, IconSettings } from '@tabler/icons';

// constant
const icons = {
  IconBrandChrome,
  IconHelp,
  IconSitemap,
  IconLogout,
  IconSettings
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  icon: IconBrandChrome,
  type: 'group',
  children: [
    {
      id: 'profile',
      title: 'Configuración',
      type: 'item',
      url: '/profile',
      icon: icons.IconSettings,
      breadcrumbs: true
    },
    {
      id: 'logout',
      title: 'Cerrar Sesión',
      type: 'item',
      url: '/login',
      icon: icons.IconLogout,
      breadcrumbs: false
    },
  ]
};

export default other;
