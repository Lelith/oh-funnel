import React from 'react';
import PropTypes from 'prop-types';


const SectionItems = (props) => {
  const { areaName, sectionItems, onClick } = props;
  return (
    <ul>
      {
        Object.keys(sectionItems).map((item) => {
          return (
            <label key={item} htmlFor={item}>
              <input
                hidden
                type="radio"
                id={item}
                name="ClothingItem"
                onClick={onClick}
                data-area={areaName}
                data-item={item}
              />
              <img src={ '/images/icon/' + sectionItems[item]['img_name'] } alt={ item } className="iconImage" />
            </label>
          );
        })
    }
    </ul>
  );
};

const Clothing = (props) => {
  const { items, onChange } = props;

  return (
    <div id='clothing'  className="container">
      {
        Object.keys(items).map(type => (
          <div className="itemType" key={type}>
          <h3>{ items[type].name }</h3>
            <SectionItems
            areaName={type}
            sectionItems={items[type].items} onClick={onChange}
            />
          </div>
        ))}
    </div>
  );
};

Clothing.propTypes = {
  items: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Clothing;
