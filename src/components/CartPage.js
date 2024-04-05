import React from 'react';

function CartPage({ cart, removeFromCart, incrementQuantity, decrementQuantity }) {
  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title">{item.title} (x{item.quantity})</h5>
                  <p className="card-text">${item.price}</p>
                </div>
                <div>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Remove from Cart</button>
                  <button onClick={() => decrementQuantity(item.id)} className="btn btn-primary" style={{ width: '40px' }}>−</button>
                  <button onClick={() => incrementQuantity(item.id)} className="btn btn-success" style={{ width: '40px' }}>+</button>
                </div>
              </div>
            </div>
          ))}
          <div className="total-cost">
            <h4>Total Cost: ${getTotalCost()}</h4>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;