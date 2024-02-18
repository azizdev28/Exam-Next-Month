import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.scss";
import { toast } from "react-toastify";

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
      <div></div>
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
      </div>
    </div>
  );
};

export default Login;
