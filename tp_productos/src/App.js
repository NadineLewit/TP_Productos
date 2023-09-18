import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home.js'
import React, { useRef, useState, useEffect } from 'react';
import './styles.css'
import { data } from './components/data'

function App() {
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
        return esPrimera ? 0 : rand -1;
      })
    } else {
      const esUltima = rand === data.length -1;
      if (esUltima) {
        setRand(act => act + 1)
      }
    }
  }

  return (
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
              }
              
              )
            }
          </ul>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}> </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
