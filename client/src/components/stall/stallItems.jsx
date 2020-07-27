import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const StallItem = ({ item }) => {
  return (
    <tr className='priority-200'>
      <td data-label='Product Name'>{item.productName}</td>
      <td data-label='Buying Price'>{item.buyingCost}</td>
      <td data-label='Selling Price'>{item.sellingCost}</td>
      <td data-label='Number of Units'>{item.unit_number}</td>
      <td data-label='Inv'>{item.costBuying}</td>
      <td data-label='Return'>{item.costReturn}</td>
      <td data-label='Date Bought'>
        {moment(item.createdAt).format('DD/MM/YYYY')}
      </td>
      <td data-label='Status'>{item.status}</td>
      <td></td>
    </tr>
  );
};

StallItem.propTypes = {
  item: PropTypes.object,
};

export default StallItem;
