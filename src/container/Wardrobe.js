import React, { Component } from 'react';
import Items from '../config.json';
import UserItems from '../userconfig.json';
import RewardItems from '../rewardconfig.json';
import Clothing from './Clothing';
import Area from '../components/Area';
import Interpretation from './Interpretation';

export default class Wardrobe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: {
        hair: 'bald',
        top_a: 'undefined1',
        top_b: 'undefined2',
        bottom: 'undefined3',
        shoes: 'undefined4',
        rewards: 'rewardundefined'
      }
    };

    this.handleChangeItem = this.handleChangeItem.bind(this);
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
    const { areas } = this.state;
    const {
      hair,
      top_a,
      top_b,
      bottom,
      shoes,
      rewards
    } = areas;

    return (
      <div id="wardrobe">
        <div id="paperdoll" className="container">
          <Area areaItems={UserItems.hair} item={hair} id="hair" />
          <Area areaItems={Items.top_a} item={top_a} id="top_a" />
          <Area areaItems={Items.top_b} item={top_b} id="top_b" />
          <Area areaItems={Items.bottom} item={bottom} id="bottom" />
          <Area areaItems={Items.shoes} item={shoes} id="shoes" />
          <Area areaItems={RewardItems.reward} item={rewards} id="rewards" />
          <img src="../images/paperdoll.svg" alt="paperdoll" />
        </div>
        <Clothing items={Items} onChange={this.handleChangeItem} />

        <Interpretation itemConfig={Items} currentItems={ areas } onClick={this.handleChangeItem} />
      </div>
    );
  }
}
