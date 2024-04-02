import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState(''); // State to track the search query

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  return (
    <div className="container">
      {/* Search Input */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="row">
        {products
          .filter((product) => {
            // Filter products based on query
            return (
              product.title.toLowerCase().includes(query.toLowerCase()) ||
              product.category.toLowerCase().includes(query.toLowerCase())
            );
          })
          .map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
