const defaultState = {
  productIds: [],
  items: {},
};

export const basket = (state = defaultState, action) => {
  let payload = action.payload;

  switch (action.type) {
    case 'basket.addProduct': {
      let productId = payload.productId;

      return {
        ...state,
        productIds: !state.items[productId] ?
            [ ...state.productIds, productId] :
            state.productIds,
        items: {
          ...state.items,
          [productId]: (state.items[productId] || 0) + payload.quantity
        },
      };
    }
    case 'basket.removeProduct':
      return {
        ...state,
        items: {
          ...state.items,
          [payload.productId]: 0,
        }
      };
    default:
      return state;
  }
};

export const getTotalBasketItems = (state) => {
  return state.productIds
    .reduce((accumulator, currentValue) => {
      return accumulator + state.basket[currentValue];
    }, 0);
};
