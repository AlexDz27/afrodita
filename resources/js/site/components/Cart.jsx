import React, { useState, useEffect, useRef } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const [items, setItems] = useState([]);

  const [order, setOrder] = useState([]);

  useEffect(() => {
    // TODO: create a func for it, god dammit...
    // reversing so that order becomes {id: 1, ...}, {id: 2, ...}, ...
    const storageItems = JSON.parse(localStorage.getItem('cartItems')).reverse();
    const initialOrder = storageItems.map(item => ({...item, qty: 1}));

    setItems(storageItems);
    setOrder(initialOrder);
  }, []);

  const deleteAllItems = () => {
    const userSure = confirm('Are you sure you want to discard your current order?');
    if (!userSure) return;

    localStorage.setItem('cartItems', '[]');
    dispatchEvent(window.events.CART_ITEMS_UPDATED);
    window.location.href = '/';
  }

  const makeOrder = () => {
    const userConfirmed = confirm('Do you confirm this order?');
    if (!userConfirmed) return;

    // read data -> send to server -> send user back to main

  }
  
  return (
    <div className="cart">
      <h1 className="d-flex justify-content-between">
        <span>Cart</span>

        <button onClick={deleteAllItems} className="btn btn-danger">🗑️ Delete all items</button>
      </h1>

      <ul className="cart__content list-group mb-5">
        {items.map((item) => (
          <CartItem key={item.id} item={item} order={order} setOrder={setOrder} />
        ))}
      </ul>

      <div className="d-grid gap-2">
        <button onClick={makeOrder} className="btn btn-success btn-lg mb-5">Make order</button>
      </div>
    </div>
  );
}

export default Cart;