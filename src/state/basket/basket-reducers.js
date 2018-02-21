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
    case 'basket.removeProduct': {
      let productId = payload;

      let newState = { ...state };
      let productIndex = newState.productIds.indexOf(productId);

      newState.productIds.splice(productIndex, 1);
      delete newState.items[productId];

      return newState;
    }
    default:
      return state;
  }
};
