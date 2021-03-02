import Box from '../../atoms/Box';
import Image from '../../atoms/Image';

import logo from '../../../assets/logo.svg';
import Navbar from '../../molecules/Navbar';
import LabeledButton from '../../molecules/LabeledButton';

const Header: React.FC = () => {
  return (
    <Box justifyContent="space-between" margin="1.25rem 0 0 0" alignItems="center">
      <h1>
        <Image imgPath={logo} alt="logo" width="9.75rem" height="1.75rem" />
      </h1>
      <Navbar />
      <Box>
        <LabeledButton size="small" variant="text">
          Registrar
        </LabeledButton>
        <LabeledButton size="small" variant="outlined">
          Entrar
        </LabeledButton>
      </Box>
    </Box>
  );
};

export default Header;
