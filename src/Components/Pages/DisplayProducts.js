import React, { useState } from "react";
import { GlobalContext } from "../Context/ProductContext";
import Pagination from "./Pagination";
import Filter from "./Filter";
import alternative_image from "../../img_alt.jpg";
import "../../styling/DisplayProduct.css";
import Debounce from "./Debounce";
function DisplayProducts() {
  const {
    state: { product, cart, sort, sortByPrice, serachProd },
    dispatch,
  } = GlobalContext();

  let sortedProd = product;

  const debounce = Debounce(serachProd, 1000);

  if (sort)
    sortedProd = sortedProd.filter((item) => item.category.name === sort); //shoes

  if (sortByPrice) {
    sortedProd = sortedProd.sort((a, b) =>
      sortByPrice === "LowTohigh" ? a.price - b.price : b.price - a.price
    );
  }

  if (debounce) {
    sortedProd = sortedProd.filter((items) =>
      items.title.toLowerCase().includes(serachProd.toLowerCase())
    );
  }

  //Pagination count
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const lastItem = currentPage * itemsPerPage; // 1 * 12 = 12
  const firstItem = lastItem - itemsPerPage; // 12 - 12 = 0
  const currentItem = sortedProd.slice(firstItem, lastItem);

  const paginate = (num) => {
    setCurrentPage(num);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 filter-fix">
            <Filter />
          </div>

          <div className="col-10">
            <div className="row">
              {currentItem.map((prod, index) => {
                return (
                  <>
                    <div className="col-sm-5 col-md-3" key={index}>
                      <div
                        className="card card-style"
                        style={{ width: "16rem" }}
                      >
                        <img
                          src={
                            prod.images[0] !== ""
                              ? prod.images[0]
                              : alternative_image
                          }
                          className="card-img-top"
                          alt="."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{prod.title}</h5>
                          <h4>
                            <i>Price:</i>₹ {prod.price}
                          </h4>
                          <p className="card-text">{prod.description} </p>
                        </div>
                      </div>
                      <br />
                      {cart.some((p) => p.id === prod.id) ? (
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod.id,
                            })
                          }
                        >
                          Remove from Cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={() =>
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: prod,
                            })
                          }
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Calculation */}
      {/* <div className="center"> */}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={sortedProd.length}
        paginate={paginate}
      />
      {/* </div> */}
    </>
  );
}

export default DisplayProducts;
