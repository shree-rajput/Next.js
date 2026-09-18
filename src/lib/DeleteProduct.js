"use client";
export default function DeleteProduct(props) {
  const deleteRecord = async () => {
    const res = await fetch("http://localhost:3000/api/products/" + props.id, {
      method: "DELETE",
    });

    res = await res.json();
    if (res.deleted) {
      alert(res.message);
      window.location.reload();
    }
  };
  return (
    <div>
      <button onClick={deleteRecord}>Delete</button>
    </div>
  );
}
