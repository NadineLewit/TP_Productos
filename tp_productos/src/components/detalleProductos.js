import 'bootstrap';
import React, {  useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { data } from './data'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function DetalleProductos() {
  const { id } = useParams();
  console.log(id)
  const [prod, setProd] = useState([]);
  
  useEffect(() => {
    setProd(data.filter(d => d.id == id))
  }, []);
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Chanel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <center>
          <img
            alt="Card cap"
            src={prod[0] && prod[0].images[0]}
            width="20%"
            height="20%"
          />
          <div></div>
          <div style={Precio}>
          {prod[0] && prod[0].precio}
          </div>
          <div style={ Texto}>
          {prod[0] && prod[0].description}
          </div>
    
          <img
            alt="Card cap"
            src={prod[0] && prod[0].images[1]}
            width="300"
            height="370"
          />
          <img
            alt="Card cap"
            src={prod[0] && prod[0].images[2]}
            width="300"
            height="370"
          />
          </center>
      
    </>
  );
}
const Texto = {
  textAlign: 'center', 
  fontSize: '20px',  
  fontWeight: 'bold', 
  color: 'black', 
  marginTop: '70px',
  marginBottom: '70px',
  marginLeft: '400px',
  marginRight: '400px',
};
const Precio = {
  textAlign: 'center', 
  fontSize: '35px',  
  fontWeight: 'bold', 
  color: 'black', 
  marginTop: '50px',
  marginLeft: '400px',
  marginRight: '400px',
};

export default DetalleProductos;