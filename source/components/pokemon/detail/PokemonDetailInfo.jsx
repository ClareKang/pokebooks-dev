import React, { PropTypes, Component } from 'react';
import { Card, CardMedia, CardText } from 'material-ui/Card';
import { Table, TableRow, TableHeaderColumn, TableRowColumn } from 'library/TableCollector';
import { PokemonTypeChip } from 'library/InfoCollector';

const PokemonDetailInfo = props => {
  return (
    <Card style={props.style}>
      <CardMedia>
        <img src="http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png" />
      </CardMedia>
      <CardText style={{ padding: 10 }}>
        <div style={{ textAlign: 'center' }}>
          <PokemonTypeChip type="GRASS" />
          <PokemonTypeChip type="POISON" />
        </div>
        <Table>
          <colgroup>
            <col width="20%" />
            <col width="30%" />
            <col width="20%" />
            <col width="30%" />
          </colgroup>
          <TableRow>
            <TableHeaderColumn label="분류" />
            <TableRowColumn colSpan={3} label="씨앗포켓몬" />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="특성" />
            <TableRowColumn colSpan={3} label="심록" />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="숨겨진 특성" />
            <TableRowColumn colSpan={3} label="엽록소" />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="경험치" />
            <TableRowColumn colSpan={3} label="1,059,860" />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="길이" />
            <TableRowColumn label="0.7m" />
            <TableHeaderColumn label="몸무게" />
            <TableRowColumn label="6.9kg" />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="포획률" />
            <TableRowColumn label="45" />
            <TableHeaderColumn label="기초 친밀도" />
            <TableRowColumn label="70" />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="성비" />
            <TableRowColumn colSpan={3} label="수컷:87.5% / 암컷:12.5%" />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="알그룹" />
            <TableRowColumn
              colSpan={3}
              label={
                <div>
                  <a href="#">괴수</a>,
                  <a href="#">식물</a>
                </div>
              }
            />
          </TableRow>
          <TableRow>
            <TableHeaderColumn label="부화 걸음수" />
            <TableRowColumn colSpan={3} label="5,120" />
          </TableRow>
        </Table>
      </CardText>
    </Card>
  );
};

PokemonDetailInfo.propTypes = {
  style: PropTypes.object,
};

export default PokemonDetailInfo;
