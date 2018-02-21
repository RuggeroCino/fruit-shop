export const addProduct = (productId, quantity) => {
  return { type: 'basket.addProduct', payload: { productId, quantity } };
};

export const removeProduct = (productId) => {
  return { type: 'basket.removeProduct', payload: productId };
};
