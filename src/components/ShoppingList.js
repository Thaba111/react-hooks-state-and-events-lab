// ShoppingList.js
import React, { useState } from "react";
import Item from "./Item";

const ShoppingList = ({ items }) => {
  // State variable to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler to update the selected category when the <select> element changes
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Dropdown to select category */}
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>

      {/* List of items */}
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
