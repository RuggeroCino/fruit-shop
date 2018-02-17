import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FlexContainer.css';

const FlexContainer = props => {
  return (
    <div
      className={classNames(
        'FlexContainer',
        props.direction && `${props.direction}-container`,
        props.grow && `grow-container-${props.grow}`,
        props.justify && `justify-${props.justify}`,
        props.align && `align-${props.align}`,
        props.basis && `basis-${props.basis}`,
        props.wrap && `flex-${props.wrap}`,
        props.padding && 'padding-container',
        props.maxWidth && 'max-width-container',
        props.className,
      )}
      style={props.style}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </div>
  );
};

FlexContainer.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.string,
  grow: PropTypes.number,
  justify: PropTypes.string,
  align: PropTypes.string,
  basis: PropTypes.number,
  wrap: PropTypes.string,
  padding: PropTypes.bool,
  maxWidth: PropTypes.bool,
  mainContainer: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default FlexContainer;
