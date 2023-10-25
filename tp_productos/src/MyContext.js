import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const MyContext = createContext();

export function ProductsProvider({ children }) {
const [ productosData, setProductosData ] = useState([]);



useEffect(() => {
async function fetchProductos() {
    try {
    const response = await axios.get('https://dummyjson.com/products')
        var prod = response.data.products;
        setProductosData(prod)
    }
    catch(error) {
        console.log('Error fetching Pokemon data');
    }
}



fetchProductos();
}, []);

return (
<MyContext.Provider value={{ productosData }}>
    {children}
</MyContext.Provider>
);
}

export function useProductsData() {
return useContext(MyContext);
}