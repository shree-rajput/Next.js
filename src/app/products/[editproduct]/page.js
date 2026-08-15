"use client";
import "../../style.css";
import { useState } from "react";
export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCampany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log(props.params.editproduct);
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    let product = await fetch(
      "http://localhost:3000/api/products/" + props.params.editproduct,
    );
    product = await product.json();
    if (product.success) {
      let result = product.result;
      setName(result.name);
      setprice(result.price);
      setColor(result.color);
      setCampany(result.company);
      setCategory(result.category);
    }
  };

  const updateProduct = async () => {
    let data = fetch(
      "http://localhost:3000/products/" + props.params.editproduct,
      {
        method: "PUT",
        body: JSON.stringify({ name, price, color, category, company }),
      },
    );

    data = await data.json();
    if (data.result) {
      alert("product updated carefully");
    }
  };
  return (
    <main>
      <h1>Update Products</h1>
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
      <button className="btn" onClick={updateProduct}>
        update Product
      </button>

      <Link href="/products">Go to Product Lists</Link>
    </main>
  );
}
