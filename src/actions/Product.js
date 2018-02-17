import { fruitShopService } from '../services/FruitShopService';

export const getProducts = () => dispatch => {
  dispatch({ type: 'product.getProductsRequest' });
  fruitShopService.getProducts()
    .then(res => dispatch({ type: 'product.getProductsSuccess', payload: res }))
    .catch(err => dispatch({ type: 'product.getProductsFailure', payload: err }));
};
