import React from "react";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
