const defaultState = {
  productIds: [],
  basket: {},
};

export const basket = (state = defaultState, action) => {
  let payload = action.payload;

  switch (action.type) {
    case 'basket.addProduct': {
      let productId = payload.productId;

      return {
        ...state,
        productIds: !state.basket[productId] ?
            [ ...state.productIds, productId] :
            state.productIds,
        basket: {
          ...state.basket,
          [productId]: (state.basket[productId] || 0) + payload.quantity
        },
      };
    }
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

export const getTotalBasketItems = (basketState) => {
  return basketState.productIds
    .reduce((accumulator, currentValue) => {
      return accumulator + basketState.basket[currentValue];
    }, 0);
};
