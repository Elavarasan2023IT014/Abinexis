import React from 'react';
import Homepage from './Pages/Home/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Product/shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop/:category" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;