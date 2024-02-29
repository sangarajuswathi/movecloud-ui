// assets
import { IconBrandChrome, IconHelp, IconSettings, IconVariable, IconRegistered } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp, IconSettings, IconVariable, IconRegistered };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const organization = {
  id: 'organization',
  title: 'Organization',
  type: 'group',
  children: [
    {
      id: 'projects',
      title: 'Projects',
      type: 'item',
      url: '/sample-page',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'blueprints',
      title: 'Blueprints',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: icons.IconHelp,
      external: true,
      target: true
    },
    {
      id: 'registry',
      title: 'Registry',
      type: 'item',
      url: '/sample-page',
      icon: icons.IconRegistered,
      breadcrumbs: false
    },
    {
      id: 'variables',
      title: 'Variables',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: icons.IconVariable,
      external: true,
      target: true
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: icons.IconSettings,
      external: true,
      target: true
    }


  ]
};

export default organization;
