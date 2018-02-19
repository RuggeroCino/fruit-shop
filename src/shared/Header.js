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
            label={props.basketItems > 0 ? props.basketItems : ''}
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
  basketItems: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default Header;
