import 'bootstrap';
import React, {  useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useProductsData } from '../MyContext';


function DetalleProductos() {
  const { id } = useParams();
  const [prod, setProd] = useState([]);
  const { productosData } = useProductsData();


  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">TP</Navbar.Brand>
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
          {productosData.filter(d => {if(d.id == id)
          setProd(d)
          })}
          
          
          <img
            alt="Card cap"
            src={prod.images[0]}
            width="20%"
            height="20%"
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