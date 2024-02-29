// assets
//import { IconKey } from '@tabler/icons-react';

// constant
//const icons = {
// IconKey
//};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const myprojects = {
  id: 'myprojects',
  title: 'My Projects',
  type: 'group',
  children: [
    {
      id: 'projectenvironments',
      title: 'Project Environments',
      type: 'item',
    },
        {
          id: 'subprojects',
          title: 'Sub Projects',
          type: 'item',
        },
        {
          id: 'projectblueprints',
          title: 'Project Blueprints',
          type: 'item',
        },
        {
            id: 'projectvariables',
            title: 'Projects Variables',
            type: 'item',   
          },
          {
            id: 'projectcosts',
            title: 'Project Costs',
            type: 'item',
           
          }
  ]
  
};
export default myprojects;
