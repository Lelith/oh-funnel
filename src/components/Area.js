import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';

const Area = (props) => {
  const {
    svg,
    id,
  } = props;

  return (
    <div id={id} className="area">
      <SVG src={svg} />
    </div>
  );
};

Area.propTypes = {
  svg: PropTypes.any,
  id: PropTypes.string.isRequired,
};

Area.defaultProps = {
  svg: '',
};

export default Area;
