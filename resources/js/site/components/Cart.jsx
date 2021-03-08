import React from 'react';
import CartItem from './CartItem';

const Cart = ({items, order, totalSum, setOrder, setItems}) => {
  const deleteAllItems = () => {
    const userSure = confirm('Are you sure you want to discard your current order?');
    if (!userSure) return;

    localStorage.setItem('cartItems', '[]');
    dispatchEvent(window.events.CART_ITEMS_UPDATED);
    window.location.href = '/';
  }

  const deleteItem = (id) => {
    const updatedOrderItems = [...order.items];
    const orderItemToDeleteIdx = updatedOrderItems.findIndex(item => item.id === id);
    updatedOrderItems.splice(orderItemToDeleteIdx, 1);
    setOrder({items: updatedOrderItems, contactInfo: order.contactInfo});

    const updatedItems = [...items];
    const itemToDeleteIdx = updatedItems.findIndex(item => item.id === id);
    updatedItems.splice(itemToDeleteIdx, 1);
    setItems(updatedItems);
  }

  return (
    <div className="cart-container container">
      <div className="cart">
        <h1 className="d-flex justify-content-between">
          <span>Cart</span>

          <button onClick={deleteAllItems} className="btn btn-danger">🗑️ Delete all items</button>
        </h1>

        <ul className="cart__content list-group mb-5">
          {items.map((item) => (
            <CartItem key={item.id} item={item} order={order} setOrder={setOrder} deleteItem={deleteItem} />
          ))}
        </ul>

        <h1 className="mb-5">Total sum: {totalSum} BYN</h1>
      </div>
    </div>
  );
}

export default Cart;