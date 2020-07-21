import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
  return (
    <tr className='priority-200'>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td></td>
    </tr>
  );
};

UserItem.propTypes = {
  user: PropTypes.object,
};

export default UserItem;
