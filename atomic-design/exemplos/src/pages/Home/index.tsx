import React from "react";
import Field from "../../components/atoms/Field";

const Home: React.FC = () => {
  return (
    <Field type="text" name="search" label="Pesquisar: " labelPosition="top" />
  );
};

export default Home;
