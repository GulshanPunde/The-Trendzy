import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Categories from "./Categories";
import UpdateProduct from "./UpdateProduct";
import LogoutModal from "../extras/LogoutModal";
import Searchbar from "./Searchbar";

const Navbar = ({ title }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeNavbar = () => {
    setIsCollapsed(true);
  };

  const getActiveClass = (path) => (location.pathname === path ? "active" : "");

  const handleLogout = () => {
    console.log("User logged out.");
    setShowLogoutModal(false);
  };

  // Check if the user is on the home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light shadow custom-navbar"
        style={{
          backgroundColor: "#FF8383",
          position: "sticky",
          top: 0,
          zIndex: 1030,
        }}
      >
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <strong>
              <i>{title.toUpperCase()}</i>
            </strong>
          </Link>

          {/* Toggle Button */}
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

          {/* Collapsible Navbar Content */}
          <div
            className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Conditionally Render Categories Dropdown */}
              {isHomePage && (
                <li className="nav-item dropdown">
                  <Categories />
                </li>
              )}

              {/* Stocks Link */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${getActiveClass("/stocks")}`}
                  to="/stocks"
                  onClick={closeNavbar}
                >
                  Stocks
                </Link>
              </li>

              {/* Orders Link */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${getActiveClass("/orders")}`}
                  to="/orders"
                  onClick={closeNavbar}
                >
                  Orders
                </Link>
              </li>

              {/* UpdateProduct Dropdown */}
              <UpdateProduct/>
            </ul>

            {/* Conditionally Render Searchbar */}
            {isHomePage && (
              <div className="d-flex align-items-center ms-auto">
                <Searchbar onCloseNavbar={closeNavbar} />
              </div>
            )}

            {/* Sign Out Button */}
            <button
              className="btn btn-outline-dark ms-2"
              type="button"
              onClick={() => setShowLogoutModal(true)}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Logout Modal */}
      <LogoutModal
        show={showLogoutModal}
        onConfirm={handleLogout}
        onCancel={() => setShowLogoutModal(false)}
      />
    </>
  );
};

export default Navbar;
