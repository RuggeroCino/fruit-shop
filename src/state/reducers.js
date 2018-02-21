import { products } from './product/product-reducers';
import { basket } from './basket/basket-reducers';
import { notification } from './notification/notification-reducers';

// Reducers
export const reducers = {
  products,
  basket,
  notification,
};

// Selectors
export {
  getBasketProducts,
  getTotalBasketPrice,
} from './reducers-selectors';
