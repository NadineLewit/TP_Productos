import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useRef, useState, useEffect } from 'react';
import './styles.css'
import Home from './components/Home'


function App() {
  

  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            {/* <Route path="/buscador" element={<BuscadorPlato />}> </Route> */}
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
