import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

import FlexContainer from '../../shared/FlexContainer';

const ProductsComponent = (props) => {
  return (
    <FlexContainer
      direction="row"
      wrap="wrap"
      grow={1}
      style={{maxWidth: 800}}
    >
      {props.products.map(product => (
        <Card key={product.id} style={{flexGrow: 1, flexBasis: '40%', margin: 15}}>
        <CardMedia>
          <img
            src={product.image}
            alt="Product"
            style={{maxWidth: 200}}
          />
        </CardMedia>
        <CardTitle
          title={product.name}
          subtitle={product.type}
        />
        <CardText>
          {product.description}
        </CardText>
        <CardActions>
          <FlatButton label="Add" />
          <FlatButton label="Remove" />
        </CardActions>
      </Card>
      ))
      }
    </FlexContainer>
  );
};

ProductsComponent.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsComponent;
