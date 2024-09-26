import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';

import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product-displayed" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

