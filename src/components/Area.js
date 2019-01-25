import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';

const Area = (props) => {
  const {
    item,
    areaItems,
    id,
  } = props;
  return (
    <div id={id} className="area">
      <img src={`/images/doll/${areaItems.items[item].img_name}`} alt="{item}" />
    </div>
  );
};

Area.propTypes = {
  item: PropTypes.string,
  areaItems: PropTypes.object,
  id: PropTypes.string.isRequired,
};

Area.defaultProps = {
  item: 'undefined',
  areaItems: {}
};

export default Area;
