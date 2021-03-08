import React, { useState } from 'react';

const CartItem = (props) => {
  // TODO: find way to destructure props
  const { id, name, description, price, photo } = props.item;
  const { order } = props;
  const { setOrder } = props;

  const [qty, setQty] = useState(1);

  const addQty = () => {
    setQty(qty => qty + 1);

    const updatedOrderItems = [...order.items];
    const updatedItemIdx = updatedOrderItems.findIndex(item => item.id === id);
    const updatedItem = updatedOrderItems[updatedItemIdx];
    updatedItem.qty = qty + 1;
    updatedItem.price = price * (qty + 1);
    setOrder({
      items: updatedOrderItems,
      contactInfo: order.contactInfo
    });
  };

  const removeQty = () => {
    setQty(qty => qty - 1);

    const updatedOrderItems = [...order.items];
    const updatedItemIdx = updatedOrderItems.findIndex(item => item.id === id);
    const updatedItem = updatedOrderItems[updatedItemIdx];
    updatedItem.qty = qty - 1;
    updatedItem.price = price * (qty - 1);
    setOrder({
      items: updatedOrderItems,
      contactInfo: order.contactInfo
    });
  };

  return (
    <div>
      <li className="list-group-item" aria-current="true">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <h2 className="mb-1">{name}</h2>
          <span className="cart__price badge rounded-pill bg-primary">{price * qty} BYN</span>
        </div>
        <p className="mb-1">{description}</p>
        <div className="mt-2 mb-2">
          Quantity:
          <div className="d-flex">
            <button onClick={removeQty} className="btn btn-danger me-2" disabled={qty === 1}>-</button>
            <span className="cart__qty-input">{qty}</span>
            <button onClick={addQty} className="btn btn-success ms-2">+</button>

            <button onClick={() => props.deleteItem(id)} className="btn btn-danger ms-4">Delete</button>
          </div>
        </div>
        {photo && <img style={{ maxWidth: 120 }} className="img-thumbnail" src={photo} alt=""/>}
      </li>
    </div>
  );
};

export default CartItem;