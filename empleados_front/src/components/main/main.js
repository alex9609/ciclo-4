import Container from "react-bootstrap/Container";
import AudifonosLogitechG733 from "../../img/AudifonosLogitechG733.png";
import MouseGamerM601 from "../../img/MouseGamerM601.png";
import IpadPro2daGen from "../../img/IpadPro2daGen.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";

const Main = () => {
  return (
    <Container className="main">
      <Row>
        <Col className="item-uno">
          <h3  className="title-item">Mouse Gamer M601</h3>
          <img
            className="d-block w-100 mouse"
            src={MouseGamerM601}
            alt="First slide"
          />
		  <a href="http://localhost:3000/">Comprar</a>
        </Col>
        <Col className="item-dos">
          <h3 className="title-item">Ipad 2° Gen</h3>
		  <img
            className="d-block w-100 ipad"
            src={IpadPro2daGen}
            alt="First slide"
          />
		  <a href="http://localhost:3000/">Comprar</a>
        </Col>
        <Col className="item-tres">
          <h3 className="title-item">Audifonos Logitech G733</h3>
		  <img
            className="d-block w-100 audifonos"
            src={AudifonosLogitechG733}
            alt="First slide"
          />
		  <a href="http://localhost:3000/">Comprar</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
