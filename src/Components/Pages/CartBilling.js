import React from "react";
import "../../styling/DisplayProduct.css";
import { GlobalContext } from "../Context/ProductContext";
import { Icon } from "react-icons-kit";
import { iosTrash } from "react-icons-kit/ionicons/iosTrash";
import TotalBill from "./TotalBill";
import { Link } from "react-router-dom";
function CartBilling() {
  const {
    state: { cart },
    dispatch,
  } = GlobalContext();

  return (
    <>
      <h3 className="cart-text">CART</h3>
      <Link to="/home" className="home-btn">
        Back
      </Link>
      {cart.length > 0 ? (
        <div className="container-fluid ">
          <div className="row cart">
            <div className="col-1" />
            <div className="col-7 ">
              <table class="table table-bordered">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Desc</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Remove</th>
                </tr>

                {cart.map((prod) => {
                  return (
                    <>
                      <tr className="item-row">
                        <td style={{ padding: "10px" }}>
                          <img
                            src={prod.images[0]}
                            className="card-img-top"
                            alt="..."
                            width="100%"
                            height="100px"
                          />
                        </td>
                        <td>{prod.title}</td>
                        <td style={{ width: "200px" }}>{prod.description}</td>
                        <td>
                          <b>₹ {prod.price}</b>
                        </td>

                        <td>
                          <select
                            className="dropdown"
                            style={{ width: "100px" }}
                            onChange={(e) => {
                              dispatch({
                                type: "CHANGE_CART_QTY",
                                payload: { id: prod.id, qty: e.target.value },
                              });
                            }}
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                        </td>

                        <td>
                          <Icon
                            icon={iosTrash}
                            className="del-icon"
                            size="30px"
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod.id,
                              })
                            }
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
                <tbody></tbody>
              </table>
            </div>
            <div className="col-1" />
            <div className="col-3">
              <TotalBill />
            </div>
          </div>
        </div>
      ) : (
        <h3 style={{ textAlign: "center" }}>Please Add some Item to Cart !!</h3>
      )}
    </>
  );
}

export default CartBilling;
