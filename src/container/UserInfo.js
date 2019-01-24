import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = (props) => {
  const { userInfo, onChange } = props;
  console.log(onChange);
  const {
    haircolor,
    sizeTop,
    sizeBottom,
    sizeShoes,
  } = userInfo;

  return (
    <div>
      <h2>Tell us About You</h2>
      <h3>What hair color do you have?</h3>
      <label htmlFor="hair_blonde">
      Blonde
        <input
          id="hair_blonde"
          type="radio"
          name="haircolor"
          value="blonde"
          checked={haircolor === 'blonde'}
          onChange={onChange}
        />
      </label>
      <label htmlFor="hair_brown">
        Brown
        <input
          onChange={onChange}
          type="radio"
          name="haircolor"
          id="hair_brown"
          value="brown"
          checked={haircolor === 'blonde'}
        />
      </label>
      <label htmlFor="hair_bald">
        I don{'\''}t have hair
        <input
          onChange={onChange}
          type="radio"
          name="haircolor"
          id="hair_bald"
          value="bald"
          checked={haircolor === 'bald'}
        />
      </label>

      <h3>What is your Shirt size?</h3>
      <label htmlFor="sizeTop_s">
      S
        <input
          onChange={onChange}
          type="radio"
          name="sizeTop"
          id="sizeTop_s"
          value="S"
          checked={sizeTop === 'S'}
        />
      </label>
      <label htmlFor="sizeTop_M">
      M
        <input
          onChange={onChange}
          type="radio"
          name="sizeTop"
          id="sizeTop_M"
          value="M"
          checked={sizeTop === 'M'}
        />
      </label>
      <label htmlFor="sizeTop_L">
      L
        <input
          onChange={onChange}
          type="radio"
          name="sizeTop"
          id="sizeTop_L"
          value="L"
          checked={sizeTop === 'L'}
        />
      </label>

      <h3>What is your Bottom size?</h3>
      <label htmlFor="sizeBottom_S">
        S
        <input
          onChange={onChange}
          type="radio"
          name="sizeBottom"
          id="sizeBottom_S"
          value="S"
          checked={sizeBottom === 'S'}
        />
      </label>
      <label htmlFor="sizeBottom_M">
        M
        <input
          onChange={onChange}
          type="radio"
          name="sizeBottom"
          id="sizeBottom_M"
          value="M"
          checked={sizeBottom === 'M'}
        />
      </label>
      <label htmlFor="sizeBottom_L">
      L
        <input
          onChange={onChange}
          type="radio"
          name="sizeBottom"
          id="sizeBottom_L"
          value="L"
          checked={sizeBottom === 'L'}
        />
      </label>

      <h3>And your Shoe size?</h3>
      <label htmlFor="sizeShoes_42">
        42
        <input
          onChange={onChange}
          type="radio"
          name="sizeShoes"
          id="sizeShoes_42"
          value="42"
          checked={sizeShoes === '42'}
        />
      </label>
      <label htmlFor="sizeShoes_43">
        43
        <input
          onChange={onChange}
          type="radio"
          name="sizeShoes"
          id="sizeShoes_43"
          value="43"
          checked={sizeShoes === '43'}
        />
      </label>
      <label htmlFor="sizeShoes_44">
        44
        <input
          onChange={onChange}
          type="radio"
          name="sizeShoes"
          id="sizeShoes_44"
          value="44"
          checked={sizeShoes === '44'}
        />
      </label>
      <label htmlFor="sizeShoes_45">
        45
        <input
          onChange={onChange}
          type="radio"
          name="sizeShoes"
          id="sizeShoes_45"
          value="45"
          checked={sizeShoes === '45'}
        />
      </label>
    </div>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UserInfo;
