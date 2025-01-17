import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import UpdateProductPage from "./pages/UpdateProductPage";
import AddProductPage from "./pages/AddProductPage";
import DeleteProductPage from "./pages/DeleteProductPage";
import OrdersPage from "./pages/OrdersPage";
import StocksPage from "./pages/StockesPage";
import Single from "./pages/Single";
import AdminLoginPage from "./pages/AdminLoginPage";
import LogoutModal from "./components/extras/LogoutModal"; // Adjust path if needed

const App = () => {
  const title = "The Trendzy";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for modal

  // Function to handle login
  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "thetrendzy") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLogoutModal(false); // Close modal after logout
  };

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>
        {isAuthenticated && (
          <Navbar
            title={title}
            onLogout={() => setShowLogoutModal(true)} // Show modal on logout click
          />
        )}
        <Routes>
          <Route path="/login" element={<AdminLoginPage onLogin={handleLogin} />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/update-product" element={<ProtectedRoute><UpdateProductPage /></ProtectedRoute>} />
          <Route path="/add-product" element={<ProtectedRoute><AddProductPage /></ProtectedRoute>} />
          <Route path="/delete-product" element={<ProtectedRoute><DeleteProductPage /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
          <Route path="/stocks" element={<ProtectedRoute><StocksPage /></ProtectedRoute>} />
          <Route path="/single/:id" element={<ProtectedRoute><Single /></ProtectedRoute>} />
        </Routes>

        {/* Logout Modal */}
        <LogoutModal
          show={showLogoutModal}
          onConfirm={handleLogout}
          onCancel={() => setShowLogoutModal(false)} // Close modal on cancel
        />
      </div>
    </Router>
  );
};

export default App;
