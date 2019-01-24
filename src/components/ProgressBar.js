import React from 'react';
import PropTypes from 'prop-types';

import Filler from './Filler'

const ProgressBar = (props) => {
  const {
    value,
    id,
  } = props;

  return (
    <div id={ id } className="progress-bar">
      <Filler value={ value } />
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number,
  id: PropTypes.string.isRequired,
};

ProgressBar.defaultProps = {
  value: 0,
};

export default ProgressBar;
