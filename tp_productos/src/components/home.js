
import 'bootstrap';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React, {  useRef, useState, useEffect } from 'react';
// import './styles.css'
import { data } from './data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardGroup, Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, CardLink } from 'reactstrap';


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
    
      <Button> 
      <Link to="/productos">Productos</Link>
        </Button>
      <div className='main-container'>
        <div className='slider-container'>
          <div className='leftArrow' onClick={() => scrollToImage('ant')}>&#10094;</div>
          <div className='rightArrow' onClick={() => scrollToImage('post')}>&#10095;</div>
          <div className='container-images'>
            <ul ref={listRef}>
              {
                data.map((item) => {
                  return <li key={item.id}>
                    <img src={item.imgUrl} width={500} height={280} />
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <CardGroup>
      {
                data.map((item) => {
                  return <li key={item.id}>
                    <Card
                      style={{
                        width: '18rem'
                      }}
                    >
                      <CardBody>
                        <CardTitle tag="h5">
                          Card title
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        >
                          Card subtitle
                        </CardSubtitle>
                      </CardBody>
                      <img
                        alt="Card cap"
                        src={item.imgUrl}
                        width="100%"
                      />
                      <CardBody>
                        <CardText> a </CardText>
                        <CardLink href="#">
                        Mas detalle
                        </CardLink>
                      </CardBody>
                    </Card>
                  </li>
                })
              }
              </CardGroup>
      
    </>
  );
}

export default Home;