import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
  const [loginVal, setLoginVal] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginVal;

  const history = useNavigate();

  function LoginUser(e) {
    setLoginVal({ ...loginVal, [e.target.name]: e.target.value });
  }
  function handleLogin() {
    const getUser = JSON.parse(sessionStorage.getItem("REGISTER"));
    //console.log(loginVal);
    if (!email || !password) {
      alert("Please provide Details");
    } else {
      if (getUser) {
        const userDeatils = getUser.filter((usr) => {
          return usr.email === email && usr.password === password;
        });

        if (userDeatils.length === 0) {
          alert("Invalid Deatils");
        } else {
          sessionStorage.setItem("LOGIN_SUCCESS", JSON.stringify(userDeatils));
          history("/home");
        }
      }
    }
  }
  return (
    <>
      <div className="login-form">
        <h3>Please Register Here</h3>
        <form>
          <lable htmlFor="Email">Enter Your Email</lable> <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => LoginUser(e)}
            className="form-control"
          />
          <br />
          <lable htmlFor="password">Enter Your Name</lable> <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => LoginUser(e)}
            className="form-control"
          />
          <br />
        </form>
        <button onClick={handleLogin} className="btn btn-success">
          Login
        </button>
        <p className="mt-3">
          Don't have account please regiter here{" : "}
          <span>
            <NavLink to="/" className={"register-text"}>
              Register
            </NavLink>
          </span>
        </p>
      </div>
    </>
  );
}

export default Login;

const x = { name: "Prakash" };
x["lastName"] = "Updhyaya";
console.log(x);

delete x.name;
console.log(x);
