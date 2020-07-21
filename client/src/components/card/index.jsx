import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { CardContainer } from './style';
import CommodityItem from './commodity.component';

import { getCommodity } from '../../redux/commodity/commodity.action';
import { selectCommodityItems } from '../../redux/commodity/commodity.selectors';

const Commodity = ({ getCommodity, commodityItems }) => {
  useEffect(() => {
    getCommodity();
  }, [getCommodity]);

  return (
    <CardContainer>
      {commodityItems.map((item) => (
        <CommodityItem key={item._id} item={item} />
      ))}
    </CardContainer>
  );
};

Commodity.propTypes = {
  getCommodity: PropTypes.func,
  commodityItems: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => ({
  getCommodity: () => dispatch(getCommodity()),
});

const mapStateToProps = createStructuredSelector({
  commodityItems: selectCommodityItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Commodity);
