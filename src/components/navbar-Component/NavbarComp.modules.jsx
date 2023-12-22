import { Container, Nav, Navbar } from 'react-bootstrap';
import '../navbar-Component/Navbar.modules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  return (
      <Navbar expand="lg" className="Navbar bg-tertiary" data-bs-theme="dark">
      <Container className='opacity'>
        <img className="img-Logo" src="https://trello.com/1/cards/656b68d038e71faa56cd0e8b/attachments/656b68fc26b01dc1723afe97/previews/656b68fd26b01dc1723afed6/download/klipartz.com.png" alt="imgLogo" href="#" ></img>
        <Navbar.Brand href="/" className='color-stor'>Store Apple</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='color-toggle' />
        <Navbar.Collapse className='opacity'>
          <Nav className="t-1 ms-auto">
            <Nav.Link className='colorSS' href="#destacado">Destacado</Nav.Link>
            <Nav.Link className='colorSS' href="#favoritos">Favoritos</Nav.Link>
            <Nav.Link className='colorSS' href="#contacto">Contacto</Nav.Link>
          </Nav>

          <Nav className='buscar'>
            <input type="text" placeholder='Buscar' required />
            <FontAwesomeIcon className='btn-1' data-bs-toggle='modal' icon={faMagnifyingGlass}/>
          </Nav>

          <Nav className='ms-auto'>
            <Nav.Link className='btn  colorSS'> <Link to="*">  Iniciar Sesión </Link> </Nav.Link>
            <Nav.Link className='btn  colorSS'> <Link to="*"> Registrarse </Link> </Nav.Link>
          </Nav>

          <a href="/Error">
            <FontAwesomeIcon className='info-2' icon={faCircleInfo}/>
          </a>
          <a href="#">
            <FontAwesomeIcon className='info-2' icon={faCartShopping}/>
          </a>
          
          {/* <DropDownProfile /> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;