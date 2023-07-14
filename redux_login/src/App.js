import "./App.css";
import Login from "./components/Login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useSelector } from "react-redux";

import Welcome from "./components/Welcome";

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isLoggedIn ? <Welcome /> : <Login />} />
        <Route path="/welcome" element={isLoggedIn ? <Welcome /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
