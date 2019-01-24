import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import PaperDoll from '../images/paperdoll.svg';
import Shirt from '../images/shirt_doll.svg';
import Trousers from '../images/trousers_doll.svg';
import Boots from '../images/boots_doll.svg';

import Area from '../components/Area';
import UserInfo from './UserInfo';

export default class Wardrobe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: {
        hair: 'bald',
        topA: Shirt,
        topB: Shirt,
        bottom: Trousers,
        shoes: Boots,
      },
      userInfo: {
        haircolor: 'bald',
        sizeTop: 'S',
        sizeBottom: 'S',
        sizeShoes: '42',
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleUserInfoChange(event) {
    const { target } = event;
    const { name } = target;
    this.setState({
      userInfo: {
        [name]: target,
      },
    });
  }

  handleUserInfoChange(event) {
    const { target } = event;
    const { name } = target;
    this.setState({
      userInfo: {
        [name]: target,
      },
    });
  }

  render() {
    const { areas, userInfo } = this.state;
    const {
      hair,
      topA,
      topB,
      bottom,
      shoes,
    } = areas;

    return (
      <div>
        <UserInfo userInfo={userInfo} onChange={this.handleUserInfoChange} />
        <div id="paperdoll">
          <Area svg={hair} id="hair" />
          <Area svg={topA} id="top_a" />
          <Area svg={topB} id="top_b" />
          <Area svg={bottom} id="bottom" />
          <Area svg={shoes} id="shoes" />
          <SVG src={PaperDoll} />
        </div>
        <Clothing onChange={this.handleChangeItem} />
      </div>
    );
  }
}
