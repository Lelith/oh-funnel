import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import PaperDoll from '../images/paperdoll.svg';
import Shirt from '../images/shirt_doll.svg';
import Trousers from '../images/trousers_doll.svg';
import Boots from '../images/boots_doll.svg';
import Area from '../components/Area';

export default class Wardrobe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: {
        hair: 'bald',
        topA: Shirt,
        topB: Shirt,
        bottom: Trousers,
        shoes: Boots
      },
      characteristics: {
        hipster: 0,
        sporty: 0,
        business: 0,
      }
    };
  }

  render() {
    const {
      hair,
      topA,
      topB,
      bottom,
      shoes,
    } = this.state.areas;

    return (
      <div>
        <div id="paperdoll">
          <Area svg={hair} id="hair" />
          <Area svg={topA} id="top_a" />
          <Area svg={topB} id="top_b" />
          <Area svg={bottom} id="bottom" />
          <Area svg={shoes} id="shoes" />
          <SVG src={PaperDoll} />
        </div>
      </div>
    );
  }
}
