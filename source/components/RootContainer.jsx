import React from 'react';
import { connect } from 'react-redux';
import { AppBar, RaisedButton } from 'material-ui';

const RootContainer = (props) => (
  <div>
    <div className="root-container">
      <AppBar title="Pokebooks" />
      <div>
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
      {props.children}
    </div>
  </div>
);

RootContainer.propTypes = {
  children: React.PropTypes.node,
};

const ConnectedRootContainer = connect(
  (state) => ({
    // isAuthenticated: state.login.get('isAuthenticated'),
  })
)(RootContainer);

export default ConnectedRootContainer;
