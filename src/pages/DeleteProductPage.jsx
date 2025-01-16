import React, { useState } from "react";

const DeleteProductPage = () => {
  const [productId, setProductId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();

    if (productId.trim() === "") {
      setMessage("Please enter a valid Product ID.");
      return;
    }

    // Simulate product deletion (replace with API call)
    console.log(`Deleting product with ID: ${productId}`);
    setMessage(`Product with ID "${productId}" has been deleted successfully.`);
    setProductId(""); // Reset the input field
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Delete Product</h2>
      <p className="text-muted text-center">Enter the Product ID to delete it from the system.</p>

      <form className="mt-4 p-4 border rounded bg-light" onSubmit={handleDelete}>
        <div className="mb-3">
          <label htmlFor="productId" className="form-label">
            Product ID
          </label>
          <input
            type="text"
            className="form-control"
            id="productId"
            placeholder="Enter Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger w-100">
          Delete Product
        </button>
      </form>

      {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}
    </div>
  );
};

export default DeleteProductPage;
