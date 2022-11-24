import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Modal from "../modal/modal";
//import useModal from '../hooks/useModal';
import Row from 'react-bootstrap/Row';
import './login.css'

const Login = ({isOpenModal,closeModal}) => {
    
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
          <form onSubmit={ingreso}>
            <Row>
              <input 
              className="email"
              name="usuario"
              placeholder='Ingresa tu usuario'
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
              <a className="forgot" href="http://localhost:3000/"> Olvide mi contraseña</a>
            </Row>
            <Row>
              
              <button className="ingresar" type="submit">
                Ingresar
              </button>
            </Row>
            <Row>
              <a className="register" href="http://localhost:3000/"> No tengo cuenta. Quiero registrarme</a>
            </Row>
          </form>
        </Modal>
      </Container>    
  )
}

export default Login