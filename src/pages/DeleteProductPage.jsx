import React, { useState } from "react";

const DeleteProductPage = () => {
  const [productId, setProductId] = useState("");
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("info"); // New: For dynamic alert styling

  const handleDelete = (e) => {
    e.preventDefault();

    if (productId.trim() === "") {
      setMessage("Please enter a valid Product ID.");
      setAlertType("danger"); // Alert for invalid input
      return;
    }

    // Simulate product deletion (replace with API call)
    console.log(`Deleting product with ID: ${productId}`);
    setMessage(`Product with ID "${productId}" has been deleted successfully.`);
    setAlertType("success"); // Alert for success
    setProductId(""); // Reset the input field
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Delete Product</h2>
      <p className="text-muted text-center">
        Enter the Product ID to delete it from the system.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <form
            className="mt-4 p-4 border rounded bg-light shadow"
            onSubmit={handleDelete}
          >
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
            <div className={`alert alert-${alertType} mt-3`} role="alert">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteProductPage;
