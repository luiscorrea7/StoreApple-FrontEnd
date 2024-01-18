import { useState } from 'react';
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import '../navbarComponent/Navbar.modules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavbarComp = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Nav.Link className='btn  colorSS'> <Link to="/login">  Iniciar Sesión </Link> </Nav.Link>
            <Nav.Link className='btn  colorSS'> <Link to="/register"> Registrarse </Link> </Nav.Link>
            {/* <Nav.Link className='btn  colorSS'> <Link to="*"> Cerrar Sesión </Link> </Nav.Link> */}
          </Nav>

          {/* <a href="/Error">
            <FontAwesomeIcon className='info-2' icon={faCircleInfo}/>
          </a> */}

          <Button variant="primary" onClick={handleShow}>
            <FontAwesomeIcon className='a-p info-2' icon={faCircleInfo}/>
          </Button>

          <Modal show={show} onHide={handleClose} animation={false} className='colorSS'>
            <Modal.Header closeButton>
              <Modal.Title> Ayuda! </Modal.Title>
            </Modal.Header>
              <Modal.Body>
                <p>Si necesitas Ayuda por algún Error de la Pagina te puedes Comunicar con Nuestro Soporte.</p>
                <p>Através de Nuestro Correo - "storeapple@outlook.ar"</p>
                <p>Si te Problemas es mas Complejo podrias Comunicarte al</p>
                <p>+59 983-4562355</p>
              </Modal.Body>
            <Modal.Footer>
              <Button className='colorSS info-2' variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              {/* <Button variant="primary" onClick={handleClose}>
                Continuar
              </Button> */}
            </Modal.Footer>
          </Modal>

          {/* <a href="#">
            <FontAwesomeIcon className='info-2' icon={faCartShopping}/>
          </a> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;