import { createSelector } from 'reselect';

const selectWallet = (state) => state.wallet;

export const selectWalletItem = createSelector(
  [selectWallet],
  (wallet) => wallet.walletItem
);

// export const selectWalletItemCount = createSelector(
//   [selectWalletItem],
//   (walletItems) =>
//     walletItems.reduce(
//       (accumulatedAmount, walletItem) => accumulatedAmount + +walletItem.amount,
//       0
//     )
// );
