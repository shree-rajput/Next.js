"use client";

import { useState } from "react";

// export const metadata = {
//   title: "Add User",
//   description: "Add User to the database",
// };
export default function Page() {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);

  const handleUser = async () => {
    let data = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    data = await data.json();
    console.log(data);

    setAge("");
    setName("");
    setEmail("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="enter name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        min={0}
        max={50}
        placeholder="enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <br />
      <button onClick={handleUser}>Add User</button>
    </>
  );
}
