import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import UpdateProductPage from "./pages/UpdateProductPage";
import AddProductPage from "./pages/AddProductPage";
import DeleteProductPage from "./pages/DeleteProductPage";
import OrdersPage from "./pages/OrdersPage";
import StocksPage from "./pages/StockesPage";
import Single from "./pages/Single";
import AdminLoginPage from "./pages/AdminLoginPage";

const App = () => {
  const title = "The Trendzy";
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "trendzy") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>
        {isAuthenticated && <Navbar title={title} onLogout={handleLogout} />}
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
      </div>
    </Router>
  );
};

export default App;