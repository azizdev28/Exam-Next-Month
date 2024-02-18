import React from "react";
import "../Purchases/Purchases.scss";
import PurchaseIllustration from "../../assets/img/PurchaseIllustration.png";
import onest from "../../assets/img/1st.png";
const Purchases = () => {
  return (
    <div className="Purchases">
      <div className="PurchasesCards">
        <h2>
          Control Purchases Via <span>Dashboard</span>
        </h2>
        <img src={onest} alt="onest" />
        <img src={onest} alt="onest" />
        <img src={onest} alt="onest" />
      </div>
      <div className="PurchasesCard">
        <img src={PurchaseIllustration} alt="PurchaseIllustration" />
      </div>
    </div>
  );
};

export default Purchases;
