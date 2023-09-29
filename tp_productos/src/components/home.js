
import 'bootstrap';
import { Link} from "react-router-dom";
import React, {  useRef, useState, useEffect } from 'react';
import { data } from './data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
  const listRef = useRef();
  const [rand, setRand] = useState(0);

  useEffect(() => {
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
      const esUltima = rand === data.length -1;
      if (!esUltima) {
        setRand(act => act + 1)
      }
    }
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
              {
                data.map((item) => {
                  return <li key={item.id}>
                    <img src={item.imgUrl1} width={450} height={400} />
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div>
        <br></br>
      <CardGroup>
      {
                data.map((item) => {
                  return <li key={item.id}>
                    <center>
                    <Card
                      style={{
                        width: '18rem'
                      }}
                    >
                      <CardBody>
                        
                        <CardTitle tag="h5">
                          {item.nombre}
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        >
                          {item.categoria}
                        </CardSubtitle>
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