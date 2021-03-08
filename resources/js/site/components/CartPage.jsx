import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import ContactInfo from './ContactInfo';

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState({items: [], contactInfo: {}});
  const [totalSum, setTotalSum] = useState(0);

  const [requiredFieldsFilled, setRequiredFieldsFilled] = useState(false);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (loading === true) {
      document.body.style.cursor = 'loading';
    }
  }, [loading]);

  const makeOrder = async () => {
    const userConfirmed = confirm('Do you confirm this order?');
    if (!userConfirmed) return;

    setLoading(true);
    // read data (read state of items) -> send to server -> send user back to main
    order.totalSum = totalSum;

    const response = await fetch(window.apiUrl + '/order-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });
    const result = await response.json();

    setLoading(false);

    if (result.success === true) {
      alert(`Your order has been submitted successfully. We'll contact you shortly.`);

      localStorage.setItem('cartItems', JSON.stringify([]));

      window.location.href = '/';
    } else {
      alert(`Oh-oh, an error occurred while submitting your order. Please, try again later`);
    }
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
        <button disabled={!requiredFieldsFilled || loading} onClick={makeOrder}
                className="cart-page__make-order-btn btn btn-success btn-lg mb-5">
          Make order
        </button>
      </div>
    </div>
  );
};

export default CartPage;