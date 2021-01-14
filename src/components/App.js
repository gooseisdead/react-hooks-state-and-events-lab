import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDarkMode ? "DARK" : "LIGHT"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
