import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Apropos from "./pages/Apropos/Apropos";
import Logement from "./pages/Logement/logement";
import Header from "./components/Header/Header";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer/Footer"
import "./App.css"



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
    </Router>
  </React.StrictMode>
);
