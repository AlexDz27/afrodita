import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import ContactInfo from './ContactInfo';

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState({items: [], contactInfo: {}});
  const [totalSum, setTotalSum] = useState(0);

  const [requiredFieldsFilled, setRequiredFieldsFilled] = useState(false);

  useEffect(() => {
    // TODO: create a func for it, god dammit...
    // reversing so that order becomes {id: 1, ...}, {id: 2, ...}, ...
    const storageItems = JSON.parse(localStorage.getItem('cartItems')).reverse();
    const orderItems = storageItems.map(item => ({...item, qty: 1}));

    setItems(storageItems);
    setOrder({items: orderItems, contactInfo: {}});
  }, []);

  useEffect(() => {
    const updatedTotalSum = calculateTotalSum(order.items);

    setTotalSum(updatedTotalSum);
  }, [order]);

  const makeOrder = async () => {
    const userConfirmed = confirm('Do you confirm this order?');
    if (!userConfirmed) return;

    // read data (read state of items) -> send to server -> send user back to main
    order.totalSum = totalSum;

    const response = await fetch(window.apiUrl + '/cart-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });
    const result = await response.json();

    console.log(result);
  };

  function calculateTotalSum(orderItems) {
    let totalSum = 0;

    orderItems.reduce((acc, current) => totalSum += Number(current.price), orderItems[0]?.price);

    return totalSum;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Cart items={items} order={order} totalSum={totalSum} setOrder={setOrder} setItems={setItems} />
        </div>

        <div className="col">
          <ContactInfo
            order={order}
            setRequiredFieldsFilled={setRequiredFieldsFilled}
            setOrder={setOrder}
          />
        </div>
      </div>

      <div className="d-grid gap-2">
        <button disabled={!requiredFieldsFilled} onClick={makeOrder}
                className="cart-page__make-order-btn btn btn-success btn-lg mb-5">
          Make order
        </button>
      </div>
    </div>
  );
};

export default CartPage;