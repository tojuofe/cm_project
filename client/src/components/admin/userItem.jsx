import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
  return (
    <tr className='priority-200'>
      <td data-label='First Name'>{user.first_name}</td>
      <td data-label='Last Name'>{user.last_name}</td>
      <td data-label='Email '>{user.email}</td>
      <td data-label='Phone Number'>{user.phone}</td>
      <td></td>
    </tr>
  );
};

UserItem.propTypes = {
  user: PropTypes.object,
};

export default UserItem;
