import React, { useEffect } from 'react';

const CartItemsCount = () => {
  useEffect(() => {
    window.addEventListener('CART_ITEM_INSERTED', () => {
      console.log(JSON.parse(window.localStorage.getItem('cartItems')));
    })
  }, []);

  return (
    <span className="badge rounded-pill bg-danger">1</span>
  );
}

export default CartItemsCount;