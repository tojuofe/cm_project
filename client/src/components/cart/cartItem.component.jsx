import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCommodityItems } from '../../redux/commodity/commodity.selectors';
import { removeCart, addUnit } from '../../redux/cart/cart.action';

const CartItem = ({ item, removeCart, commodityItems, addUnit }) => {
  const unitID = commodityItems.map((item) => item._id);

  const onUnit = () => {
    removeCart(item);

    if (unitID.includes(item.id)) {
      addUnit({
        id: item.id,
        unit_number: item.productUnit,
      });
    }
  };
  return (
    <Fragment>
      <tr className='priority-200'>
        <td data-label='Image'>
          <img src={item.img} alt='' />
        </td>
        <td data-label='Product Name'>{item.productName}</td>
        <td data-label='Unit Number'>{item.unit_number}</td>
        <td data-label='Buying Price'>{item.costBuying}</td>
        <td data-label='Selling Price'>{item.costReturn}</td>
        <td>
          <button className='edit' onClick={onUnit}>
            <i className='fas fa-times'></i>
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  commodityItems: selectCommodityItems,
});

const mapDispatchToProps = (dispatch) => ({
  removeCart: (item) => dispatch(removeCart(item)),
  addUnit: (item) => dispatch(addUnit(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
