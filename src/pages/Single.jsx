import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Line from "../components/extras/Line";
import { setSingleProduct, updateProductDetails } from "../features/product/product";
import Price from "../components/extras/Price";
import ShowProduct from "../components/productCard/ShowProduct";

function Single() {
  const { single, singleSimilarProducts } = useSelector(
    (state) => state.products
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  const [editableProduct, setEditableProduct] = useState({
    name: "",
    price: 0,
    size: "",
    stock: 0,
    description: "",
    images: [],
    newImages: [], // Store selected files here
  });

  useEffect(() => {
    dispatch(setSingleProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (single) {
      setEditableProduct({
        name: single.name,
        price: single.price,
        size: single.size || "N/A",
        stock: single.stock || 0,
        description: single.description || "",
        images: single.images || [`/images/${single.id}.jpg`], // Default to single image if no array
        newImages: [], // Clear the new images input field on load
      });

      // Scroll to the top of the page when loaded
      window.scrollTo(0, 0);
    }
  }, [single]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image file selection
  const handleFileChange = (e) => {
    const files = e.target.files;
    const newImagesArray = Array.from(files).map((file) => URL.createObjectURL(file)); // Create object URLs for preview
    setEditableProduct((prev) => ({
      ...prev,
      newImages: [...prev.newImages, ...newImagesArray], // Append selected images
    }));
  };

  const handleUpdate = () => {
    dispatch(updateProductDetails({ id, ...editableProduct }));
    alert("Product updated successfully!");
  };

  return (
    <div id="single" className="container py-4 text-dark">
      {/* Product Details */}
      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            {/* Carousel for multiple images */}
            {editableProduct.images.length > 1 || editableProduct.newImages.length > 0 ? (
              <div
                id="productCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {editableProduct.images.concat(editableProduct.newImages).map((img, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={img}
                        alt={`Product image ${index + 1}`}
                        className="d-block w-100"
                        style={{
                          maxWidth: "350px",
                          height: "auto",
                          objectFit: "cover",
                          borderRadius: "8px",
                          margin: "0 auto",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            ) : (
              <img
                src={editableProduct.images[0]}
                alt={editableProduct.name}
                className="d-block w-100"
                style={{
                  maxWidth: "350px",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "8px",
                  margin: "0 auto",
                }}
              />
            )}
          </div>
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fs-1 fw-bold">
            <input
              type="text"
              className="form-control text-dark fs-3"
              name="name"
              value={editableProduct.name}
              onChange={handleInputChange}
            />
          </h2>
          <div className="mb-3">
            <label className="form-label fw-bold">Price:</label>
            <Price value={editableProduct.price} />
            <input
              type="number"
              className="form-control d-inline w-100 mt-2"
              name="price"
              value={editableProduct.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Size:</label>
            <input
              type="text"
              className="form-control"
              name="size"
              value={editableProduct.size}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Stock:</label>
            <input
              type="number"
              className="form-control"
              name="stock"
              value={editableProduct.stock}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Description:</label>
            <textarea
              className="form-control"
              rows="4"
              name="description"
              value={editableProduct.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* File Input for adding more images */}
          <div className="mb-3">
            <label className="form-label fw-bold">Add More Images:</label>
            <div className="d-flex">
              <input
                type="file"
                className="form-control me-2"
                name="newImages"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Update Button - Full Width */}
          <button className="btn btn-primary w-100 mt-3" onClick={handleUpdate}>
            Update Product
          </button>
        </div>
      </div>

      {/* Divider */}
      <Line />

      {/* Similar Products */}
      <div className="my-5">
        <h2 className="text-success text-center mb-4">
          Similar Products You May Like
        </h2>
        <ShowProduct products={singleSimilarProducts} />
      </div>
    </div>
  );
}

export default Single;
