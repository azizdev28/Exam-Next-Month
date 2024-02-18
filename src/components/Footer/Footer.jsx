import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Logo from "../../assets/img/LogoEatly.svg";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <div className="Footer ">
      <div className="container">
        <div className="Logo">
          <a href="#">
            <img src={Logo} alt="LogoEatly" />
          </a>
          <h2>eatly</h2>
        </div>
        <div className="SetSiteFooter">
          <p>© 2023 EATLY All Rights Reserved.</p>
          <div className="IconSites">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
