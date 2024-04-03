import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage'; // Ensure this component is created
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(current => {
      // Check if the item already exists in the cart
      const exists = current.find(item => item.id === product.id);
      if (exists) {
        // Increment the quantity of the existing item
        return current.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        // Add the new item with a quantity of 1
        return [...current, { ...product, quantity: 1 }];
      }
    });
  };
  

  const removeFromCart = (productId) => {
    setCart(current =>
      current.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            // Decrease the quantity by 1
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
          // If quantity is 1, it gets removed and not added back
        } else {
          // Keep all other items as is
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const updateCart = (product) => {
    // Logic to update quantity or details for a product in the cart
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <Link to="/" className="navbar-brand">My E-commerce Site</Link>
          <Link to="/cart" className="nav-link">Cart ({cart.length})</Link>
        </nav>
        <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} updateCart={updateCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
