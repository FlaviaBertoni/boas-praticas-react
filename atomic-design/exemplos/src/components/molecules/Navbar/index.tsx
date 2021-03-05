import { NavLink } from 'react-router-dom';
import { Container, LinkLabel } from './Navbar.styles';

const Navbar = () => {
  return (
    <Container forwardedAs="nav" justifyContent="center">
      <ul>
        <li>
          <LinkLabel as={NavLink} activeClassName="selected" color="black" to="/home" size="small">
            Home
          </LinkLabel>
        </li>
        <li>
          <LinkLabel as={NavLink} activeClassName="selected" color="black" to="/vehicle-catalog">
            Catálogo
          </LinkLabel>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
