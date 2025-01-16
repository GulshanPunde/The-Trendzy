import React from "react";

const Categories = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="categoriesDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categories
      </a>
      <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
        <li><a className="dropdown-item" href="#">Category 1</a></li>
        <li><a className="dropdown-item" href="#">Category 2</a></li>
        <li><a className="dropdown-item" href="#">Category 3</a></li>
      </ul>
    </li>
  );
};

export default Categories;
