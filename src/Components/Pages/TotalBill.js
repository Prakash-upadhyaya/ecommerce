import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/ProductContext";
function TotalBill() {
  const {
    state: { cart },
  } = GlobalContext();
  const [total, setTotal] = useState();
  const [cartQuantity, setCartQuantity] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  useEffect(() => {
    setCartQuantity(cart.reduce((acc, curr) => acc + Number(curr.qty), 0));
  }, [cart]);
  // console.log(cartQuantity);

  return (
    <>
      <h4>PRICE DETAILS</h4>
      <div className="row">
        <div class="card" style={{ width: "10rem" }}>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Items</li>
            <li class="list-group-item">Total Quantity</li>

            <li class="list-group-item">Discount</li>
          </ul>
          <div class="card-footer">Delivery</div>
        </div>
        <div class="card" style={{ width: "9rem" }}>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{cart.length}</li>
            <li class="list-group-item">{cartQuantity}</li>

            <li class="list-group-item">Not Applied</li>
          </ul>
          <div class="card-footer">FREE</div>
        </div>
      </div>
      <br />

      <h4>Total Amount</h4>
      <h4>₹ {total}</h4>

      <Link to="/dispatchproduct" className="btn btn-dark">
        Place your Order
      </Link>
    </>
  );
}

export default TotalBill;
