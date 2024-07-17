import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Category from './pages/Category';
import Clothes from './pages/Clothes';

import Sports from './pages/Sports';
import Electronics from './pages/Electronics';
import Shoes from './pages/Shoes';
import { Home } from './pages/Home';
import ProductDetails from './pages/productDetails';
import { Order } from './pages/Order';
import { Cart } from './pages/Cart';
import Navbar from './pages/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/shoes" element={<Shoes />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
