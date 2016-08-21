import React, { PropTypes, Component } from 'react';
import { Table, TableRow, TableHeaderColumn, TableRowColumn } from 'library/TableCollector';

const PokemonDetailDamageRate = props => {
  return (
    <div>
      <Table>
        <TableRow>
          <TableHeaderColumn label="NORMAL" />
          <TableHeaderColumn label="FIGHT" />
          <TableHeaderColumn label="FLYING" />
          <TableHeaderColumn label="POISON" />
          <TableHeaderColumn label="GROUND" />
          <TableHeaderColumn label="ROCK" />
          <TableHeaderColumn label="BUG" />
          <TableHeaderColumn label="GHOST" />
          <TableHeaderColumn label="STEEL" />
        </TableRow>
        <TableRow>
          <TableRowColumn label={'x1'} />
          <TableRowColumn label={'x0.5'} />
          <TableRowColumn label={'x2'} />
          <TableRowColumn label={'x1'} />
          <TableRowColumn label={'x1'} />
          <TableRowColumn label={'x1'} />
          <TableRowColumn label={'x1'} />
          <TableRowColumn label={'x1'} />
          <TableRowColumn label={'x1'} />
        </TableRow>
        <TableRow>
          <TableHeaderColumn label="FIRE" />
          <TableHeaderColumn label="WATER" />
          <TableHeaderColumn label="GRASS" />
          <TableHeaderColumn label="ELECTRIC" />
          <TableHeaderColumn label="PSYCHIC" />
          <TableHeaderColumn label="ICE" />
          <TableHeaderColumn label="DRAGON" />
          <TableHeaderColumn label="DARK" />
          <TableHeaderColumn label="FAIRY" />
        </TableRow>
        <TableRow>
          <TableRowColumn label={'x2'} />
          <TableRowColumn label={'x0.5'} />
          <TableRowColumn label={'x0.25'} />
          <TableRowColumn label={'x0.5'} />
          <TableRowColumn label={'x2'} />
          <TableRowColumn label={'x0.5'} />
          <TableRowColumn label={'x1'} />
          <TableRowColumn label={'x1'} />
          <TableRowColumn label={'x0.5'} />
        </TableRow>
      </Table>
    </div>
  );
};

PokemonDetailDamageRate.propTypes = {
  // pokemonInfo: PropTypes.object,
};

export default PokemonDetailDamageRate;
