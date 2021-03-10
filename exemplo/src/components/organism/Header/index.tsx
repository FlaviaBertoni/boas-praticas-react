import Box from '../../atoms/Box';
import Image from '../../atoms/Image';

import logo from '../../../assets/logo.svg';
import Navbar from '../../molecules/Navbar';
import { Link } from 'react-router-dom';
import Avatar from '../../molecules/Avatar';
import useAuth from '../../../hooks/useAuth';

const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <Box justifyContent="space-between" margin="1.25rem 0 0 0" alignItems="center">
      <h1>
        <Link to="/home">
          <Image imgPath={logo} alt="logo" width="9.75rem" height="1.75rem" />
        </Link>
      </h1>
      <Navbar />
      <Box>
        <Avatar avatarPath={user?.avatar} name={user?.name ?? ''} />
      </Box>
    </Box>
  );
};

export default Header;
