import React, { PropTypes, Component } from 'react';
import { CardText } from 'material-ui';
import { Table, TableRow, TableHeaderColumn, TableRowColumn } from 'library/TableCollector';

const PokemonDetailBiology = props => {
  return (
    <div>
      <p>
        태어날 때부터 등에 있는 이상한 씨앗과 함께 성장하며 자란다. 이상해씨는 며칠 동안 굶어도 이상이 없는데, 그 이유는 씨앗에 영양분이 가득해 진화하기 전까지 등에 자라는 씨앗에서 영양분을 얻을 수 있기 때문이다. 몸이 자라는 만큼 씨앗도 같이 자라며, 이 씨앗은 광합성을 통해 자라기도 한다. 일정 수준이 지나 씨앗이 꽃봉오리가 되면 이상해풀로 진화한다.
      </p>
      <h4>Pokédex entries</h4>
      <Table>
        <TableRow>
          <TableHeaderColumn label="X" />
          <TableRowColumn label="태어났을 때부터 등에 이상한 씨앗이 심어져 있으며 몸과 함께 자란다고 한다." />
        </TableRow>
        <TableRow>
          <TableHeaderColumn label="Y" />
          <TableRowColumn label="태어나서부터 얼마 동안은 등의 씨앗으로부터 영양을 공급받아 크게 성장한다." />
        </TableRow>
        <TableRow>
          <TableHeaderColumn label="오메가루비" />
          <TableRowColumn label="양지에서 낮잠 자는 모습을 볼 수 있다.\n태양의 빛을 많이 받으면 등의 씨앗이 크게 자란다." />
        </TableRow>
        <TableRow>
          <TableHeaderColumn label="알파사파이어" />
          <TableRowColumn label="양지에서 낮잠 자는 모습을 볼 수 있다.\n태양의 빛을 많이 받으면 등의 씨앗이 크게 자란다." />
        </TableRow>
      </Table>
    </div>
  );
};

PokemonDetailBiology.propTypes = {
  pokemonInfo: PropTypes.object,
};

export default PokemonDetailBiology;
