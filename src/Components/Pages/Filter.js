import React from "react";
import { GlobalContext } from "../Context/ProductContext";
import "../../styling/header.css";
function Filter() {
  // const {
  //   state: { sort, sortByPrice },
  //   dispatch,
  // } = GlobalContext();

  const {
    state: { sort },
    dispatch,
  } = GlobalContext();

  function handleClear() {
    dispatch({ type: "CATEGORY", payload: "" });
  }

  // function ClearSort() {
  //   dispatch({ type: "SORT_BY_PRICE", payload: 0 });
  // }

  return (
    <>
      <div className="filter">
        <h4>FILTER</h4>
        <input
          type="radio"
          name="category"
          lable="Shoes"
          onChange={() => dispatch({ type: "CATEGORY", payload: "Shoes" })}
          checked={sort === "Shoes" ? true : false}
        />
        Shoes <br />
        <input
          type="radio"
          name="category"
          lable="Clothes"
          onChange={() => dispatch({ type: "CATEGORY", payload: "Clothes" })}
          checked={sort === "Clothes" ? true : false}
        />
        Clothes <br />
        <input
          type="radio"
          name="category"
          lable="Electronics"
          onChange={() =>
            dispatch({ type: "CATEGORY", payload: "Electronics" })
          }
          checked={sort === "Electronics" ? true : false}
        />
        Electronics
        <br />
        <input
          type="radio"
          name="category"
          lable="Furniture"
          onChange={() => dispatch({ type: "CATEGORY", payload: "Furniture" })}
          checked={sort === "Furniture" ? true : false}
        />
        Furniture
        <br />
      </div>
      <br />

      <button onClick={handleClear} className="btn btn-success">
        Clear Filter
      </button>
      {/* 
      <div>
        <h4>SORT BY PRICE </h4>
        <input
          type="radio"
          name="sort_by"
          onChange={() =>
            dispatch({
              type: "SORT_BY_PRICE",
              payload: "LowTohigh",
            })
          }
          checked={sortByPrice === "LowTohigh" ? true : false}
        />
        LoW-High
        <br />
        <input
          type="radio"
          name="sort_by"
          onChange={() =>
            dispatch({
              type: "SORT_BY_PRICE",
              payload: "HighToLow",
            })
          }
          checked={sortByPrice === "HighToLow" ? true : false}
        />
        High-Low
        <br />
        <br />
        <button onClick={ClearSort} className="btn btn-success">
          Clear Filter
        </button>
      </div> */}
    </>
  );
}

export default Filter;
