import { configService } from '../../services/ConfigService';

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
        products: payload.map(product => {
          return {
            ...product,
            image: configService.getApiServer() + product.image,
          };
        }),
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
