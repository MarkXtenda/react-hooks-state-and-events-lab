import React, { useState } from "react";

function Item({ name, category }) {
  const [incart, setinCart] = useState("")

  function handleCart(event) {
    console.log(event.target.parentElement)
    if (event.target.parentElement.className === incart) {
      setinCart("in-cart")
    }
  }

  return (
    <li  className={incart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
