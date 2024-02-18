import React from "react";
import "../../components/Main/Main.scss";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineBookmark } from "react-icons/md";
import HeroWrapper from "../../assets/img/HeroWrapper.png";
// import ColorBg from "../../assets/img/ColorBg.png";
import PhoneMainImage from "../../assets/img/PhoneMainImage.png";
import BgImg from "../../assets/img/BgImg.png";
import TopDishes from "../TopDishes/TopDishes";
import Purchases from "../Purchases/Purchases";
import CustomerSay from "../CustomerSay/CustomerSay";
const Main = () => {
  return (
    <div className="container ">
      {/* HeaderWrapper */}
      <div className="HeaderWrapper">
        <div className="WrapperInfo">
          <div className="OpaySite">
            <span className="lineSpan"></span>
            <p> OVER 1000 USERS</p>
          </div>
          <h2>
            Enjoy Foods All Over The <span>World</span>
          </h2>

          <p>
            EatLy help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
            Get a <span>$20 bonus</span>.
          </p>
          <a href="#">Get Started</a>
        </div>
        <div className="HeroImg">
          <img src={HeroWrapper} alt="HeroWrapper" />
        </div>
      </div>
      {/*StatikSection  */}
      <div className="StatikSection">
        <div>
          <h3>10K+ </h3>
          <p>Satisfied Costumers All Great Over The World </p>
        </div>
        <span className="lineMain"></span>
        <div>
          <h3>4M</h3>
          <p>Healthy Dishes Sold Including Milk Shakes Smooth</p>
        </div>
        <span className="lineMain"></span>
        <div>
          <h3>99.99%</h3>
          <p>Reliable Customer Support We Provide Great Experiences</p>
        </div>
      </div>
      {/* QualitySection */}
      <div className="QualitySection">
        <div className="QualitySectionImg">
          <img src={PhoneMainImage} alt="" />
        </div>
        <div className="QualitySectionInfo">
          <h2>
            Premium <span>Quality</span> For Your Health
          </h2>
          <p className="DotSpan">
            • Premium quality food is made with ingredients that are packed with
            essential vitamins, minerals.
          </p>
          <p>
            • These foods promote overall wellness by support healthy digestion
            and boosting immunity
          </p>

          <a href="#">
            Download <FaArrowRight />{" "}
          </a>
        </div>
      </div>

      <div className="TheChickenKing">
        <img src={BgImg} alt="" />
        <div className="Info">
          <div>
            <h3>The Chicken King</h3>
          </div>

          <div className="TestLine">
            <span>
              24min • <FaStar className="Star" /> 4.8
            </span>

            <a href="#">
              <MdOutlineBookmark className="Save" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <TopDishes />
      </div>

      <div>
        <Purchases />
      </div>

      <div>
        <CustomerSay />
      </div>
    </div>
  );
};

export default Main;
