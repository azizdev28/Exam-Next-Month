import React, { useState, useEffect } from "react";
import "../DishesShoop/DishesShoop.scss";
import oneSt from "../../assets/img/First.png";

const DishesShoop = () => {
  const [korzinaArr, setKorzinaArr] = useState([]);

  useEffect(() => {
    const storedKorzina = JSON.parse(localStorage.getItem("korzina"));
    if (storedKorzina) {
      setKorzinaArr(storedKorzina);
    }
  }, []);

  const handleIncrement = (index) => {
    const updatedKorzinaArr = [...korzinaArr];
    updatedKorzinaArr[index].count++;
    setKorzinaArr(updatedKorzinaArr);
    localStorage.setItem("korzina", JSON.stringify(updatedKorzinaArr));
  };

  const handleDecrement = (index) => {
    const updatedKorzinaArr = [...korzinaArr];
    if (updatedKorzinaArr[index].count > 1) {
      updatedKorzinaArr[index].count--;
      setKorzinaArr(updatedKorzinaArr);
      localStorage.setItem("korzina", JSON.stringify(updatedKorzinaArr));
    }
  };

  let subPrice = 0;
  korzinaArr.forEach((product) => {
    subPrice += Number(product?.price.replace("$", "")) * product?.count;
  });

  return (
    <div className="container">
      <div>
        <div className="DishesShoopCards">
          {korzinaArr.map((product, index) => (
            <div key={index} className="DishesShoopCard">
              <div className="shoopCardSave">
                <img src={product.img} alt={product?.img} />
                <div>
                  <h3>{product?.name}</h3>
                  <p>{product?.price}</p>
                </div>
              </div>
              <div className="ShoopCaunt">
                <span>
                  <button onClick={() => handleDecrement(index)}>-</button>
                  <h3>{product?.count}</h3>
                  <button onClick={() => handleIncrement(index)}>+</button>
                </span>
                <p>
                  ${Number(product?.price.replace("$", "")) * product?.count}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="ProductPrice">
          <ul>
            <li>
              <h3>Subtotal</h3>
              <p>${subPrice.toFixed(2)}</p>
            </li>
            <li>
              <h3>Delivery</h3>
              <p>$3.59</p>
            </li>
            <span>
              <h2>Total</h2>
              <p>${(subPrice + 3.59).toFixed(2)}</p>
            </span>
            <button>Review Payment</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DishesShoop;
