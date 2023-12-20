import { Col, Container, Row } from "react-bootstrap";
import "../registerPage/RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <form>
      <Row className="justify-content-center g-0">
        <Col xs={10} md={8} className="d-flex flex-column align-items-center">
          <label htmlFor="userName">Nombre de usuario</label>
          <input type="text" />
        </Col>

        <Col xs={10} md={8} className="d-flex flex-column align-items-center">
          <label htmlFor="email">Correo</label>
          <input type="email" />
        </Col>

        <Col xs={10} md={8} className="d-flex flex-column align-items-center">
          <label htmlFor="password">Contraseña</label>
          <input type="password" />
        </Col>

        <Col xs={10} md={8} className="d-flex flex-column align-items-center">
          <label htmlFor="repeatPassword">Repetir contraseña</label>
          <input type="password" />
        </Col>

        <Col xs={10} md={8} className="d-flex flex-column align-items-center mt-3">
          <input type="submit" />
        </Col>

        
      </Row>
    </form>
  )
}

export default RegisterPage