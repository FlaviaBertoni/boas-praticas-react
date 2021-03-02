import { NavLink } from 'react-router-dom';
import { Container, LinkLabel } from './Navbar.styles';

const Navbar = () => {
  return (
    <Container forwardedAs="nav" width="100%" justifyContent="center">
      <ul>
        <li>
          <LinkLabel as={NavLink} activeClassName="selected" color="black" exact to="/" size="small">
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
