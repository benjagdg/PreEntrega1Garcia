import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { getCategories } from '../../services/productsService';
import { useState, useEffect } from 'react';
import NavBarCategories from './NavBarCategories';

const NavBar = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect( () => {
    getCategories().then(res => {
      setCategoriesData(res.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Link to="/" className='navbar-brand'>
          <img
            alt="Wabit Logo"
            src={Logo}
            width="50"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Wabit Store
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavBarCategories categoriesData={categoriesData} />
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar