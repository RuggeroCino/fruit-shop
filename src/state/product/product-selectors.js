import { Discounts } from '../../constants/Discounts';

export const getProductById = (state, id) => {
  return state.products
    .find(product => product.id === id);
};

export const getTotalProductPrice = (state, productId, quantity) => {
  let product = getProductById(state, productId);
  let totalProductPrice = 0;

  if (product.discount) {
    totalProductPrice = Discounts[product.discount].calculate(
      product.price,
      quantity,
    );
  } else {
    totalProductPrice = product.price * quantity;
  }

  return parseFloat(totalProductPrice.toFixed(2));
};
