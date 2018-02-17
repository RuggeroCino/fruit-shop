import React from 'react';
import { TextField as TextFieldUI } from 'material-ui';
import PropTypes from 'prop-types';

import './TextField.css';

const TextField = (props) => {
  return (
    <TextFieldUI
      type={props.type}
      hintText={props.hint}
      value={props.value ? props.value : ''}
      onChange={props.onChange}
      min={props.min}
      style={props.style}
    />
  );
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hint: PropTypes.string,
  value: PropTypes.any,
  min: PropTypes.number,
  style: PropTypes.object,
};



export default TextField;
