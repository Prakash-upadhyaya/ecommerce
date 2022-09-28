import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/ProductContext";
import "../../styling/dispatchProduct.css";

function GetOrderAddress() {
  const add = localStorage.getItem("DELIVERY_ADDRESS");
  if (add) {
    return JSON.parse(add);
  } else return [];
}

function DispatchProduct() {
  const { dispatch } = GlobalContext();
  const [ordered, setOrdered] = useState(GetOrderAddress());
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    code: "",
  });
  const history = useNavigate();

  const { name, email, phone, address, state, code } = userInfo;

  function handleSubmit() {
    if (!name || !email || !phone || !address || !state || !code) {
      alert("All fields required");
    } else {
      const Order_data = {
        orderId: new Date().getTime().toString(),
        ...userInfo,
      };
      setOrdered([...ordered, Order_data]);
      alert("Order Placed");
      dispatch({ type: "ORDER_DISPTACHED", payload: [] });
      setTimeout(() => {
        history("/home");
      }, 0);
    }
  }

  function handleInput(e) {
    return setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    localStorage.setItem("DELIVERY_ADDRESS", JSON.stringify(ordered));
  }, [ordered]);
  return (
    <>
      <div className="deatls-form">
        <h3>Please Fill the details</h3>
        <label htmlFor="Name" className="form-lable">
          Enter your Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          onChange={(e) => handleInput(e)}
        />
        <label htmlFor="Name" className="form-lable">
          Enter Email Address
        </label>
        <input
          type="email"
          name="email"
          value={email}
          className="form-control"
          onChange={(e) => handleInput(e)}
        />
        <label htmlFor="Name" className="form-lable">
          Enter Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={phone}
          className="form-control"
          onChange={(e) => handleInput(e)}
        />
        <label htmlFor="Name" className="form-lable">
          Enter Delivery Address
        </label>
        <textarea
          name="address"
          value={address}
          className="form-control"
          onChange={(e) => handleInput(e)}
        />
        <label htmlFor="Name" className="form-lable">
          Enter the State
        </label>
        <input
          type=" text"
          name="state"
          value={state}
          className="form-control"
          onChange={(e) => handleInput(e)}
        />
        <label htmlFor="Name" className="form-lable">
          Enter Postal Code
        </label>
        <input
          type="text"
          name="code"
          value={code}
          className="form-control"
          onChange={(e) => handleInput(e)}
        />
        <br />
        {/* <Link
          to="/home"
          onClick={handleSubmit}
          className="btn btn-dark order-now"
        >
          Order Now
        </Link> */}

        <button onClick={handleSubmit} className=" btn btn-success">
          Order
        </button>
      </div>
    </>
  );
}

export default DispatchProduct;
