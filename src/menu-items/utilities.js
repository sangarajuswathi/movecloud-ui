// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const policies = {
  id: 'policies',
  title: 'Policies and Compliances',
  type: 'group',
  children: [
    {
      id: 'anamolydetection',
      title: 'Anamoly Detection',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'quotasandbudgets',
      title: 'Quotas and Budgets',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'tagging',
      title: 'Tagging',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'resourcelifecycle',
      title: 'Resource Lifecycle',
      type: 'item',
      icon: icons.IconWindmill,
      breadcrumbs: false
    },
    {
      id: 'powerschedules',
      title: 'Power Schedules',
      type: 'item',
      icon: icons.IconWindmill,
      breadcrumbs: false
    }
    
      ]
    };
  


export default policies;
