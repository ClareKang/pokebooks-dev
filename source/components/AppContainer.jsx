import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import AppBarComponent from './AppBarComponent';
import DrawerComponent from './DrawerComponent';

const contentStyle = {
  padding: '10px 20px',
};

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  toggleDrawer() {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <div>
        <div className="app-container">
          <AppBarComponent
            toggleDrawer={this.toggleDrawer}
          />
          <DrawerComponent
            open={this.state.open}
            toggleDrawer={this.toggleDrawer}
          />
          <div style={contentStyle}>
            <p>Material UI를 벗어날 수 없는걸까</p>
            <RaisedButton
              label="Primary"
              primary
            />
            <RaisedButton
              label="Secondary"
              secondary
            />
            <RaisedButton
              label="Primary"
              primary
              disabled
            />
            <RaisedButton
              label="Secondary"
              secondary
              disabled
            />
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: React.PropTypes.node,
};

const ConnectedAppContainer = connect(
  (state) => ({
    // isAuthenticated: state.login.get('isAuthenticated'),
  })
)(AppContainer);

export default ConnectedAppContainer;
