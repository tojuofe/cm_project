import { createSelector } from 'reselect';

const selectCommodity = (state) => state.commodity;

export const selectCommodityItems = createSelector(
  [selectCommodity],
  (commodity) => commodity.commodityItems.docs
);

export const selectCommodityNav = createSelector(
  [selectCommodity],
  (commodity) => commodity.commodityItems
);

export const selectCommodityItem = createSelector(
  [selectCommodity],
  (commodity) => commodity.commodityItem
);

export const selectCurrentCommodity = createSelector(
  [selectCommodity],
  (item) => item.current
);
