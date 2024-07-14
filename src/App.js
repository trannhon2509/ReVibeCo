import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import "./styles.css"
import ShoppingCard from './pages/ShoppingCard';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import DashBoard from './pages/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<Shop />} />
        <Route path="/shoppingcard" element={<ShoppingCard />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/order" element={<Order />} /> 
        <Route path="/dashboard" element={<DashBoard/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
