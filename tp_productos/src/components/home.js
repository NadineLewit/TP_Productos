
import 'bootstrap';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, {  useRef, useState, useEffect } from 'react';
// import './styles.css'
import { data } from './data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


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
      {
                data.map((item) => {
                  return <li key={item.id}>
                    <Card className="my-2">
                      <CardImg
                        alt="Producto"
                        src={item.imgUrl}
                        style={{
                          height: 180
                        }}
                        width= '18rem'
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          Card Title
                        </CardTitle>
                        <CardText>
                          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </li>
                })
              }
      
      <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5">
            Card Title
          </CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardBody>
        <CardImg
          alt="Card image cap"
          bottom
          src="https://picsum.photos/900/180"
          style={{
            height: 180
          }}
          width="100%"
        />
        </Card>
      
    </>
  );
}

export default Home;