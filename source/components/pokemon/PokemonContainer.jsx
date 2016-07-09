import React, { PropTypes } from 'react';


const PokemonContainer = props => (
  <div>
    {props.children}
  </div>
);

PokemonContainer.propTypes = {
  children: PropTypes.node,
};

export default PokemonContainer;
