import React, { useState } from "react";

const StocksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample stock data (replace with actual data or API call)
  const stockData = [
    { id: 1, name: "Product A", category: "Category 1", quantity: 50, price: "$10" },
    { id: 2, name: "Product B", category: "Category 2", quantity: 30, price: "$15" },
    { id: 3, name: "Product C", category: "Category 1", quantity: 20, price: "$8" },
    { id: 4, name: "Product D", category: "Category 3", quantity: 70, price: "$12" },
  ];

  // Filtered stock data based on search
  const filteredStock = stockData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center">Stock Management</h2>
      <p className="text-muted text-center">
        View and manage product stock levels.
      </p>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Product Name or Category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Stock Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.length > 0 ? (
              filteredStock.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StocksPage;
