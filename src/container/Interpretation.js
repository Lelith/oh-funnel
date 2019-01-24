import React, { Component } from 'react';

import ProgressBar from '../components/ProgressBar';

import trophy from '../images/trophy.png'
import thoughtbubble from '../images/thought_bubble.png'
import thoughtbubblestarts from '../images/thought_bubble_stars.gif'

export default class Interpretation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      causalProgressbarValue: 10,
      sportyProgressbarValue: 20,
      businessProgressbarValue: 30,
      hipsterProgressbarValue: 10,
      hippieProgressbarValue: 50,
      ballermannProgressbarValue: 100
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

    let thougBubbleContent;
    let thoughBubbleStyle;
    if (causalProgressbarValue >= 100) {
      thougBubbleContent = <div id='containerTrophy'><img src={trophy} /><br /><h2>No. 1 Medium Dude!</h2></div>;
      thoughBubbleStyle = {
        backgroundImage: 'url(' + thoughtbubblestarts + '), url(' + thoughtbubble + ')'
      };
    } else if (sportyProgressbarValue >= 100) {
      thougBubbleContent = <div id='containerTrophy'><img src={trophy} /><br /><h2>No. 1 Wanna-be Sport Star!</h2></div>;
      thoughBubbleStyle = {
        backgroundImage: 'url(' + thoughtbubblestarts + '), url(' + thoughtbubble + ')'
      };
    } else if (businessProgressbarValue >= 100) {
      thougBubbleContent = <div id='containerTrophy'><img src={trophy} /><br /><h2>No. 1 Businesser!</h2></div>;
      thoughBubbleStyle = {
        backgroundImage: 'url(' + thoughtbubblestarts + '), url(' + thoughtbubble + ')'
      };
    } else if (hipsterProgressbarValue >= 100) {
      thougBubbleContent = <div id='containerTrophy'><img src={trophy} /><br /><h2>No. 1 Hipster!</h2></div>;
      thoughBubbleStyle = {
        backgroundImage: 'url(' + thoughtbubblestarts + '), url(' + thoughtbubble + ')'
      };
    } else if (hippieProgressbarValue >= 100) {
      thougBubbleContent = <div id='containerTrophy'><img src={trophy} /><br /><h2>No. 1 Hippie!</h2></div>;
      thoughBubbleStyle = {
        backgroundImage: 'url(' + thoughtbubblestarts + '), url(' + thoughtbubble + ')'
      };
    } else if (ballermannProgressbarValue >= 100) {
      thougBubbleContent = <div id='containerTrophy'><img src={trophy} /><br /><h2>You are Ballermann!</h2></div>;
      thoughBubbleStyle = {
        backgroundImage: 'url(' + thoughtbubblestarts + '), url(' + thoughtbubble + ')'
      };
    } else {
      thougBubbleContent = 
        <div id='containerProgressbars'>
          <div className='progress-bar-group'>
            Casual: <ProgressBar id='causalProgressbar' value={ causalProgressbarValue } />
            Sporty: <ProgressBar id='sportyProgressbar' value={ sportyProgressbarValue } />
            Business: <ProgressBar id='businessProgressbar' value={ businessProgressbarValue } />
          </div>
          <div className='progress-bar-group'>
            Hipster: <ProgressBar id='hipsterProgressbar' value={ hipsterProgressbarValue } />
            Hippie: <ProgressBar id='hippieProgressbar' value={ hippieProgressbarValue } />
            Ballermann: <ProgressBar id='ballermannProgressbar' value={ ballermannProgressbarValue } />
          </div>
        </div>;
        thoughBubbleStyle = {
          backgroundImage: 'url(' + thoughtbubble + ')'
        };
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