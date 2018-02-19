import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import FlexContainer from './FlexContainer';
import BodyText from './BodyText';

import shoppingCardIcon from '../assets/icons/shopping-cart-white.svg';

import './Header.css';

const Header = (props) => {
  return (
    <FlexContainer
      className="Header"
    >
      <FlexContainer
        direction="column"
        maxWidth={true}
        padding={true}
        grow={1}
      >
        <FlexContainer
          grow={1}
          justify="flex-start"
        >
          <BodyText title={true}>
            React / Redux Fruit Shop Example
          </BodyText>
        </FlexContainer>
        <FlexContainer
          grow={1}
          align="center"
          justify="flex-end"
        >
          <RaisedButton
            label={props.totalBasketItems > 0 ? props.totalBasketItems : ''}
            labelPosition="before"
            primary={true}
            className="Header-shopping-cart-button"
            onClick={props.onCartClick}
            icon={<img
              src={shoppingCardIcon}
              alt="Shopping cart"
              className="Header-shopping-cart-logo"
            />}
          />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

Header.propTypes = {
  totalBasketItems: PropTypes.number.isRequired,
  onCartClick: PropTypes.func,
};

export default Header;
