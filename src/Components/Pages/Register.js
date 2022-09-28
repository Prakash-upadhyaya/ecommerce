import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "../../styling/LoginPage.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GetLocalInfo() {
  const data = sessionStorage.getItem("REGISTER");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function Register() {
  const [userLogin, setUserLogin] = useState(GetLocalInfo());
  const [pass, setPass] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const history = useNavigate();

  const { name, email, password, confirmPass } = user;

  function CreateUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!name || !email || !password || !confirmPass) {
      alert("Fill all details");
    } else if (password !== confirmPass) {
      setPass(true);
    } else if (password.length < 5) {
      alert("Password is too short");
    } else {
      const userData = {
        id: new Date().getTime().toString(),
        ...user,
      };
      //console.log(userData);
      setUserLogin([...userLogin, userData]);
      setPass(false);

      //To give a deley to set the User info on setUserLogin() used setTimeOut() to wait for the
      //above code to exccute

      setTimeout(() => {
        history("/login");
      }, 0);
    }
  }

  useEffect(() => {
    sessionStorage.setItem("REGISTER", JSON.stringify(userLogin));
  }, [userLogin]);

  return (
    <>
      <div className="login-form">
        <h3>Please Register Here</h3>
        <form onSubmit={handleSubmit}>
          <lable htmlFor="Name">Enter Your Name</lable> <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => CreateUser(e)}
            className="form-control"
          />
          <br />
          <lable htmlFor="Name">Enter Your Email</lable> <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => CreateUser(e)}
            className="form-control"
          />{" "}
          <br />
          <lable htmlFor="password">Enter Password</lable> <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => CreateUser(e)}
            className="form-control"
          />
          <br />
          <lable htmlFor="password">Confirm Password</lable> <br />
          <input
            type="password"
            name="confirmPass"
            value={confirmPass}
            onChange={(e) => CreateUser(e)}
            className="form-control"
          />
          <br />
          {pass ? <p style={{ color: "red" }}>PassWord Didnot Match</p> : ""}
        </form>

        <button onClick={handleSubmit} className="btn btn-success">
          Register
        </button>
        <br />
        <p className="mt-3">
          Already Have an Account
          <span>
            <NavLink to="/login">SignIn</NavLink>
          </span>
        </p>
      </div>
    </>
  );
}

export default Register;
