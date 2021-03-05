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

  useEffect(() => {
    // TODO: Bad. Need a separate component like <CartNav /> that would home 1)link and 2)count
    const link = document.querySelector('.cart-nav__link');
    // Link becomes active if user chooses an item
    if (count > 0) {
      link.style.pointerEvents = 'all';
    } else {
      // If user hasn't yet chosen an item, the link is inactive and displays as a static background image
      link.style.pointerEvents =  'none';
    }
  }, [count]);

  if (count === 0) return null;

  return (
    <span className="cart-nav__items-count badge rounded-pill bg-danger">{count}</span>
  );
}

export default CartItemsCount;