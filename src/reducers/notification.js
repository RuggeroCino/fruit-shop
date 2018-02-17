const defaultState = {
  show: false,
  message: null
};

export const notification = (state = defaultState, action) => {
  let payload = action.payload;

  switch (action.type) {
    case 'notification.showNotification':
      return {
        ...state,
        show: true,
        message: payload,
      };
    case 'notification.hideNotification':
      return {
        ...state,
        show: false,
        message: '',
      };
    default:
      return state;
  }
};
