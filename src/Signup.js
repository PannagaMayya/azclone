import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorIcon from "@mui/icons-material/Error";
import { auth, reg, updatename } from "./appFirebase/firebase";
function Signup() {
  const history = useNavigate();
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signup, setSignup] = useState({ name: "", email: "", password: "" });
  const Signup = ({ name, email, password }) => {
    setErr(false);
    setIsLoading(true);
    reg(auth, email, password)
      .then((info) => {
        console.log(info);

        updatename(info.user, {
          displayName: name,
        })
          .then(() => {
            history("/");
            setIsLoading(false);
          })
          .catch((e) => {
            setIsLoading(false);
            setErr(true);
            setSignup({ name: "", email: "", password: "" });
          });
      })
      .catch((err) => {
        setErr(true);
        setIsLoading(false);
        setSignup({ ...signup, email: "", password: "" });
      });
  };
  return isLoading ? (
    <Loading />
  ) : (
    <div className="signup">
      <Link to="/" className="signup__logo">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="amazonlogo"
        ></img>
      </Link>
      <div
        className="login_error"
        style={err ? { color: "red", display: "flex" } : { display: "none" }}
      >
        <ErrorIcon />
        There was a problem, please try with different email
      </div>
      <div className="signup__container">
        <h1 style={{ fontWeight: 450 }}>Create Account</h1>
        <form
          className="signup__form"
          onSubmit={(e) => {
            e.preventDefault();
            Signup(signup);
          }}
        >
          <h5 style={{ fontWeight: 700 }}>Your Name</h5>
          <input
            type="text"
            placeholder="First and last name"
            value={signup.name}
            onChange={(e) => setSignup({ ...signup, name: e.target.value })}
            required
          ></input>
          <h5 style={{ fontWeight: 700 }}>Email</h5>
          <input
            type="email"
            placeholder="Email"
            value={signup.email}
            onChange={(e) => setSignup({ ...signup, email: e.target.value })}
            required
          ></input>
          <h5 style={{ fontWeight: 700 }}>Password</h5>
          <input
            type="password"
            placeholder="At least 6 characters"
            value={signup.password}
            minLength="6"
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
            required
          ></input>

          <p style={{ fontSize: "0.8em" }}>
            By enrolling your email, you consent to receive notifications from
            Amecon.
          </p>
          <button className="signup__continue" type="submit">
            Continue
          </button>
        </form>
        <p style={{ fontSize: "0.8em" }}>
          Already have an account?{" "}
          <Link to="/login" className="product__Link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
