import {
  getProductById,
  getTotalProductPrice,
} from './product';

export const getBasketProducts = (state) => {
  return state.basket.productIds.map(productId => {
    return {
      ...getProductById(state.products, productId),
      quantity: state.basket.items[productId],
    };
  });
};

export const getTotalBasketPrice = (state) => {
  return state.basket.productIds
    .reduce((accumulator, currentValue) => {
      let sumPrices = accumulator +
        getTotalProductPrice(
          state.products,
          currentValue,
          state.basket.items[currentValue]
        );

      return parseFloat(sumPrices.toFixed(2));
    }, 0);
};
