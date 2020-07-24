import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { CardContainer } from './style';
import CommodityItem from './commodity.component';

import { getCommodity } from '../../redux/commodity/commodity.action';
import {
  selectCommodityItems,
  selectCommodityNav,
} from '../../redux/commodity/commodity.selectors';

const Commodity = ({
  getCommodity,
  commodityItems,
  nav: { nextPage, prevPage },
}) => {
  useEffect(() => {
    getCommodity();
  }, [getCommodity]);

  return (
    <Fragment>
      <CardContainer>
        {commodityItems.map((item) => (
          <CommodityItem key={item._id} item={item} />
        ))}
      </CardContainer>
      <div className='btnCount mt-1'>
        {prevPage !== null && (
          <input
            type='button'
            value='&#10094;&#10094; Previous'
            onClick={() => getCommodity(prevPage)}
          />
        )}
        {nextPage !== null && (
          <input
            type='button'
            value='Next &#10095;&#10095;'
            onClick={() => getCommodity(nextPage)}
          />
        )}
      </div>
    </Fragment>
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
  nav: selectCommodityNav,
});

export default connect(mapStateToProps, mapDispatchToProps)(Commodity);
