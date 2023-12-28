import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './../recupContraseña/RecuperarCont.modules.css'

    const RecuperarContraseña = () => {
  const urlBackend = import.meta.env.VITE_BASE_URL;
  const navigate =  useNavigate() 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data, e) => {
    e.preventDefault()
    try {
      const resp = await fetch(`${urlBackend}/login`, {
        method:'POST',
        body: JSON.stringify(data),
        headers:{
          "Content-Type": "application/json"
        }
      })
      const json = await resp.json()
      console.log(json);
      Swal.fire({
        title: 'Store',
        text: json.mensaje,
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      }).then(function() {
        navigate('/')
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  
    return (
        <Container className="d-flex justify-content-center mt-5 caja-login ">
        <form onSubmit={handleSubmit(onSubmit)} className="col-lg-5 col-12">
        <Row>
        <h2 className="fw-bold text-center pt-2 mb-4 ">Ingrese su Correo</h2>
          <div className="mb-1">
            <label htmlFor="email" className="form-label" >Correo</label><br />
            <input 
              className=" logiin" 
              placeholder="Ingrese su correo para recuperar su contraseña"
              required
              type="email" 
              name="email" 
              id="email" 
              {...register("email", { 
                required: "Debe ingresar un correo.",
                pattern:  {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Ingresa un correo válido."
                }
                })
              } 
            />
            {errors.email && <p className="error-icon">{errors.email.message}</p>}
            <br />
          </div>
          <Col md={4} xs={6} lg={6} className="d-grid gap-2 mx-auto">
            <button type="submit" className="btn mt-4 boton-login" >Enviar</button>
          </Col>
        </Row>
       </form>
      </Container>
        )
  }
  
  export default RecuperarContraseña;