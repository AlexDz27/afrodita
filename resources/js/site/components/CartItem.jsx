import React, { useState } from 'react';

const CartItem = (props) => {
  // TODO: find way to destructure
  const {id, name, description, price, photo} = props.item;

  const [qty, setQty] = useState(1);

  const addQty = () => {
    setQty(qty + 1);

    console.log(props.order)
    setTimeout(() => {
      console.log(props.order)
    }, 500)
    const prevOrder = [...props.order];
    const updatedItem = prevOrder.find(item => item.id === id);
    updatedItem.qty = qty + 1;
    // TODO: work here...
    // const updatedOrder = [...];

    props.setOrder(qty + 1);
  }

  const removeQty = () => {
    setQty(qty - 1);
    props.setOrder(qty - 1);
  }

  return (
    <div>
      <li className="list-group-item" aria-current="true">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <h2 className="mb-1">{name}</h2>
          <span className="cart__price badge rounded-pill bg-primary">{price} BYN</span>
        </div>
        <p className="mb-1">{description}</p>
        <div className="mt-2 mb-2">
          Quantity:
          <div className="cart__qty">
            <button onClick={removeQty} className="btn btn-danger me-2" disabled={qty === 1}>-</button>
            <input className="cart__qty-input" value={qty} />
            <button onClick={addQty} className="btn btn-success ms-2">+</button>
          </div>
        </div>
        {photo && <img style={{maxWidth: 120}} className="img-thumbnail" src={photo} alt=""/>}
      </li>
    </div>
  );
}

export default CartItem;