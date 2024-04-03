import React from 'react';

function ProductItem({ product, addToCart, quantityInCart }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={product.thumbnail} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary">
            {quantityInCart > 0 ? `${quantityInCart} in Cart` : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;