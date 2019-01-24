import React from 'react';
import PropTypes from 'prop-types';

const Clothing = (props) => {
  const { items, onChange } = props;

  console.table(items);
  return (
    <div>
      <div className="type">
      </div>
    </div>
  );
};

Clothing.propTypes = {
  items: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Clothing;
