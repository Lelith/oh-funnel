import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import Items from '../config.json';
import UserItems from '../userconfig.json';
import UserInfo from './UserInfo';
import Clothing from './Clothing';
import PaperDoll from '../images/paperdoll.svg';
import Area from '../components/Area';
import Interpretation from './Interpretation';

export default class Wardrobe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: {
        hair: 'bald',
        top_a: 'undefined',
        top_b: 'undefined',
        bottom: 'undefined',
        shoes: 'undefined',
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
    event.stopPropagation();
    const { area, item } = event.target.dataset;
    this.setState(prevState => ({
      areas: {
        ...prevState.areas,
        [area]: item,
      },
    }));
  }

  render() {
    const { areas, userInfo } = this.state;
    const {
      hair,
      top_a,
      top_b,
      bottom,
      shoes,
    } = areas;

    return (
      <div>
        <UserInfo userInfo={userInfo} onChange={this.handleChangeUserInfo} />
        <div id="paperdoll" className="container">
          <Area areaItems={UserItems.hair} item={hair} id="hair" />
          <Area areaItems={Items.top_a} item={top_a} id="top_a" />
          <Area areaItems={Items.top_b} item={top_b} id="top_b" />
          <Area areaItems={Items.bottom} item={bottom} id="bottom" />
          <Area areaItems={Items.shoes} item={shoes} id="shoes" />
          <img src="../images/paperdoll.svg" alt="paperdoll" />
        </div>
        <Clothing items={Items} onChange={this.handleChangeItem} />

        <Interpretation itemConfig={Items} currentItems={{ hair: 'bald', topA: 'plain', topB: 'knitted_top_plain', bottom: 'jeans_plain', shoes: 'sport' }} />
      </div>
    );
  }
}
