import React, { PropTypes } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';

const menu = [
  {
    name: 'Menu 1',
    route: '/menu1',
  },
  {
    name: 'Menu 2',
    route: '/menu2',
  },
  {
    name: 'Menu 3',
    route: '/menu3',
  },
];

const DrawerComponent = props => (
  <Drawer open={props.open}>
    <AppBar
      title="Pokebooks"
      showMenuIconButton={false}
      onTitleTouchTap={props.toggleDrawer}
    />
    {
      menu.map(item => (
        <MenuItem>{item.name}</MenuItem>
      ))
    }
  </Drawer>
);

DrawerComponent.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default DrawerComponent;
