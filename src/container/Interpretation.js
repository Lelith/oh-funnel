import React, { Component } from 'react';

import ProgressBar from '../components/ProgressBar';

import trophy from '../images/trophy.png'
import thoughtbubble from '../images/thought_bubble.png'
import thoughtbubblestarts from '../images/thought_bubble_stars.gif'

export default class Interpretation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: {
        "casual": 10,
        "sporty": 20,
        "business": 30,
        "hipster": 10,
        "hippie": 50,
        "ballermann": 10
      }
    };
  }

  /* Should take the new props, read out the items actual points for each category and then compute the sum */
  /*componentWillReceiveProps(nextProps) {
    for (var key in nextProps.currentItems) {
      let val = nextProps.currentItems[key];
      nextProps.itemConfig[key] blah blah
    }
  }*/

  render() {
    const {
      progress
    } = this.state;

    let thougBubbleContent = 
    <div id='containerProgressbars'>
        Casual: <ProgressBar id='causalProgressbar' value={ progress['casual'] } />
        Sporty: <ProgressBar id='sportyProgressbar' value={ progress['sporty'] } />
        Business: <ProgressBar id='businessProgressbar' value={ progress['business'] } />
        Hipster: <ProgressBar id='hipsterProgressbar' value={ progress['hipster'] } />
        Hippie: <ProgressBar id='hippieProgressbar' value={ progress['hippie'] } />
        Ballermann: <ProgressBar id='ballermannProgressbar' value={ progress['ballermann'] } />
    </div>;
    let thoughBubbleStyle = {
      backgroundImage: 'url(' + thoughtbubble + ')'
    };

    for (var style in progress) {
      let value = progress[style];
      if (value > 100) {
        thougBubbleContent = <div id='containerTrophy'><img src={trophy} /><br /><h2>No. 1 { style }!</h2></div>;
        thoughBubbleStyle = { backgroundImage: 'url(' + thoughtbubblestarts + '), url(' + thoughtbubble + ')' };
      }
    }

    return (
      <div id='containerInterpretation'>
        <div id='containerUnicorn' />
        <div id='containerThoughtBubble' style={ thoughBubbleStyle }>
          { thougBubbleContent }
        </div>
      </div>
    );
  }
}