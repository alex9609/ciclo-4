import React from "react";
import "./products.css";
//Imagenes
/*
import AudifonosLogitechG733 from "../../img/AudifonosLogitechG733.png";
import MouseGamerM601 from "../../img/MouseGamerM601.png";
import IpadPro2daGen from "../../img/IpadPro2daGen.png";
import MonitorGamer from "../../img/MonitorGamer.webp";
*/
import MonitorOdyssey from "../../img/MonitorOdyssey G3.webp";

//
import Card from "../card/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const Products = () => {
  return (
    <>
      <Container>
        <h1 className="titulo">Productos</h1>
        <Row>
          <Col>
			<Card source={MonitorOdyssey} name={"Monitor"} price={12000}/>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
