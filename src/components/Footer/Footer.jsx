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

        <div className="LineFooter"></div>
        <div className="SetSiteFooter">
          <p>© 2023 EATLY All Rights Reserved.</p>
          <div className="IconSites">
            <a href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/YOUR_FACEBOOK_PAGE">
              <FaFacebookSquare />
            </a>
            <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/YOUR_TWITTER_HANDLE">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
