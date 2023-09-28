import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from 'react';
import './styles.css'
import Home from './components/home'
import Productos from './components/productos'



function App() {
  

  return (
    <div>
      
      <BrowserRouter>
          <Routes>
          
            <Route path="/" element={<Home/>}></Route>
            <Route path="/productos" element={<Productos/>}></Route>

            {/* <Route path="/buscador" element={<BuscadorPlato />}> </Route> */}
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
