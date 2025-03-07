import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Categories from "./Categories";
import UpdateProduct from "./UpdateProduct";
import LogoutModal from "../extras/LogoutModal";
import Searchbar from "./Searchbar";

const Navbar = ({ title, onLogout }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  const closeNavbar = () => setIsCollapsed(true);
  const getActiveClass = (path) => (location.pathname === path ? "active" : "");

  const handleLogout = () => {
    setShowLogoutModal(false);
    onLogout();
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow custom-navbar" style={{ backgroundColor: "#FF8383", position: "sticky", top: 0, zIndex: 1030 }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <strong>
              <i>{title.toUpperCase()}</i>
            </strong>
          </Link>
          <button className={`navbar-toggler ${!isCollapsed ? "" : "collapsed"}`} type="button" onClick={toggleNavbar} aria-expanded={!isCollapsed}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isHomePage && <li className="nav-item dropdown"><Categories /></li>}
              <li className="nav-item">
                <Link className={`nav-link ${getActiveClass("/stocks")}`} to="/stocks" onClick={closeNavbar}>Stocks</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${getActiveClass("/orders")}`} to="/orders" onClick={closeNavbar}>Orders</Link>
              </li>
              <UpdateProduct />
            </ul>
            <div className="d-flex flex-column flex-sm-row ms-auto mt-sm-0">
              {isHomePage && <div className="flex-grow-1 me-sm-2 mb-2 mb-sm-0"><Searchbar onCloseNavbar={closeNavbar} /></div>}
              <button className="btn btn-outline-dark" type="button" onClick={() => setShowLogoutModal(true)}>Sign Out</button>
            </div>
          </div>
        </div>
      </nav>
      <LogoutModal show={showLogoutModal} onConfirm={handleLogout} onCancel={() => setShowLogoutModal(false)} />
    </>
  );
};

export default Navbar;
