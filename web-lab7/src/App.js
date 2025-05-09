import React from 'react';
import "./App.css"
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Catalog from './components/Catalog/Catalog.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;