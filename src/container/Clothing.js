/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import ItemImages from './TestItems';

const SectionItems = (props) => {
  const { areaName, sectionItems, onClick } = props;
  return (
    <ul>
      {
        Object.keys(sectionItems).map((item) => {
          const svgsrc = sectionItems[item].img_name;
          console.log();
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
              <SVG src={ItemImages[svgsrc]} />
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
    <div id='clothing'>
      {
        Object.keys(items).map(type => (
          <div className="itemType" key={type}>
          <a href="#">{type}</a>
            <SectionItems areaName={type} sectionItems={items[type].items} onClick={onChange} />
          </div>
        ))
        })
      }
    </div>
  );
};

Clothing.propTypes = {
  items: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Clothing;
