import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductosContext = createContext();

export function ProductosProvider({ children }) {
const [productosData, setProductosData] = useState([]);



useEffect(() => {
async function fetchProductosData() {
    try {
    const response = await axios.get('https://dummyjson.com/docs/products');
    setProductosData(response);
    } catch (error) {
    console.error('Error en la API:', error);
    }
}

fetchProductosData();
}, []);

return (
<ProductosContext.Provider value={{ productosData }}>
    {children}
</ProductosContext.Provider>
);
}

export function useProductos() {
return useContext(ProductosContext);
}