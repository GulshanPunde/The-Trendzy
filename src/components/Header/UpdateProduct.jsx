import React from "react";

const UpdateProduct = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="updateItemsDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Update Items
      </a>
      <ul className="dropdown-menu" aria-labelledby="updateItemsDropdown">
        <li><a className="dropdown-item" href="#">Add Product</a></li>
        <li><a className="dropdown-item" href="#">Delete Product</a></li>
        <li><a className="dropdown-item" href="#">Update Product</a></li>
      </ul>
    </li>
  );
};

export default UpdateProduct;
