import React, { PropTypes, Component } from 'react';
import { Table, TableRow, TableHeaderColumn, TableRowColumn } from 'library/TableCollector';

const PokemonDetailAttackList = props => {
  return (
    <div>
      <h4>By Level Up</h4>
      <Table>
        <thead>
          <TableRow>
            <TableHeaderColumn label="Level" />
            <TableHeaderColumn label="Attack Name" />
            <TableHeaderColumn label="Type" />
            <TableHeaderColumn label="Cat." />
            <TableHeaderColumn label="Att." />
            <TableHeaderColumn label="Acc." />
            <TableHeaderColumn label="PP" />
            <TableHeaderColumn label="Effect %" />
          </TableRow>
          </thead>
        <tbody>
          <TableRow>
            <TableRowColumn label={'x2'} />
            <TableRowColumn label={'x0.25'} />
            <TableRowColumn label={'x0.5'} />
            <TableRowColumn label={'x2'} />
            <TableRowColumn label={'x0.5'} />
            <TableRowColumn label={'x1'} />
            <TableRowColumn label={'x1'} />
            <TableRowColumn label={'x0.5'} />
          </TableRow>
        </tbody>
      </Table>
      <h4>By TM/HM</h4>
      <Table>
        <thead>
          <TableRow>
            <TableHeaderColumn label="TM/HM #" />
            <TableHeaderColumn label="Attack Name" />
            <TableHeaderColumn label="Type" />
            <TableHeaderColumn label="Cat." />
            <TableHeaderColumn label="Att." />
            <TableHeaderColumn label="Acc." />
            <TableHeaderColumn label="PP" />
            <TableHeaderColumn label="Effect %" />
          </TableRow>
          </thead>
        <tbody>
          <TableRow>
            <TableRowColumn label={'x2'} />
            <TableRowColumn label={'x0.5'} />
            <TableRowColumn label={'x0.5'} />
            <TableRowColumn label={'x2'} />
            <TableRowColumn label={'x0.5'} />
            <TableRowColumn label={'x1'} />
            <TableRowColumn label={'x1'} />
            <TableRowColumn label={'x0.5'} />
          </TableRow>
        </tbody>
      </Table>
      <h4>By Breeding</h4>
      <Table>
        <thead>
          <TableRow>
            <TableHeaderColumn label="Attack Name" />
            <TableHeaderColumn label="Type" />
            <TableHeaderColumn label="Cat." />
            <TableHeaderColumn label="Att." />
            <TableHeaderColumn label="Acc." />
            <TableHeaderColumn label="PP" />
            <TableHeaderColumn label="Effect %" />
          </TableRow>
          </thead>
        <tbody>
          <TableRow>
            <TableRowColumn label={'x0.5'} />
            <TableRowColumn label={'x0.25'} />
            <TableRowColumn label={'x0.5'} />
            <TableRowColumn label={'x2'} />
            <TableRowColumn label={'x0.5'} />
            <TableRowColumn label={'x1'} />
            <TableRowColumn label={'x0.5'} />
          </TableRow>
        </tbody>
      </Table>
      <h4>By Tutoring</h4>
      <Table>
        <thead>
          <TableRow>
            <TableHeaderColumn label="Attack Name" />
            <TableHeaderColumn label="Type" />
            <TableHeaderColumn label="Cat." />
            <TableHeaderColumn label="Att." />
            <TableHeaderColumn label="Acc." />
            <TableHeaderColumn label="PP" />
            <TableHeaderColumn label="Effect %" />
            <TableHeaderColumn label="Method" />
          </TableRow>
          </thead>
        <tbody>
          <TableRow>
            <TableRowColumn label={'x2'} />
            <TableRowColumn label={'x0.5'} />
            <TableRowColumn label={'x0.25'} />
            <TableRowColumn label={'x0.5'} />
            <TableRowColumn label={'x2'} />
            <TableRowColumn label={'x1'} />
            <TableRowColumn label={'x1'} />
            <TableRowColumn label={'x0.5'} />
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
};

PokemonDetailAttackList.propTypes = {
  // pokemonInfo: PropTypes.object,
};

export default PokemonDetailAttackList;
