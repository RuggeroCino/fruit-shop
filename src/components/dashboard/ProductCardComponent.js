import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

const ProductCardComponent = (props) => {
  return (
    <Card style={{flexGrow: 1, flexBasis: '40%', margin: 15}}>
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
      <CardText>
        {props.product.description}
      </CardText>
      <CardActions>
        <FlatButton label="Add" />
      </CardActions>
    </Card>
  );
};

ProductCardComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCardComponent;
