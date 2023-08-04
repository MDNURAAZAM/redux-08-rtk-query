import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
