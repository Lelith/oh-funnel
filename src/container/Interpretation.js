import React, { Component } from 'react';
import _ from 'lodash';

import ProgressBar from '../components/ProgressBar';

import thoughtbubble from '../images/thought_bubble.png'
import thoughtbubblestarts from '../images/thought_bubble_stars.gif'
import stars from '../images/starts.gif'

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
          console.log('WARNING: Could not locate scores for ' + garment + ' in ' + area)
        }
      } else {
        console.log('WARNING: Could not locate area ' + area + ' in config');
      }
    }

    this.setState({ progress: progress })
  }

  render() {
    const {
      progress
    } = this.state;

    const {
      onClick
    } = this.props;

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
      backgroundImage: ''
    };

    for (var style in progress) {
      let value = progress[style];
      if (value >= 100 || style === 'hipster') {
        thougBubbleContent = 
            <div id='containerTrophy'>
                <label key={style} htmlFor={style}>
                  <input
                    hidden
                    type="radio"
                    id={style}
                    name="ClothingItem"
                    onClick={onClick}
                    data-area='rewards'
                    data-item={style}
                  />
                  <img src={ '/images/icon/reward_' + style + '.svg' } alt={ style } />
                  No. 1 { style }!
                </label>
            </div>;
        thoughBubbleStyle = { backgroundImage: 'url(' + stars + ')' };
      }
    }

    return (
      <div id='containerInterpretation'>
        <div id='containerUnicorn' />
        <div id='containerThoughtBubble' className="container" style={ thoughBubbleStyle }>
          { thougBubbleContent }
        </div>
      </div>
    );
  }
}