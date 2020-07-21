import { createSelector } from 'reselect';

const selectStall = (state) => state.stall;

export const selectStallItems = createSelector(
  [selectStall],
  (stall) => stall.stallItems
);
