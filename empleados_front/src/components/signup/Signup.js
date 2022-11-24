import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Modal from "../modal/modal";
//import useModal from '../hooks/useModal';
import Row from 'react-bootstrap/Row';
import './signUp.css'

const SignUp = ({isOpenModal,closeModal}) => {
    
    const ingreso = (e) =>{
      e.preventDefault();
      console.log("Ingresando")
    }

    const manejadorChange = async (e) =>{
      var {usuario,password} = document.forms[0];
      console.log(usuario.value +  " - " + password.value)
    }


  return (
    <Container>
        <Modal 
        isOpen={isOpenModal}
        closeModal={closeModal}>
          <h2 className='titulo'>Tec Des</h2>
          <p className='titulo subtitulo'>Formulario de registro</p>
          <form onSubmit={ingreso}>
            <Row>
              <input 
              className="label-info"
              name="nombre"
              placeholder='Ingresa tu nombre'
              onChange={manejadorChange}
              />
            </Row>
            <br></br>
            <Row>
              <input 
              className="label-info"
              name="apellido"
              placeholder='Ingresa tu apellido'
              onChange={manejadorChange}
              />
            </Row>
            <br></br>
            <Row>
              <input 
              className="label-info"
              name="usuario"
              placeholder='Ingresa tu email'
              onChange={manejadorChange}
              />
            </Row>
            <br></br>
            <Row>
              <input
              className="password"
              type="password"
              name="password"
              placeholder='Ingresa tu contraseña'
              onChange={manejadorChange}
              />
            </Row>
            <br></br>
            <Row>
              <input
              className="password"
              type="password"
              name="password"
              placeholder='Repite tu contraseña'
              onChange={manejadorChange}
              />
            </Row>
            <br></br>
            <Row>
              <button className="ingresar" type="submit">
                Registrar
              </button>
            </Row>
            <Row>
              <a className="register" href="http://localhost:3000/">Ya tengo una cuenta </a>
            </Row>
          </form>
        </Modal>
      </Container>    
  )
}

export default SignUp