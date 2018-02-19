import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { Discounts } from '../../constants/Discounts';

import TextField from '../../shared/TextField';

const getProductPrice = (product) => {
  let price = `Price: ${product.price} CHF`;
  if (product.discount) {
    price = price.concat(` (${Discounts[product.discount].description})`);
  }

  return price;
};

const ProductCardComponent = (props) => {
  return (
    <Card style={styles.ProductCard}>
      <CardMedia>
        <img
          src={props.product.image}
          alt="Product"
        />
      </CardMedia>
      <CardTitle
        title={props.product.name}
        subtitle={props.product.type}
      />
      <CardText>{props.product.description}</CardText>
      <CardText>{getProductPrice(props.product)}</CardText>
      <CardActions>
        <TextField
          type="number"
          hint="Qty"
          min={0}
          value={props.quantity}
          onChange={props.onQuantityChange}
          style={styles.QuantityInput}
        />
        <RaisedButton
          primary={true}
          label="Add to cart"
          onClick={() => props.onAddClick(props.product, props.quantity)}
        />
      </CardActions>
    </Card>
  );
};

ProductCardComponent.propTypes = {
  product: PropTypes.object.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  quantity: PropTypes.number,
};

const styles = {
  ProductCard: {
    flexGrow: 1,
    flexBasis: '40%',
    margin: 15,
  },
  QuantityInput: {
    marginRight: 10,
    marginLeft: 10,
    width: 40,
  }
};

export default ProductCardComponent;
