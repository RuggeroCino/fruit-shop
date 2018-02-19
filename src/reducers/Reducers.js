import {
  products,
  getProductById,
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
