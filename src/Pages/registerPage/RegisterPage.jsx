import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../registerPage/RegisterPage.module.css";
import axios from "axios";

const RegisterPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm()

  const validateEmail = async (email) => {
    const { data } = await axios.get(`http://127.0.0.1:8080/API/users/findByEmail?email=${email}`)
    return data.email
  }

  const submitForm = handleSubmit( async (data) => {
    try {
      const emailResp = await validateEmail(data.email);
      if (data.email === emailResp) {
        alert('true')
      } else {
        alert('false')
      }
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <form onSubmit={submitForm}>
      <Row className="justify-content-center g-0">

        <Col xs={10} md={8} className="d-flex flex-column align-items-center">
          <label htmlFor="userName">Nombre de usuario</label>
          <input type="text"
            {... register("userName",
            {
              required: {
                value: true,
                message: "Este campo es requerido"
              },
              minLength: {
                value: 4,
                message: "Este campo requiere al menos 4 caracteres"
              },
              maxLength: {
                value: 20,
                message: "Este campo esta limitado a 20 caracteres"
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Este campo no puede recibir caracteres numericos',
              },
            })}
          />
          {
            errors.userName && <span>{errors.userName.message}</span>
          }
        </Col>

        <Col xs={10} md={8} className="d-flex flex-column align-items-center">
          <label htmlFor="email">Correo</label>
          <input type="email"
            {... register("email",
            {
              required: {
                value: true,
                message: "Este campo es requerido"
              },
              pattern: {
                value: /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/,
                message: "Ingrese un correo valido"
              }
            })}
          />
          {
            errors.email && <span>{errors.email.message}</span>
          }
        </Col>

        <Col xs={10} md={8} className="d-flex flex-column align-items-center">
          <label htmlFor="password">Contraseña</label>
          <input type="password"
            {... register("password",
            {
              required: {
                value: true,
                message: "Este campo es requerido"
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,
                message: "La contraseña no cumple los requisitos"
              }
            })}
          />
          {
            errors.password && <span>{errors.password.message}</span>
          }
          <p>
            La contraseña debe tener al menos.<br/>
            Una letra mayuscula.<br/> 
            Una letra minuscula.<br/>
            Un caracter numerico.
          </p>
        </Col>

        <Col xs={10} md={8} className="d-flex flex-column align-items-center">
          <label htmlFor="repeatPassword">Repetir contraseña</label>
          <input type="password"
            {... register("repeatPassword", 
            {
              required: {
                value: true,
                message: "Este campo es requerido"
              },
              validate: value => value === watch('password') || "Las contraseñas no coinciden"
            })}
          />
          {
            errors.repeatPassword && <span>{errors.repeatPassword.message}</span>
          }
        </Col>

        <Col xs={10} md={8} className="d-flex flex-column align-items-center">
          <label htmlFor="termsAndCons">Acepto terminos y condiciones</label>
          <input type="checkbox"
            {... register("termsAndCons",
            {
              required: {
                value: true,
                message: "Acepte los terminos y condiciones para continuar"
              },
            })}
          />
          {
            errors.termsAndCons && <span>{errors.termsAndCons.message}</span>
          }
        </Col>

        <Col xs={10} md={8} className="d-flex flex-column align-items-center mt-3">
          <input type="submit" />
        </Col>

        
      </Row>

    </form>
  )
}

export default RegisterPage