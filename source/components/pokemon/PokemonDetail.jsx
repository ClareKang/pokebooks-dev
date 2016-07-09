import React, { PropTypes, Component } from 'react';
// import { connect } from 'react-redux';
import { Avatar, RaisedButton } from 'material-ui';
import ExpandableCard from 'library/ExpandableCard';

import PokemonDetailInfo from './detail/PokemonDetailInfo';
import PokemonDetailBiology from './detail/PokemonDetailBiology';
import PokemonDetailStat from './detail/PokemonDetailStat';
import PokemonDetailEvolution from './detail/PokemonDetailEvolution';
import PokemonDetailLocation from './detail/PokemonDetailLocation';
import PokemonDetailDamageRate from './detail/PokemonDetailDamageRate';
import PokemonDetailAttackList from './detail/PokemonDetailAttackList';

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
          <PokemonDetailBiology />
        </ExpandableCard>
        <ExpandableCard title="Stats">
          <PokemonDetailStat />
        </ExpandableCard>
        <ExpandableCard title="Evolution">
          <PokemonDetailEvolution />
        </ExpandableCard>
        <ExpandableCard title="Locations">
          <PokemonDetailLocation />
        </ExpandableCard>
        <ExpandableCard title="Damage">
          <PokemonDetailDamageRate />
        </ExpandableCard>
        <ExpandableCard title="Skill List">
          <PokemonDetailAttackList />
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
