"use client";
import { useState } from "react";

import { notFound } from "next/navigation";

export default function Page({ params }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  if (/^\d+$/.test(params.id)) {
    notFound();
  }

  return (
    <div>
      <h1>Update Page</h1>
      <input
        type="text"
        placeholder="Enter Updated name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Updated age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Updated email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
