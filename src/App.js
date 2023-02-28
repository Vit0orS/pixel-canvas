import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Canvas from './pages/Canvas';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
