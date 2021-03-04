import React from 'react';

const AddToCartButton = () => {
  const onClick = () => {
    const id = document.querySelector('#product-name').dataset.id;
    const name = document.querySelector('#product-name').textContent;
    const price = document.querySelector('h2').textContent;
    const photo = document.querySelector('img').src;
    
    const productData = {id, name, price, photo};
    
    console.log(productData)
  }

  return (
    <button onClick={onClick} className="btn btn-primary">Add to cart</button>
  );
}

export default AddToCartButton;