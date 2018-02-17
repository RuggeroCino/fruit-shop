const defaultState = {
  basket: {},
};

export const basket = (state = defaultState, action) => {
  let payload = action.payload;

  switch (action.type) {
    case 'basket.addProduct':
      return {
        ...state,
        basket: {
          ...state.basket,
          [payload.productId]: (state.basket[payload.productId] || 0) + payload.quantity
        }
      };
    case 'basket.removeProduct':
      return {
        ...state,
        basket: {
          ...state.basket,
          [payload.productId]: 0,
        }
      };
    default:
      return state;
  }
};

