import React from "react";
import "../Purchases/Purchases.scss";
// import PurchaseIllustration from "../../assets/img/PurchaseIllustration.png";
import SavingCard from "../../assets/img/SavingCard.png";
import First from "../../assets/img/First.png";
const Purchases = () => {
  return (
    <div className="Purchases">
      <div className="PurchasesCards">
        <h2>
          Control <span>Purchases </span>Via Dashboard
        </h2>

        <div className="PurchasesCard">
          <img src={First} alt="onest" />
          <div>
            <h2>Chicken Hell</h2>
            <p>On The Way</p>
          </div>
          <time>3:09 PM</time>
        </div>
        <div className="PurchasesCard">
          <img src={First} alt="onest" />
          <div>
            <h2>Swe Dish</h2>
            <p>Delivered</p>
          </div>
          <time>Yesterday</time>
        </div>
        <div className="PurchasesCard">
          <img src={First} alt="onest" />
          <div>
            <h2>Fish Hell Veg</h2>
            <p style={{ color: "#F1534E" }}>Cancelled</p>
          </div>
          <time>Yesterday</time>
        </div>
      </div>
      <div className="SavingCard">
        <img src={SavingCard} alt="SavingCard" />
      </div>
    </div>
  );
};

export default Purchases;
