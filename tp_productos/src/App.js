import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import React, { useRef, useState, useEffect } from 'react';
import './styles.css'
import Home from './components/home'
import Productos from './components/productos'
import DetalleProductos from './components/detalleProductos'
import {ProductsProvider} from "./MyContext"

function App() {

  return (
    <div>
      <ProductsProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/productos" element={<Productos />}></Route>
            <Route path="/detalleProductos/:id" element={<DetalleProductos />}></Route>            
          </Routes>
        </BrowserRouter>
        </ProductsProvider>
         </div>
  );
}

export default App;
