"use client";
import { useState } from "react";

// export const metadata = {
//   title: "Image Upload",
//   description: "Upload images to the server",
// };
export default function Home() {
  const [file, setFile] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("file", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });

    const ans = await res.json();
    if (ans.success) {
      alert(ans.message);
    }
  };
}
