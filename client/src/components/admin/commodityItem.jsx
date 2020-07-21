import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCurrentCommodity } from '../../redux/commodity/commodity.action';

const CommodityItem = ({ item, getCurrentCommodity, history }) => {
  const editCommodity = () => {
    getCurrentCommodity(item);

    history.push('/admin/edit');
  };

  return (
    <tr className='priority-200'>
      <td>{item.product_name}</td>
      <td>{item.unit_number}</td>
      <td>{item.farm_name}</td>
      <td>{item.buying_price}</td>
      <td>{item.selling_price}</td>
      <td>{item.duration}</td>
      <td>
        <button className='edit' onClick={editCommodity}>
          <i className='fa fa-edit'></i>
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCurrentCommodity: (item) => dispatch(getCurrentCommodity(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(CommodityItem));
