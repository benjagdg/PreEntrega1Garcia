import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPercent, faAnglesRight, faBoxOpen} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Wabit Logo"
            src={Logo}
            width="50"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Wabit Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/"><FontAwesomeIcon icon={faHouse} /> Inicio</Nav.Link>
            <NavDropdown title={
                <span><FontAwesomeIcon icon={faBoxOpen} /> Productos</span>
              } id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <FontAwesomeIcon icon={faAnglesRight} /> Routers / WiFi
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <FontAwesomeIcon icon={faAnglesRight} /> Gaming Zone
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <FontAwesomeIcon icon={faAnglesRight} /> Electrónica
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <FontAwesomeIcon icon={faAnglesRight} /> IoT
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/"><FontAwesomeIcon icon={faPercent} /> Ofertas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar