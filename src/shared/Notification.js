import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Snackbar from 'material-ui/Snackbar';

const Notification = (props) => {
  return (
    <Snackbar
      open={props.notification.show}
      message={props.notification.message || ''}
    />
  );
};

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
};

export default connect(
  (state) => ({ notification: state.notification })
)(Notification);
