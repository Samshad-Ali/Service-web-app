import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import "./stylessheet/App.scss";
import "./stylessheet/Header.scss";
import "./stylessheet/Home.scss";
import './stylessheet/Footer.scss'
import './stylessheet/Contact.scss'
import './stylessheet/mediaQueries.scss'


import Contact from "./components/Contact";
import Services from "./components/Services";
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/services" element={ <Services/>} />
        <Route path="*" element={<h1>Page not Found 404</h1>} />
      </Routes>
      <Footer/>
    </Router>
  );
};
export default App;
