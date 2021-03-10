import React from 'react';
import LabeledButton from '../../components/molecules/LabeledButton';
import Price from '../../components/molecules/Price';

const Home: React.FC = () => {
  return (
    <>
      <Price value={52} />
      <LabeledButton size="small" variant="text">
        Registrar
      </LabeledButton>
      <LabeledButton size="small" variant="outlined">
        Entrar
      </LabeledButton>
      <LabeledButton size="large" variant="contained">
        Alugar
      </LabeledButton>
    </>
  );
};

export default Home;
