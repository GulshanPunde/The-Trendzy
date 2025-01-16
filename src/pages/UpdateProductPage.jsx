import React, { useState } from 'react';

const UpdateProductPage = () => {
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
    console.log('Updated Product:', product);
    // Add your API call or logic to update the product here
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Update Product</h2>
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
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProductPage;
