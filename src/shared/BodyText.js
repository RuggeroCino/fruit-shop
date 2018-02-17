import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './BodyText.css';

const BodyText = props => {
  return (
    <p
      className={classNames(
        'BodyText',
        { 'font-body': props.body },
        { 'font-small': props.small },
        { 'font-title': props.title },
        { 'font-bold': props.bold },
        { 'font-uppercase': props.uppercase },
        { 'font-clickable': props.clickable },
        props.className,
      )}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </p>
  );
};

BodyText.propTypes = {
  body: PropTypes.bool,
  small: PropTypes.bool,
  title: PropTypes.bool,
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  clickable: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default BodyText;
