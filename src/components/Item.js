// Item.js
import React, { useState } from "react";

const Item = ({ name, category }) => {
  // State variable to track whether the item is in the cart or not
  const [isInCart, setIsInCart] = useState(false);

  // Event handler to toggle the cart status
  const toggleCartStatus = () => {
    setIsInCart(!isInCart);
  };

  // Dynamic class for the <li> element based on the cart status
  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCartStatus}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
};

export default Item;
