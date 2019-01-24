import React, { Component } from 'react';

import ProgressBar from '../components/ProgressBar';

export default class Interpretation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      causalProgressbarValue: 10,
      sportyProgressbarValue: 20,
      businessProgressbarValue: 30,
      hipsterProgressbarValue: 40,
      hippieProgressbarValue: 50,
      ballermannProgressbarValue: 60
    };
  }

  render() {
    const {
      causalProgressbarValue,
      sportyProgressbarValue,
      businessProgressbarValue,
      hipsterProgressbarValue,
      hippieProgressbarValue,
      ballermannProgressbarValue,
    } = this.state;

    return (
      <div id='containerInterpretation'>
        <div id='containerProgressbars'>
          Casual: <ProgressBar id='causalProgressbar' value={ causalProgressbarValue } />
          Sporty: <ProgressBar id='sportyProgressbar' value={ sportyProgressbarValue } />
          Business: <ProgressBar id='businessProgressbar' value={ businessProgressbarValue } />
          Hipster: <ProgressBar id='hipsterProgressbar' value={ hipsterProgressbarValue } />
          Hippie: <ProgressBar id='hippieProgressbar' value={ hippieProgressbarValue } />
          Ballermann: <ProgressBar id='ballermannProgressbar' value={ ballermannProgressbarValue } />
        </div>
      </div>
    );
  }
}