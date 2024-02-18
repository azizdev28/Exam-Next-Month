import React from "react";
import "../CustomerSay/CustomerSay.scss";

import Slider from "react-slick";
// import SliderComponent from "../Slider/SliderComponent";
import { FaRegStar } from "react-icons/fa";
import BrandFace from "../../assets/img/BrandFace.png";
import PathImg from "../../assets/img/PathImg.png";
const CustomerSay = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="CustomerSay">
      <h2>
        Customer <span>Say</span>
      </h2>

      <div className="ListCardSay">
        <div className="CardSay">
          <div className="CardSayInfo">
            <div className="CardSaySlider">
              <img src={BrandFace} alt="PathImg" />
              <div>
                <h3>Alexander R.</h3>
                <p>01 Year With Us </p>
              </div>
            </div>
            <div className="iconSay">
              <img src={PathImg} alt="PathImg" />
            </div>
          </div>
          <div className="BrandInfoSay">
            <p>
              “ Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time ”
            </p>
          </div>
          <div className="StarSay">
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </div>
        </div>
        <div className=" SliderSection">
          <Slider {...settings}>
            <div>
              <p>
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <span>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </span>
            </div>
            <div>
              <p>
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <span>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </span>
            </div>
          </Slider>
        </div>
        {/* <div className="SilderCard">
          <SliderComponent />
        </div> */}
      </div>
    </div>
  );
};

export default CustomerSay;
