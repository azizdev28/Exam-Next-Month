import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Dishes from "./Page/Dishes/Dishes";
import Home from "./Page/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DishesShop from "./Page/DishesShoop/DishesShoop";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="dishes"
            element={isLoggedIn ? <Dishes /> : <Navigate to="/login" />}
          />
          <Route
            path="/dishesshop"
            element={isLoggedIn ? <DishesShop /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
