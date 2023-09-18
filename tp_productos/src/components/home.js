import React, { useState } from 'react';
import { useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Imagen from '../img/imagenrandom.jpg'

const productsData = [
    { id: 1, name: 'Product 1', category: 'Category1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', category: 'Category2', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', category: 'Category1', description: 'Description for Product 3' },
    { id: 4, name: 'Product 4', category: 'Category3', description: 'Description for Product 4' },
    { id: 5, name: 'Product 5', category: 'Category2', description: 'Description for Product 5' },
    { id: 6, name: 'Product 6', category: 'Category3', description: 'Description for Product 6' },
];

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = productsData.filter(product => {
        const isCategoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
        const isSearchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return isCategoryMatch && isSearchMatch;
    });

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
    <Carousel>
      <Carousel.Item>
         <Imagen text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagen text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagen text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
//     <header>
//     <h1>Product Showcase</h1>
//     <input
//         type="text"
//         placeholder="Search Products"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//     />
//     <select
//         value={selectedCategory}
//         onChange={(e) => setSelectedCategory(e.target.value)}
//     >
//         <option value="All">All Categories</option>
//         <option value="Category1">Category 1</option>
//         <option value="Category2">Category 2</option>
//         <option value="Category3">Category 3</option>
//     </select>
// </header>
// <main>
//     {filteredProducts.map((product) => (
//         <div
//             key={product.id}
//             className="product-item"
//             onClick={() => handleProductClick(product)}
//         >
//             <h2>{product.name}</h2>
//             <p>Category: {product.category}</p>
//         </div>
//     ))}
// </main>
// <div id="productDetail">
//     {selectedProduct && (
//         <div>
//             <h2>{selectedProduct.name}</h2>
//             <p>Category: {selectedProduct.category}</p>
//             <p>Description: {selectedProduct.description}</p>
//         </div>
//     )}
// </div>
// </div>
  );
}


export default App;
