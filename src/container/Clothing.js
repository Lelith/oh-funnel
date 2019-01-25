/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';


const SectionItems = (props) => {
  const { sectionItems, onClick } = props;

  const Items = Object.keys(sectionItems).map((item) => {
    return (
      <button key={item} type="button" onClick={onClick} className='iconButton'>
        <img src={ '/images/icon/' + sectionItems[item]['img_name'] } alt={ item } />
      </button>
    );
  });

  return (
    <ul>
      {Items}
    </ul>
  );
};

const Clothing = (props) => {
  const { items, onChange } = props;

  const Sections = Object.keys(items).map((type) => {
    return(
    <div className="itemType" key={type}>
      <a href="#">{type}</a>
      <SectionItems sectionItems={items[type].items} onClick={onChange} />
    </div>);
  });


  return (
    <div id='clothing'>
      {Sections}
    </div>
  );
};

Clothing.propTypes = {
  items: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Clothing;
