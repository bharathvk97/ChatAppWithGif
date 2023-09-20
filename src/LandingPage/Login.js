import React from "react";
// import logo from '../public/img/typechat-logo-inner.svg'

function Login() {
  return (
    <>
      <div className="container-login">
        <img src="img/logo.svg" alt="" className="logo" />
      
      <div className="form">
        <h3 className="welcome-text" style={{ textAlign: "center" }}>Welcome back</h3>

        <div className="form-inner">
          <input type="text" name="" id="email" placeholder="Email address" /> <br />
          <input type="password" name="" id="pass" placeholder="Password" /> <br />
          <button className="login-btn">Continue</button>  
          <p className="login-up-btn"> Don't ave an  account? <a href="">Sign up</a> </p>
          <p className="login-up-btn" >Are you Forgot <a href="">Password</a> </p>
        
        </div>
        
      </div>
      </div>
    </>
  );
}

export default Login;
