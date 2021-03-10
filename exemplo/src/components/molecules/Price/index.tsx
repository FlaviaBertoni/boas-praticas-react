import React from 'react';
import Label from '../../atoms/Label';
import Container from './style';

interface PricePros {
  value: number;
}

const Price: React.FC<PricePros> = ({ value }) => {
  const [intValue, decValue] = value.toString().split('.');

  return (
    <Container>
      <Label as="span" margin="0 4px 0 0" color="dark" size="small">
        R$
      </Label>
      <Label color="dark" size="large" weight="bold">
        {intValue}
      </Label>
      <Label color="dark" size="small">
        {decValue}
      </Label>
      <Label style={{ alignSelf: 'flex-end', position: 'relative', top: '-4px' }} color="dark" size="small">
        /dia
      </Label>
    </Container>
  );
};

export default Price;
