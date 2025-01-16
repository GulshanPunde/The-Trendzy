import React from "react";
import { Link } from "react-router-dom";

const UpdateProduct = () => {
  // Function to close the navbar after clicking a dropdown item
  const closeNavbar = () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar) {
      navbar.classList.remove("show");
    }
  };

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
        <li>
          <Link className="dropdown-item" to="/add-product" onClick={closeNavbar}>
            Add Product
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/delete-product" onClick={closeNavbar}>
            Delete Product
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/update-product" onClick={closeNavbar}>
            Update Product
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default UpdateProduct;
