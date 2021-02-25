import React from 'react';
import LabeledButton from '../../components/molecules/LabeledButton';

const Home: React.FC = () => {
  return (
    <>
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
