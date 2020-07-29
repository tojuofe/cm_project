import React from 'react';
import moment from 'moment';

const InvestorViewItem = ({ stall }) => (
  <tr className='priority-200'>
    <td data-label='Product Name'>{stall.productName}</td>
    <td data-label='Buying Price'>{stall.buyingCost}</td>
    <td data-label='Selling Price'>{stall.sellingCost}</td>
    <td data-label='Return'>{stall.costReturn}</td>
    <td data-label='Unit Number'>{stall.unit_number}</td>
    <td data-label='Date Bought'>
      {moment(stall.createdAt).format('DD/MM/YYYY')}
    </td>
    <td data-label='Status'>{stall.status}</td>
    <td></td>
  </tr>
);

export default InvestorViewItem;
