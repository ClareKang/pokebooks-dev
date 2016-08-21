import React, { PropTypes, Component } from 'react';
// import { connect } from 'react-redux';
import { Table, TableRow, TableHeaderColumn, TableRowColumn } from 'library/TableCollector';
import { PokemonTypeChip } from 'library/InfoCollector';

// --- dummy code
const list = [];
for (var i = 1 ; i < 10 ; i++) {
  list.push(i);
}
// --- dummy code

class PokemonList extends Component {
  render() {
    return (
      <div>
        <h2>PokemonList</h2>
        <Table>
          <thead>
            <TableRow>
              <TableHeaderColumn label="#" />
              <TableHeaderColumn label="Name" />
              <TableHeaderColumn label="Type" />
            </TableRow>
          </thead>
          <tbody>
            {
              list.map(item => (
                <TableRow>
                  <TableRowColumn label={item} />
                  <TableRowColumn
                    label={
                      <span>
                        <img
                          src={`http://serebii.net/pokedex-xy/icon/00${item}.png`}
                          style={{ verticalAlign: 'middle' }}
                        />
                        <span style={{ verticalAlign: 'middle' }}>이상해씨</span>
                      </span>
                    }
                  />
                  <TableRowColumn
                    label={
                      <div style={{ textAlign: 'center' }}>
                        <PokemonTypeChip type="GRASS" />
                        <PokemonTypeChip type="POISON" />
                      </div>
                    }
                  />
                </TableRow>
              ))
            }
          </tbody>
        </Table>
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
