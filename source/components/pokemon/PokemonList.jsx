import React, { PropTypes, Component } from 'react';
// import { connect } from 'react-redux';

class PokemonList extends Component {
  render() {
    return (
      <div>
        <h2>PokemonList</h2>

      </div>
    );
  }
}

PokemonList.propTypes = {
  // children: React.PropTypes.node,
};

// const ConnectedAppContainer = connect(
//   (state) => ({
//     // isAuthenticated: state.login.get('isAuthenticated'),
//   })
// )(AppContainer);

export default PokemonList;
