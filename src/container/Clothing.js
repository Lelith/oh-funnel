import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = (props) => {
  const { userInfo, onChange } = props;
  console.log(onChange);
  const {

  } = userInfo;

  return (
    <div>
    </div>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UserInfo;
