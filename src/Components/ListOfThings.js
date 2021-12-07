import React, { useState, useEffect } from "react";
import axios from "axios";
export default function ListOfThings() {
  //way to create local variables
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [data, setData] = useState([]);
  //create cart of items
  const addItem = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName,
      },
    ]);
    setItemName("");
  };

//to be called when component loaded
  useEffect(async () => {
    const result = await axios(
     // URL to be provided.
    );
    setData(result.data);
  }, []);

  return (
    <>
    //create a form to add items
      <form onSubmit={addItem}>
        <label>
          {" "}
          Add items
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
      </form>
//loop the items to display 
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
