import React from 'react';
import Label from '../../components/atoms/Label';

import { Container } from './styled';

const Home: React.FC = () => {
  return (
    <Container>
      <Label size="large">
        Clique em <strong>Catálogo</strong> e selecione o veículo do seus sonhos.
      </Label>
    </Container>
  );
};

export default Home;
