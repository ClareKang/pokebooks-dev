import React, { PropTypes, Component } from 'react';
// import { connect } from 'react-redux';
import { Avatar, RaisedButton, CardText } from 'material-ui';
import ExpandableCard from 'library/ExpandableCard';

import PokemonDetailInfo from './detail/PokemonDetailInfo';
import PokemonDetailStat from './detail/PokemonDetailStat';

import { Table, TableRow, TableHeaderColumn, TableRowColumn } from 'library/TableCollector';

const docStyle = {
  marginRight: 310,
};
const infoStyle = {
  float: 'right',
  padding: 10,
  width: 300,
};

const PokemonDetail = props => {
  return (
    <div>
      <RaisedButton
        label="RaisedButton"
        secondary
        style={{ float: 'right' }}
      />
      <h2>
        #001 이상해씨 <small>フシギダネ / Bulbasaur</small>
        <Avatar
          src="http://serebii.net/pokedex-xy/icon/001.png"
          size={40}
          style={{ verticalAlign: 'middle', marginLeft: 10 }}
        />
      </h2>
      <PokemonDetailInfo style={infoStyle} />
      <div style={docStyle}>
        <ExpandableCard title="Biology">
          <CardText expandable>
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
          </CardText>
        </ExpandableCard>
        <ExpandableCard title="Stats">
          <PokemonDetailStat />
        </ExpandableCard>
        <ExpandableCard title="Evolution">
          <CardText expandable>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </ExpandableCard>
        <ExpandableCard title="Locations">
          <CardText expandable>
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
          </CardText>
        </ExpandableCard>
        <ExpandableCard title="Damage">
          <CardText expandable>
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
          </CardText>
        </ExpandableCard>
        <ExpandableCard title="Skill List">
          <CardText expandable>
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
          </CardText>
        </ExpandableCard>
      </div>
    </div>
  );
};

PokemonDetail.propTypes = {
  // pokemonInfo: PropTypes.object,
  routeParams: PropTypes.object,
};

// const ConnectedAppContainer = connect(
//   (state) => ({
//     // isAuthenticated: state.login.get('isAuthenticated'),
//   })
// )(AppContainer);

export default PokemonDetail;
