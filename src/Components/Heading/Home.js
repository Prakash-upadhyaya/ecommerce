import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GlobalContext } from "../Context/ProductContext";
import "../../styling/header.css";
import { useNavigate } from "react-router-dom";
import Icon from "react-icons-kit";
import { logOut } from "react-icons-kit/ionicons/logOut";
import { androidCart } from "react-icons-kit/ionicons/androidCart";

function Home() {
  const {
    state: { cart, serachProd },
    dispatch,
  } = GlobalContext();

  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("LOGIN_SUCCESS");
    history("/");
  };
  return (
    <>
      <div className="fix-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container">
            <Link to="/home " className="navbar-brand ">
              Shopping App
            </Link>

            <input
              type={"text"}
              value={serachProd}
              onChange={(e) =>
                dispatch({ type: "SEARCH_PROD", payload: e.target.value })
              }
            />
            <button
              onClick={() => dispatch({ type: "SEARCH_PROD", payload: "" })}
            >
              Clear
            </button>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"> </ul>
              <Link to="/cart" className="d-flex header-btn">
                {" "}
                <Icon
                  icon={androidCart}
                  style={{ color: " white" }}
                  size="30px"
                >
                  {" "}
                </Icon>{" "}
                <h4 className="cart-count"> {cart.length}</h4>
              </Link>{" "}
              {/* <button className="btn btn-success">Logout</button>{" "} */}
              <Icon
                className="logout-icon"
                icon={logOut}
                style={{ color: "white" }}
                onClick={handleLogout}
                size="30px"
              ></Icon>
            </div>
          </div>
        </nav>

        <Outlet />
      </div>
    </>
  );
}

export default Home;
