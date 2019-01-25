import React, { Component } from 'react';
import _ from 'lodash';

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

  componentDidMount() {
    this.props2progress(this.props)
  }

  /* Should take the new props, read out the items actual points for each category and then compute the sum */
  componentWillReceiveProps(nextProps) {
    this.props2progress(nextProps)
  }

  props2progress(props) {
    let progress = _.mapValues(this.state.progress, () => 0);

    for (var area in props.currentItems) {
      if (area in props.itemConfig) {
        let garment = props.currentItems[area];
        if (garment in props.itemConfig[area]['items']) {
          let scores = props.itemConfig[area]['items'][garment]['category_scores']
          for (var style in progress) {
            progress[style] += scores[style]
          }
        } else {
          console.log('Could not locate scores for ' + garment + ' in ' + area)
        }
      }
    }

    this.setState({ progress: progress })
  }

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
      if (value > 100 || style === 'hipster') {
        thougBubbleContent = 
            <div id='containerTrophy'>
                <button key={ style } type="button" className='rewardButton'>
                    <img src={ '/images/icon/reward_' + style + '.svg' } alt={ style } />
                </button><br />
                <h2>No. 1 { style }!</h2>
            </div>;
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