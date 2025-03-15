import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import DetailedOverview from './components/Catalog/View';
import CartPage from './redux/cartPage';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Catalog" element={<Catalog />} />
          <Route path="catalog/:id" element={<DetailedOverview />} />
          <Route path="Cart" element={<CartPage />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </Provider>
  );
};

export default App;
