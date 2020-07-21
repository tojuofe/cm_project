import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody, NotifyTag, ProductName } from './style';
import { getSingleCommodity } from '../../redux/commodity/commodity.action';

const Commodity = ({ item, getSingleCommodity, history }) => {
  const currentProduct = () => {
    getSingleCommodity(item._id);

    history.push(`/commodity/${item.product_name.split(' ').join('')}`);
  };

  return (
    <Card onClick={currentProduct}>
      <CardHeader src={item.img} />
      <ProductName>
        <h3>{item.product_name}</h3>
        <h5>{item.unit_number} units left</h5>
      </ProductName>
      <CardBody>
        <NotifyTag>Now Selling</NotifyTag>
        <h4>{item.farm_name}</h4>
        <p>Buying Price: {item.buying_price}</p>
        <p>Selling Price: {item.selling_price}</p>
        <p>Duration: {item.duration}</p>
      </CardBody>
    </Card>
  );
};

Commodity.propTypes = {
  item: PropTypes.object,
  getCurrentCommodity: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getSingleCommodity: (item) => dispatch(getSingleCommodity(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(Commodity));
