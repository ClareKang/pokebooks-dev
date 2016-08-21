import React, { PropTypes } from 'react';
import { AppBar, FlatButton, IconButton } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const AppBarComponent = props => (
  <AppBar
    title={'Pokedex Development'}
    iconElementLeft={
      <IconButton onClick={props.toggleDrawer}>
        <NavigationMenu />
      </IconButton>
    }
    iconElementRight={
      <FlatButton label="Sign In" />
    }
  />
);

AppBarComponent.propTypes = {
  toggleDrawer: PropTypes.func,
};

export default AppBarComponent;
