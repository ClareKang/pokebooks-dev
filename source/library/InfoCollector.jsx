import React, { PropTypes } from 'react';
import Chip from 'material-ui/Chip';

const typeColor = {
  GRASS: {
    backgroundColor: 'green',
    color: 'white',
  },
  POISON: {
    backgroundColor: 'purple',
    color: 'white',
  },
};
const typeChipStyle = {
  display: 'inline-block',
  margin: '0 3px',
};

export const PokemonTypeChip = props => (
  <Chip
    labelColor={typeColor[props.type].color}
    backgroundColor={typeColor[props.type].backgroundColor}
    style={typeChipStyle}
  >
    {props.type}
  </Chip>
);

PokemonTypeChip.propTypes = {
  type: PropTypes.string,
};
