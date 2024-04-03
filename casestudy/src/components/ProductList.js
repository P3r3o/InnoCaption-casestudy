import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

function ProductList({ addToCart, cart }) {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setProducts(json.products));
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="row">
        {products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()))
          .map(product => {
            // Find if the product is in the cart and its quantity
            const cartItem = cart.find(item => item.id === product.id);
            const quantityInCart = cartItem ? cartItem.quantity : 0;
            return (
              <ProductItem key={product.id} product={product} addToCart={addToCart} quantityInCart={quantityInCart} />
            );
          })}
      </div>
    </div>
  );
}

export default ProductList;