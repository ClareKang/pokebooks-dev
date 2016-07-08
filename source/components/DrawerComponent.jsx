import React, { PropTypes } from 'react';
import { AppBar, Drawer, MenuItem, IconButton } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const DrawerComponent = props => (
  <Drawer open={props.open}>
    <AppBar
      title="Pokebooks"
      showMenuIconButton={false}
      onTitleTouchTap={props.toggleDrawer}
    />
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
  </Drawer>
);

DrawerComponent.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default DrawerComponent;
