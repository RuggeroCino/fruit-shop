import { Discounts } from '../constants/Discounts';

const defaultState = {
  isFetchingProducts: false,
  products: [],
  getProductsError: null,
};

export const products = (state = defaultState, action) => {
  let payload = action.payload;

  switch (action.type) {
    case 'product.getProductsRequest':
      return {
        ...state,
        isFetchingProducts: true,
      };
    case 'product.getProductsSuccess':
      return {
        ...state,
        products: payload,
        isFetchingProducts: false,
      };
    case 'product.getProductsFailure':
      return {
        ...state,
        getProductsError: payload,
        isFetchingProducts: false,
      };
    default:
      return state;
  }
};

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
