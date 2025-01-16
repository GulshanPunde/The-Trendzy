import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import UpdateProduct from "./UpdateProduct";

const Navbar = ({ title }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeNavbar = () => {
    setIsCollapsed(true);
  };

  const preventDropdownClose = (e) => {
    e.stopPropagation(); // Prevents event propagation to the `closeNavbar` handler
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow"
      style={{
        backgroundColor: '#FF8383',
        position: 'sticky',
        top: 0,
        zIndex: 1030,
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <strong><i>{title.toUpperCase()}</i></strong>
        </Link>
        <button
          className={`navbar-toggler ${!isCollapsed ? "" : "collapsed"}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Categories Dropdown */}
            <li className="nav-item dropdown" onClick={preventDropdownClose}>
              <Categories />
            </li>
            
            {/* Stocks Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/stocks" onClick={closeNavbar}>
                Stocks
              </Link>
            </li>
            
            {/* Orders Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/orders" onClick={closeNavbar}>
                Orders
              </Link>
            </li>
            
            {/* UpdateProduct Dropdown */}
            <li className="nav-item dropdown" onClick={preventDropdownClose}>
              <UpdateProduct />
            </li>
          </ul>
          <button className="btn btn-outline-dark" type="button" onClick={closeNavbar}>
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
