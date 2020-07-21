import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const StallItem = ({ item }) => {
  return (
    <tr className='priority-200'>
      <td>{item.productName}</td>
      <td>{item.buyingCost}</td>
      <td>{item.sellingCost}</td>
      <td>{item.unit_number}</td>
      <td>{item.costBuying}</td>
      <td>{item.costReturn}</td>
      <td>{moment(item.createdAt).format('DD/MM/YYYY')}</td>
      <td>{item.status}</td>
      <td></td>
    </tr>
  );
};

StallItem.propTypes = {
  item: PropTypes.object,
};

export default StallItem;
