import React, { PropTypes, Component } from 'react';
import { Table, TableRow, TableHeaderColumn, TableRowColumn } from 'library/TableCollector';

const PokemonDetailLocation = props => {
  return (
    <div>
      <Table>
        <TableRow>
          <TableHeaderColumn label="X / Y" />
          <TableRowColumn label="미르시티의 플라타느박사에게서 받는다." />
        </TableRow>
        <TableRow>
          <TableHeaderColumn label="오메가루비 / 알파사파이어" />
          <TableRowColumn label="포켓무버, 교환" />
        </TableRow>
      </Table>
    </div>
  );
};

PokemonDetailLocation.propTypes = {
  // pokemonInfo: PropTypes.object,
};

export default PokemonDetailLocation;
