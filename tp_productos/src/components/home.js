import axios from 'axios';
import 'bootstrap';
import { Link} from "react-router-dom";
import React, {  useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MyContext } from '../MyContext';
import {useContext} from 'react';

function Home() {
  const listRef = useRef();
  const [rand, setRand] = useState(0);
  const {productosData, setProductosData}=useContext(MyContext);

  
  useEffect(() => {
    productos();
    const listNode = listRef.current;
    const img = listNode.querySelectorAll("li > img")[rand]

    if (img) {
      img.scrollIntoView({
        behavior: "smooth"
      })
    }

  }, [rand])

  const scrollToImage = (direc) => {
    if (direc === 'ant') {
      setRand(act => {
        const esPrimera = rand === 0;
        return esPrimera ? 0 : act -1;
      })
    } else {
      const esUltima = rand === productosData.length -1;
      if (!esUltima) {
        setRand(act => act + 1)
      }
    }
  }
  const productos = () => {
    axios.get('https://dummyjson.com/products')
    .then(function (response) {
        var prod = response.data.products;
        setProductosData(prod)
        console.log(productosData)
      }
    ) 
    .catch(function (error) {
      console.log("nao nao watafak");
  });  
  };

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
      <div className='main-container'>
        <div className='slider-container'>
          <div className='leftArrow' onClick={() => scrollToImage('ant')}>&#10094;</div>
          <div className='rightArrow' onClick={() => scrollToImage('post')}>&#10095;</div>
          <div className='container-images'>
            <ul ref={listRef}>
              {productosData.map((item) => {
                  return( <li key={item.id}>
                    <img src={item.images[0]} />
                  </li>
               ); })
              }
            </ul>
          </div>
        </div>
      </div>
      <div>
        <br></br>
      <CardGroup>
      {productosData.map((item) => {
                  return <li key={item.id}>
                    <center>
                    <Card
                      style={{
                        width: '18rem'
                      }}
                    >
                      <CardBody>
                        
                        <CardTitle tag="h5">
                          {item.title}
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        >
                          {item.category}
                        </CardSubtitle>
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
                    </center>
                  </li>
                })
              }
              </CardGroup>
              </div>
    </>
  );
}

export default Home;