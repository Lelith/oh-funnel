import React from 'react';
import PropTypes from 'prop-types';
import ItemImages from './TestItems.js';
import SVG from 'react-inlinesvg';

const SectionItems = (props) => {
  const { sectionItems, onClick } = props;
    return (
      <button onClick={onClick}>Item</button>
    )
}

const Clothing = (props) => {
  const { items, onChange } = props;

  const Sections =  Object.keys(items).map((type) => {
    return (
      <div className="itemType" key={type}>
        <a href="#">{type}</a>
        <SectionItems sectionItems={items[type].items} onClick={onChange} />
      </div>
    );
  });

  return (
    <div>
      {Sections}
    </div>
  );
};

Clothing.propTypes = {
  items: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Clothing;
