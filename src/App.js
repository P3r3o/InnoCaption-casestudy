import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      incrementQuantity(product.id);
    } else {
      setCart(current => [...current, { ...product, quantity: 1 }]);
    }
  };

  const incrementQuantity = (productId) => {
    setCart(current =>
      current.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart(current =>
      current.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(current => current.filter(item => item.id !== productId));
  };

  const getCartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-light bg-light px-2">
          <Link to="/" className="navbar-brand" style={{ fontSize: '35px', fontWeight: 'medium', fontFamily: 'Helvetica, Arial, sans-serif', letterSpacing: '2px' }}>
            <span style={{ color: '#0b5ed7' }}>Inno</span><span style={{ color: 'black' }}>Cart</span>
          </Link>
          <Link to="/cart" className="nav-link">
            <img src="/cart-icon.svg" alt="Cart" style={{ width: '24px', height: '24px' }} />
            <span className="ml-1">({getCartQuantity()})</span>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;