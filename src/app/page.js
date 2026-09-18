import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Welcome to Technical Blog",
};
export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>Welcome to Technical Blog!</h1>
      <Link href="/addproducts">Add Products</Link>
      <Link href="/ImageUpload">Image Upload</Link>
      <Link href="/products">Products</Link>
    </main>
  );
}
