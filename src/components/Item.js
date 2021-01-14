import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleCartAdd() {
    setInCart(inCart => !inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartAdd} className={inCart ? "remove" : "add"}>{inCart ? "REMOVE FROM " : "ADD TO "} CART</button>
    </li>
  );
}

export default Item;
