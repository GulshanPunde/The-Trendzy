import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Add the necessary imports
import Navbar from "./components/Header/Navbar"; // Adjust the path based on where your Navbar component is saved.
import Home from "./pages/Home";
import UpdateProductPage from "./pages/UpdateProductPage";
import AddProductPage from "./pages/AddProductPage";
import DeleteProductPage from "./pages/DeleteProductPage";
import OrdersPage from "./pages/OrdersPage";
import StocksPage from "./pages/StockesPage";

const App = () => {
  const title = "The Trendzy";
  return (

    <Router> {/* Wrap everything in the Router component */}
      <div>
        <Navbar title={title} />
        {/* <div className="container mt-2">
          <h1>Welcome to The Trendzy....</h1>
          <p>This is the main content area. Navigate using the navbar above.</p>
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define the route for Home */}
          <Route path="/update-product" element={<UpdateProductPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="delete-product" element={<DeleteProductPage/>}/>
          <Route path="orders" element={<OrdersPage/>}/>
          <Route path="/stocks" element={<StocksPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
