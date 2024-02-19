import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Login/Login.scss";
import { toast } from "react-toastify";
import HerroWrapper2 from "../../assets/img/HerroWrapper2.png";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (email === storedEmail && password === storedPassword) {
      toast.success("Muvofaqiyatli amalga oshirildi !!!");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      toast.error("Email yoki Parol xato");
    }
  };

  return (
    <div className="container LoginPage">
      <div className="LoginCard">
        <h2>Sign In To eatly</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign in</button>
        </form>
        <p>
          Create A New Account? <NavLink to="/register">Sign Up</NavLink>
        </p>
        <div className="LoginFooter">
          <p>Privacy Policy</p>
          <p>Copyright 2022</p>
        </div>
      </div>
      <div className="LoginBrand">
        <img src={HerroWrapper2} alt="HerroWrapper2" />
        <h2>Find Foods With Love </h2>
        <p>
          Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
          Including Asian, Chinese, Italians And Many More. Our Dashboard Helps
          You To Manage Orders And Money.
        </p>
      </div>
    </div>
  );
};

export default Login;
