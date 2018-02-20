import {
  products,
  getProductById,
  getTotalProductPrice,
} from './products';
import { basket } from './basket';
import { notification } from './notification';

export const reducers = {
  products,
  basket,
  notification,
};

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
