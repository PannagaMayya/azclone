import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
        alt="amazonlogo"
      ></img>
      <div className="login__container">
        <h1 style={{ fontWeight: 450 }}>Sign In</h1>
        <form className="login__form">
          <h5 style={{ fontWeight: 700 }}>Email or mobile phone number</h5>
          <input type="email"></input>
          <h5 style={{ fontWeight: 700 }}>Password</h5>
          <input type="password"></input>
          <button className="login__signin">Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amecon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="login__new">
        <p style={{ fontSize: "14px", fontWeight: 350, margin: "2px" }}>
          New to Amazon?
        </p>
        <button className="login__signup">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
