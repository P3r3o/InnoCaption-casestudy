import React from 'react';

function CartPage({ cart, removeFromCart, updateCart }) {
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{item.title} (x{item.quantity})</h5>
              <p className="card-text">${item.price}</p>
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Remove from Cart</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
