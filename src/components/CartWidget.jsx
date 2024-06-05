import React from 'react';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <i className="bi bi-cart" style={{ fontSize: '1.5rem' }}></i>
      <span className="badge bg-secondary ms-2">3</span>
    </div>
  );
}

export default CartWidget;
