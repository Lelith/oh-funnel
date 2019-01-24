import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import Items from '../config.json';

import PaperDoll from '../images/paperdoll.svg';
import Shirt from '../images/shirt_doll.svg';
import Trousers from '../images/trousers_doll.svg';
import Boots from '../images/boots_doll.svg';

import Area from '../components/Area';
import UserInfo from './UserInfo';
import Clothing from './Clothing';

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

    this.handleChangeItem = this.handleChangeItem.bind(this);
    this.handleChangeUserInfo = this.handleChangeUserInfo.bind(this);
  }

  handleChangeUserInfo(event) {
    const { target } = event;
    const { name } = target;
    this.setState({
      userInfo: {
        [name]: target,
      },
    });
  }

  handleChangeItem(event) {
    const { target } = event;
    const { name } = target;
    this.setState({
      areas: {
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
        <UserInfo userInfo={userInfo} onChange={this.handleChangeUserInfo} />
        <div id="paperdoll">
          <Area svg={hair} id="hair" />
          <Area svg={topA} id="top_a" />
          <Area svg={topB} id="top_b" />
          <Area svg={bottom} id="bottom" />
          <Area svg={shoes} id="shoes" />
          <SVG src={PaperDoll} />
        </div>
        <Clothing items={Items} onChange={this.handleChangeItem} />
      </div>
    );
  }
}
