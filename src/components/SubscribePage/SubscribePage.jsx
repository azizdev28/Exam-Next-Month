import React from "react";
import "../SubscribePage/SubscribePage.scss";
import First from "../../assets/img/First.png";
const SubscribePage = () => {
  return (
    <div className="SubscribePage">
      <div>
        <h1>GET 50%</h1>
        <form>
          <input type="email" placeholder=" Enter Your Email Address" />
          <button type="submit">subscribe</button>
        </form>
      </div>
      <div>
        <img src={First} alt="" />
      </div>
    </div>
  );
};

export default SubscribePage;
