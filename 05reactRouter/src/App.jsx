import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Footer />
        <Home />
      </Router>
    </>
  );
}

export default App;
