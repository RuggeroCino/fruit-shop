import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

import FlexContainer from '../../shared/FlexContainer';
import BodyText from '../../shared/BodyText';

const ProductsComponent = (props) => {
  return (
    <FlexContainer direction="column" style={{width: '100%'}}>
      <BodyText title={true}>
        Products list
      </BodyText>
      <FlexContainer direction="row" wrap="wrap">
      {props.products.map(product => (
        <Card key={product.id} style={{flexGrow: 1, flexBasis: '40%', margin: 15}}>
        <CardMedia>
          <img
            src={product.image}
            alt="Product"
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
        </CardActions>
      </Card>
      ))
      }
      </FlexContainer>
    </FlexContainer>
  );
};

ProductsComponent.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsComponent;
