import 'bootstrap';
import React, { useState } from 'react';
import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardTitle, CardLink} from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FormControl, Form } from 'react-bootstrap';
import { useProductsData } from '../MyContext';


function Home() {
  const [dataFiltrada, setDataFiltrada] = useState(productosData);
  const [busqueda, setBusqueda] = useState('');
  const { productosData } = useProductsData();

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const resultadosBusqueda = productosData.filter((item) =>
      item.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setDataFiltrada(resultadosBusqueda);
  };
  
  const ClickTodos = () => {
    setDataFiltrada(productosData.filter(d => d.category === "smartphones" || d.category === "laptops" || d.category === "fragrances" || d.category === "skincare" || d.category === "groceries" || d.category === "home-decoration" || d.category === "furniture" || d.category === "tops" || d.category === "womens-dresses" || d.category === "womens-shoes" || d.category === "mens-shirts" || d.category === "mens-shoes" || d.category === "mens-watches" || d.category === "womens-watches" || d.category === "womens-bags" || d.category === "womens-jewellery" || d.category === "sunglasses" || d.category === "automotive" || d.category === "motorcycle" || d.category === "lighting"));
  }
  const Click1 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "smartphones"));
  }
  const Click2 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "laptops"));
  }
  const Click3 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "fragrances"));
  }
  const Click4 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "skincare"));
  }
  const Click5 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "groceries"));
  }
  const Click6 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "home-decoration"));
  }
  const Click7 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "furniture"));
  }
  const Click8 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "tops"));
  }
  const Click9 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "womens-dresses"));
  }
  const Click10 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "womens-shoes"));
  }
  const Click11 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "mens-shirts"));
  }
  const Click12 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "mens-shoes"));
  }
  const Click13 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "mens-watches"));
  }
  const Click14 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "womens-watches"));
  }
  const Click15 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "womens-bags"));
  }
  const Click16 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "womens-jewellery"));
  }
  const Click17 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "sunglasses"));
  }
  const Click18 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "automotive"));
  }
  const Click19 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "motorcycle"));
  }
  const Click20 = () => {
    setDataFiltrada(productosData.filter(d => d.category === "lighting"));
  }
  

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">TP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Filtrar" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={ClickTodos}>
              Ver todos
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click1}>
              Smartphones
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click2}>
            laptops
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click3}>
            fragrances
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click4}>
            skincare
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click5}>
            groceries
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click6}>
            home-decoration
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click7}>
            furniture
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click8}>
            tops
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click9}>
            womens-dresses
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click10}>
            womens-shoes
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click11}>
            mens-shirts
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click12}>
            mens-shoes
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click13}>
            mens-watches
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click14}>
            womens-watches
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click15}>
            womens-bags
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click16}>
            womens-jewellery
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click17}>
            sunglasses
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click18}>
            automotive
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click19}>
            motorcycle
            </NavDropdown.Item>
            <NavDropdown.Item onClick={Click20}>
            lighting
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
              {item.title}
              </CardTitle>
            </CardBody>
            <img
              alt="Card cap"
              src={item.images[0]}
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