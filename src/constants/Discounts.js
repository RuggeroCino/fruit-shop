export const Discounts = {
  THREE_FOR_TWO: {
    description: 'Three for the price of two',
    calculate: (price, quantity) => {
      return (quantity - (parseInt(quantity / 3, 10))) * price;
    },
  },
};
