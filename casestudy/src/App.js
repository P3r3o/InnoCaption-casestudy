import React, { useState } from 'react';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>My E-commerce Site</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default App;
