import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import FlexContainer from '../../shared/FlexContainer';
import Header from '../../shared/Header';
import BodyText from '../../shared/BodyText';

import BasketItemContainer from './BasketItemContainer';

const BasketComponent = (props) => {
  return (
    <FlexContainer
      direction="column"
      grow={1}
      style={{marginBottom: 40}}
    >
      <Header totalBasketItems={props.totalBasketItems}/>
      <FlexContainer
        padding={true}
        maxWidth={true}
        direction="column"
        align="flex-start"
        style={{width: '100%'}}
      >
        <BodyText title={true}>
          Your basket
        </BodyText>
        {props.basketProducts.map(product =>
          <BasketItemContainer
            key={product.id}
            product={product}
            onRemoveClick={props.onRemoveClick}
          />
        )}
        <BodyText bold={true}>
          Total: {props.totalBasketPrice} CHF
        </BodyText>
        <RaisedButton
          label="Back"
          primary={true}
          onClick={props.onBackClick}
          style={{marginTop: 30}}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

BasketComponent.propTypes = {
  totalBasketItems: PropTypes.number.isRequired,
  basketProducts: PropTypes.array.isRequired,
  totalBasketPrice: PropTypes.number.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default BasketComponent;
