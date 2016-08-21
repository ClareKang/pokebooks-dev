import React, { PropTypes, Component } from 'react';
import { Table, TableRow, TableHeaderColumn, TableRowColumn } from 'library/TableCollector';

const PokemonDetailStat = props => {
  return (
    <div>
      <h4>Base stats</h4>
      <Table>
        <thead>
          <TableRow>
            <TableHeaderColumn label="Stat" rowSpan={2} colSpan={2} />
            <TableHeaderColumn label="Range" colSpan={2} />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="At Lv.50" />
            <TableHeaderColumn label="At Lv.100" />
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableHeaderColumn label="HP" />
            <TableRowColumn label={45} />
            <TableRowColumn label={'105 - 152'} />
            <TableRowColumn label={'200 - 294'} />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="Attack" />
            <TableRowColumn label={49} />
            <TableRowColumn label={'48 - 111'} />
            <TableRowColumn label={'92 - 216'} />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="Defense" />
            <TableRowColumn label={49} />
            <TableRowColumn label={'48 - 111'} />
            <TableRowColumn label={'92 - 216'} />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="Sp.Atk" />
            <TableRowColumn label={65} />
            <TableRowColumn label={'63 - 128'} />
            <TableRowColumn label={'121 - 251'} />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="Sp.Def" />
            <TableRowColumn label={65} />
            <TableRowColumn label={'63 - 128'} />
            <TableRowColumn label={'121 - 251'} />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="Speed" />
            <TableRowColumn label={45} />
            <TableRowColumn label={'45 - 106'} />
            <TableRowColumn label={'85 - 207'} />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="Total" />
            <TableRowColumn label={318} colSpan={3} />
          </TableRow>
        </tbody>
      </Table>
      <h4>Pokéathlon stats</h4>
      <Table>
        <thead>
          <TableRow>
            <TableHeaderColumn label="Speed" />
            <TableHeaderColumn label="Power" />
            <TableHeaderColumn label="Skill" />
            <TableHeaderColumn label="Stamina" />
            <TableHeaderColumn label="Jump" />
            <TableHeaderColumn label="Total" />
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableRowColumn label={'2/3 ★★☆'} />
            <TableRowColumn label={'2/3 ★★☆'} />
            <TableRowColumn label={'3/4 ★★★☆'} />
            <TableRowColumn label={'3/4 ★★★☆'} />
            <TableRowColumn label={'3/3 ★★★'} />
            <TableRowColumn label={'13/17 ★★☆'} />
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
};

PokemonDetailStat.propTypes = {
  // pokemonInfo: PropTypes.object,
};

export default PokemonDetailStat;
