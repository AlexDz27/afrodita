import React, { useState, useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';

// TODO: create function (class?) for handling localStorage operations

const AddToCartButton = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [firstTimeAdding, setFirstTimeAdding] = useState(true);

  const closeBtnRef = useRef(null);

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) ?? [];
  const currentItemId = document.querySelector('#product-name').dataset.id;

  const itemIsAlreadyAdded = Boolean(cartItems.find(item => item.id === currentItemId));

  useEffect(() => {
    // Set button to 'Added to cart!' if user already chose item
    if (itemIsAlreadyAdded) {
      setIsAdded(true);
      setFirstTimeAdding(false);
    }

    // Initialize tooltip
    window.tooltip = new Tooltip(closeBtnRef.current);
  }, []);

  const addToCart = () => {
    setIsAdded(true);

    const id = currentItemId;
    const name = document.querySelector('#product-name').textContent;
    const price = document.querySelector('h2').textContent.replace(/ BYN/g, '');
    const photo = document.querySelector('img')?.src;

    const productData = { id, name, price, photo };

    // TODO: mb unnecessary because either way the button should be disabled
    const cartItemExists = cartItems.find(item => item.id === productData.id);
    if (cartItemExists) return;

    const updatedCartItems = [...cartItems, productData];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    dispatchEvent(window.events.CART_ITEMS_UPDATED);
  };

  const deleteFromCart = () => {
    setIsAdded(false);

    // TODO: id - through props via data-attributes on container
    const updatedCartItems = cartItems.filter(item => item.id !== currentItemId);

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    dispatchEvent(window.events.CART_ITEMS_UPDATED);
  };

  // When clicked on 'Add to cart', show tooltip for 2 seconds and then hide it
  useEffect(() => {
    if (isAdded === false) return;

    // Show tooltip to user first time they add item to cart
    if (firstTimeAdding) {
      window.tooltip.show();
      const timer = setTimeout(() => {
        window.tooltip.hide();
      }, 2000);
      closeBtnRef.current.addEventListener('mouseenter', () => {
        clearTimeout(timer);
      });

      setFirstTimeAdding(false);
    }
  }, [isAdded]);

  return (
    <>
      {isAdded ? ( 
        <>
          <button
            style={{ pointerEvents: 'auto', cursor: 'not-allowed' }}
            className="btn btn-outline-success disabled me-3"
          >
            Added to cart!
          </button>
        </>
      ) : (
        <button onClick={addToCart} className="btn btn-primary">Add to cart</button>
      )}


      <button
        style={isAdded ? {} : { display: 'none' }}
        onClick={deleteFromCart} className="btn btn-danger" data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Click to remove item from cart"
        ref={closeBtnRef}
      >
        ✕
      </button>
    </>
  );
};

export default AddToCartButton;