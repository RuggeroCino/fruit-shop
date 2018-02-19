import React from 'react';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';

import FlexContainer from '../../shared/FlexContainer';
import BodyText from '../../shared/BodyText';

import discountImg from '../../assets/img/discount.png';
import deleteIcon from '../../assets/icons/delete-black.svg';

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
        <BodyText style={styles.ItemColumn}>
          {product.name}
        </BodyText>
        <BodyText style={styles.ItemColumn}>
          Price: {product.price} CHF
        </BodyText>
        <BodyText style={styles.ItemColumn}>
          Quantity: {product.quantity}
        </BodyText>
        <BodyText style={styles.ItemColumn}>
          Total: {props.totalProductPrice} CHF
        </BodyText>
        {product.discount &&
          <img
            src={discountImg}
            style={styles.DiscountImage}
            alt="Discount"
          />
        }
        <IconButton onClick={() => props.onRemoveClick(product.id)}>
          <img
            src={deleteIcon}
            alt="Delete"
          />
        </IconButton>
      </FlexContainer>
    </FlexContainer>
  );
};

BasketItemComponent.propTypes = {
  product: PropTypes.object.isRequired,
  totalProductPrice: PropTypes.number.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

const styles = {
  BasketItem: {
    position: 'relative',
    width: '80%',
    padding: '10px 60px 10px 10px',
    marginTop: 10,
    marginBottom: 10,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px',
  },
  ItemImage: {
    maxHeight: 60,
    width: 'auto',
    marginRight: 20,
  },
  ItemColumn: {
    flexGrow: 1,
    width: '100%',
  },
  DiscountImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 60,
  },
};

export default BasketItemComponent;
