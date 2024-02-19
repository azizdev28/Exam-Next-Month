import React, { useState, useEffect } from "react";
import { FaStar, FaPlusCircle } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import LoadingPage from "../LoadingPage";
import useProductStore from "../../app/store";
import "../TopDishes/TopDishes.scss";
import DishesShoop from "../../Page/DishesShoop/DishesShoop";

const TopDishes = () => {
  const { products, fetchProducts } = useProductStore();
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("price");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productsPerPage = 10;

  useEffect(() => {
    fetchProducts()
      .then(() => setIsLoading(false))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (selectedStatus === "All") {
        return true;
      } else {
        return product.status === selectedStatus;
      }
    });

    const sortProducts = () => {
      const sorted = [...filteredProducts].sort((a, b) => {
        if (sortBy === "price") {
          return a.price - b.price;
        } else if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else {
          return 0;
        }
      });
      setSortedProducts(sorted);
    };

    sortProducts();
  }, [products, selectedStatus, sortBy]);

  useEffect(() => {
    const filteredProducts = sortedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [sortedProducts, searchTerm]);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const startIndex = pageNumber * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const setLocalStr = (id, img, name, price, count) => {
    let korzinaArr = JSON.parse(localStorage.getItem("korzina")) || [];
    korzinaArr = [...korzinaArr, { id, img, name, price, count }];
    localStorage.setItem("korzina", JSON.stringify(korzinaArr));
  };

  return (
    <div className="TopDishes">
      {isLoading && <LoadingPage />}
      <h2 className="my-5">
        Our Top <span className="SpanHeading">Dishes</span>
      </h2>
      <div className="FormSection">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Supreme">Supreme</option>
          <option value="Trending">Trending</option>
          <option value="Healthy">Healthy</option>
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="price">Price</option>
          <option value="name">A-Z</option>
        </select>
      </div>
      <div className="DishesGrid">
        {filteredProducts.length === 0 ? (
          <p>No dishes found.</p>
        ) : (
          filteredProducts.slice(startIndex, endIndex).map((product) => (
            <div className="DishesCard" key={product.id}>
              <img src={product.img} alt="Our Top Dishes" />
              <span
                className={` ${
                  product.status === "Supreme" ? "supreme" : ""
                } || ${product.status === "Trending" ? "trending" : ""} || ${
                  product.status === "Healthy" ? "healthy" : ""
                }`}
              >
                {product.status}
              </span>
              <h3>{product.name}</h3>
              <p>
                {product.time}
                <FaStar /> {product.star}
              </p>
              <div className="BtnShop">
                <h4>{product.price}</h4>
                <button
                  onClick={() =>
                    setLocalStr(
                      product.id,
                      product.img,
                      product.name,
                      product.price,
                      1
                    )
                  }
                  className="FaPlusCircleBtn"
                >
                  <FaPlusCircle className="FaPlusCircle" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default TopDishes;
