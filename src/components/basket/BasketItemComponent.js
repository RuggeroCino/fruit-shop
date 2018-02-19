import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../../shared/FlexContainer';
import BodyText from '../../shared/BodyText';

const BasketItemComponent = (props) => {
  let product = props.product;

  return (
    <FlexContainer style={styles.BasketItem}>
      <img
        src={product.image}
        alt="Product"
        style={styles.ItemImage}
      />
      <FlexContainer
        grow={1}
        justify="space-between"
        align="center"
      >
        <BodyText>{product.name}</BodyText>
        <BodyText>Price: {product.price} CHF</BodyText>
        <BodyText>Quantity: {product.quantity}</BodyText>
        <BodyText>Total: {props.totalProductPrice} CHF</BodyText>
      </FlexContainer>
    </FlexContainer>
  );
};

BasketItemComponent.propTypes = {
  product: PropTypes.object.isRequired,
  totalProductPrice: PropTypes.number.isRequired,
};

const styles = {
  BasketItem: {
    width: '90%',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px',
  },
  ItemImage: {
    maxHeight: 60,
    width: 'auto',
    marginRight: 20,
  }
};

export default BasketItemComponent;
