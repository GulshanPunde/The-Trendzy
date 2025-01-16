import React from "react";
import Categories from "./Categories";
import UpdateProduct from "./UpdateProduct";

const Navbar = ({ title }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow"
      style={{
        backgroundColor: '#FF8383',
        position: 'sticky', // Makes the navbar sticky
        top: 0, // Sticks the navbar to the top of the viewport
        zIndex: 1030, // Ensures the navbar appears above other content
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <strong><i> {title.toUpperCase()}</i> </strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Categories />
            <li className="nav-item">
              <a className="nav-link" href="#">Stocks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Orders</a>
            </li>
            <UpdateProduct />
          </ul>
          <button className="btn btn-outline-dark" type="button">Sign Out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
