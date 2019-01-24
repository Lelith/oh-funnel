import React from 'react';
import PropTypes from 'prop-types';

const Filler = (props) => {
  const {
    value
  } = props;

  return <div className="filler" style={{ width: `${value}%` }}>{ value }%</div>
};

Filler.propTypes = {
  value: PropTypes.number
};

Filler.defaultProps = {
  value: 0,
};

export default Filler;
