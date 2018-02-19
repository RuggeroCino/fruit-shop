import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../../shared/FlexContainer';
import Header from '../../shared/Header';
import BodyText from '../../shared/BodyText';

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
        align="center"
        style={{width: '100%'}}
      >
        <BodyText title={true}>
          Your basket
        </BodyText>
      </FlexContainer>
    </FlexContainer>
  );
};

BasketComponent.propTypes = {
  totalBasketItems: PropTypes.number.isRequired,
  basketProducts: PropTypes.array.isRequired,
};

export default BasketComponent;
