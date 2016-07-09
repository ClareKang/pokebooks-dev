import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

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
            docked={false}
            onRequestChange={this.toggleDrawer}
          />
          <div style={contentStyle}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node,
};

const ConnectedAppContainer = connect(
  (state) => ({
    // isAuthenticated: state.login.get('isAuthenticated'),
  })
)(AppContainer);

export default ConnectedAppContainer;
