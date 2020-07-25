import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { CardContainer } from './style';
import CommodityItem from './commodity.component';

import { getCommodity } from '../../redux/commodity/commodity.action';
import { selectCommodityItems } from '../../redux/commodity/commodity.selectors';

const Commodity = ({
  getCommodity,
  commodityItems: { docs, prevPage, nextPage },
}) => {
  useEffect(() => {
    getCommodity();
  }, [getCommodity]);

  return (
    <Fragment>
      <CardContainer>
        {docs.map((item) => (
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
  commodityItems: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  getCommodity: (count) => dispatch(getCommodity(count)),
});

const mapStateToProps = createStructuredSelector({
  commodityItems: selectCommodityItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Commodity);
