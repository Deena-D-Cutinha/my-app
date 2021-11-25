import React, { useState, useEffect } from "react";
import axios from "axios";
export default function ListOfThings() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [data, setData] = useState([]);
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

  // useEffect(() => {
  //   fetch("/demo/data/").then((response) => response.json());

  //   // .then((data) => setData(data));

  //   console.log("data " + JSON.stringify(data));
  // });
  useEffect(async () => {
    const result = await axios(
      "https://stldintapp01.sial.com/matrixendpoints/getOutages?startAt=0&maxResults=30&statusCode=2"
    );

    console.log("fetch result --" + JSON.stringify(result));
    setData(result.data);
  }, []);

  return (
    <>
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
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
