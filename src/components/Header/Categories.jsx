import React from "react";
import { setSelectedCategory } from "../../features/product/product";
import { useSelector, useDispatch } from "react-redux";

function Categories() {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(
    (state) => state.products
  );

  // Function to close the navbar
  const closeNavbar = () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar) {
      navbar.classList.remove("show");
    }
  };

  const handleMouseEnter = (category) => {
    dispatch(setSelectedCategory(category)); // Hover filtering
  };

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
    closeNavbar(); // Close navbar after selecting a category
  };

  return (
    <div className="dropdown mb-lg-0">
      {/* Dropdown toggle */}
      <a
        href="#"
        className="nav-link dropdown-toggle"
        id="dropDownLink1"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedCategory || "Categories"}
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropDownLink1">
        {categories.map((category) => (
          <li
            key={category}
            onMouseEnter={() => handleMouseEnter(category)} // Hover filtering
          >
            <a
              href="#"
              className="dropdown-item"
              onClick={() => handleCategoryClick(category)} // Close navbar on click
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
