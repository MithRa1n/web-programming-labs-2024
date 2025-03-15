import React from 'react';
import "./App.css"
import Header from './components/Header/Header.js';
import MovieList from './components/MovieList';
import Footer from './components/Footer/Footer.js';
import ViewMore from './components/ViewMore';
import { Heading } from "./components/Heading/Heading.js";

const App = () => {
  return (
    <div>
      <Header />
      <Heading />
      <MovieList />
      <ViewMore />
      <Footer />
    </div>
  );
};

export default App;
