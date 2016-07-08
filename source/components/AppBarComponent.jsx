import React, { PropTypes } from 'react';
import { AppBar } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const AppBarComponent = props => (
  <AppBar
    title="Pokebooks Dev"
    iconElementLeft={
      <IconButton onClick={props.toggleDrawer}>
        <NavigationMenu />
      </IconButton>
    }
  />
);

AppBarComponent.propTypes = {
  toggleDrawer: PropTypes.func,
};

export default AppBarComponent;
