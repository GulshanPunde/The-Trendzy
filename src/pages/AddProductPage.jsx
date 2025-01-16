import React, { useState } from 'react';

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Product:', product);
    // Add your API call or logic to save the product here
    alert('Product added successfully!');
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Add New Product</h2>
      <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="productCategory"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter product category"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price ($)
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="productDescription"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Product Image
          </label>
          <input
            type="file"
            className="form-control"
            id="productImage"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
