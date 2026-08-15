"use client";
import "../style.css";
import { useState } from "react";
export default function Page() {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCampany] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    console.log(name, price, color, category, company);
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, company, category }),
    });
    result = result.json();
    if (result.success) {
      alert("data is submittted Good!!");
    }
  };
  return (
    <main>
      <h1>Add Products</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Price Name"
        className="input"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
      <input
        value={color}
        type="text"
        placeholder="Enter Color Name"
        className="input"
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Comppany Name"
        className="input"
        value={company}
        onChange={(e) => setCampany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Category Name"
        className="input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="btn" onClick={addProduct}>
        Add Product
      </button>
    </main>
  );
}
