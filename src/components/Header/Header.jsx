import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/img/LogoEatly.svg";
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState("false");

  const handleClick = () => {
    setOpen(true);
    console.log("true");
  };
  return (
    <div className="Header">
      <div className="Navbar container d-flex  align-items-center">
        <div className="NavbarLeft">
          <div className="Logo">
            <NavLink to="/">
              <img src={Logo} alt="LogoEatly" />
            </NavLink>
            <h2>eatly</h2>
          </div>
          <ul className="ListItem">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dishes">Dishes</NavLink>
            </li>
          </ul>
        </div>

        <div className="NavbarRight">
          <NavLink to="/dishesshop">
            <FaShoppingCart />
          </NavLink>
          <NavLink to="/login" className="Login">
            Login
          </NavLink>
          <NavLink to="/register" className="SignUp">
            Sign Up
          </NavLink>
        </div>
        <div className="BurgerBtn">
          <button onClick={handleClick}>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
