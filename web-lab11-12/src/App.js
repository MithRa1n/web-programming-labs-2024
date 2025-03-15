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
import Checkout from './components/Checkout/Checkout';
import Success from './components/Checkout/Success';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import ProtectedRoute from './components/Login/ProtectedRoute';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog"
            element={
              <ProtectedRoute>
                <Catalog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog/:id"
            element={
              <ProtectedRoute>
                <DetailedOverview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <Success />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </Provider>
  );
};

export default App;
