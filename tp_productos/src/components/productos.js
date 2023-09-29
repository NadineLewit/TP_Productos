import 'bootstrap';
import React, { useState } from 'react';
import { Link} from "react-router-dom";
import { data } from './data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardTitle, CardLink} from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FormControl, Form } from 'react-bootstrap';

function Home() {
  const [dataFiltrada, setDataFiltrada] = useState(data);
  const [busqueda, setBusqueda] = useState('');

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const resultadosBusqueda = data.filter((item) =>
      item.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setDataFiltrada(resultadosBusqueda);
  };
  
  const ClickT = () => {
    setDataFiltrada(data.filter(d => d.categoria == "Perfume" || d.categoria == "Cologne"));
  }
  const ClickP = () => {
    setDataFiltrada(data.filter(d => d.categoria == "Perfume"));
  }
  const ClickC = () => {
    setDataFiltrada(data.filter(d => d.categoria == "Cologne"));
  }

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Chanel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Filtrar" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={ClickT}>
                Ver todos
              </NavDropdown.Item>
              <NavDropdown.Item onClick={ClickP}>
                Perfumes
              </NavDropdown.Item>
              <NavDropdown.Item onClick={ClickC}>
                Colognes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
        <div className='barra'>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex" onSubmit={handleSubmit}>
              <FormControl
                type="text"
                placeholder="Buscar por nombre"
                value={busqueda}
                onChange={manejarBusqueda}
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
      <center>
      {dataFiltrada.map((item) => {
        return <li key={item.id}>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
              {item.nombre}
              </CardTitle>
            </CardBody>
            <img
              alt="Card cap"
              src={item.imgUrl1}
              width="100%"
            />
            <CardBody>
              <CardLink href={`/detalleProductos/${item.id}`}>
                Mas detalle
              </CardLink>
            </CardBody>
          </Card>
        </li>
      })
    }
    </center>
      
    </>
  );
}
const barra = {
  align: 'right'
};
export default Home;