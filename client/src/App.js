import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./components/Forms/AddBook";
import EditBook from "./components/Forms/EditBook";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/add-book" element={<AddBook />}></Route>
        <Route path="/books/edit-book/:bookId" element={<EditBook />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
