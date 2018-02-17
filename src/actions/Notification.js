export const showNotification = message => dispatch => {
  dispatch({
    type: 'notification.showNotification',
    payload: message
  });
  setTimeout(() => {
    dispatch(hideNotification());
  }, 4000);
};

export const hideNotification = () => {
  return {
    type: 'notification.hideNotification',
  };
};
