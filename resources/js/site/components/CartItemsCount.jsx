import React, { useState, useEffect } from 'react';

const CartItemsCount = () => {
  const cartItemsCount = JSON.parse(window.localStorage.getItem('cartItems'))?.length || 0;
  const [count, setCount] = useState(cartItemsCount);

  useEffect(() => {
    window.addEventListener('CART_ITEMS_UPDATED', () => {
      const cartItemsCount = JSON.parse(window.localStorage.getItem('cartItems')).length;
      setCount(cartItemsCount);
    });
  }, []);

  if (count === 0) return null;

  return (
    <span className="cart__items-count badge rounded-pill bg-danger">{count}</span>
  );
}

export default CartItemsCount;