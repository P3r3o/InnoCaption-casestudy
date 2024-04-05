import React from 'react';

function ProductItem({ product, addToCart, quantityInCart }) {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  };

  const cardImgTopStyle = {
    maxHeight: '200px',
    objectFit: 'cover',
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={cardStyle}>
        <img src={product.thumbnail} className="card-img-top" alt={product.title} style={cardImgTopStyle} />
        <div className="card-body" style={cardBodyStyle}>
          <div>
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">${product.price}</p>
          </div>
          <button onClick={() => addToCart(product)} className="btn btn-primary">
            {quantityInCart > 0 ? `${quantityInCart} in Cart` : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;