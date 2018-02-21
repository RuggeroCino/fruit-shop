export const getTotalBasketItems = (state) => {
  return state.productIds
    .reduce((accumulator, currentValue) => {
      return accumulator + state.items[currentValue];
    }, 0);
};
