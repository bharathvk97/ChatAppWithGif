import React, { useState, useMemo } from "react";
import CountryList from "react-select-country-list";
import validator from "validator";

function SignUp() {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    country: "",
    gender: "",
  });

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isPhnValid, setIsPhnValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confrmPasswordError, setConfrmPasswordError] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [countryCode, setCountryCode] = useState("");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValid(emailRegex.test(value));
  };
  // phone number validation
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    setIsPhnValid(true);
  };
  //country change
  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  //password validation
  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const handlePasswordChange = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    const NewPasswordInput = {
      ...passwordInput,
      [passwordInputFieldName]: passwordInputValue,
    };
    setPasswordInput(NewPasswordInput);
  };
  const handleValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    //for password
    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPasswordError(errMsg);
    }
    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" &&
        passwordInput.confirmPassword.length > 0)
    ) {
      if (passwordInput.confirmPassword !== passwordInput.password) {
        setConfrmPasswordError("Confirm password is not matched");
      } else {
        setConfrmPasswordError("");
      }
    }
  };

  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (phoneNumber.match(/^\d{10}$/)) {
      // Phone number is valid (exactly 10 digits)
      console.log("Phone number is valid");
    } else {
      // Phone number is not valid
      setIsPhnValid(false);
    }
  };

  return (
    <>
      <div className="container-signup">
        <img src="img/logo.svg" alt="" className="logo" />
        <div className="signup-form">
          <h3 className="account">Create your account</h3>
          <p className="quick">it's quick and easy</p>

          <form className="sign-up" onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              id="full-name"
              placeholder="Your Full Name"
              required="required"
            />
            <br />
            <input
              type="text"
              name=""
              id="full-name"
              placeholder="Email address"
              onChange={handleEmailChange}
             
              style={{ borderColor: submitted && !isValid ? "red" : "" }}
            />
            {submitted && !isValid && (
              <p style={{ color: "red" }}>Invalid email address</p>
            )}
            <br />
            {/* ........password........ */}
            <input
              type={passwordType}
              name="password"
              id="password"
              placeholder="Password"
              value={passwordInput.password}
              onChange={handlePasswordChange}
              onKeyUp={handleValidation}
              
            />
            {passwordType === "password" ? (
              <i
                onClick={togglePassword}
                className="fa fa-eye-slash"
                style={{
                  marginTop: "-49px",
                  display: "flex",
                  position: "absolute",
                  backgroundColor: "transparent",
                  marginLeft: "400px",
                }}
              ></i>
            ) : (
              <i
                onClick={togglePassword}
                className="fa fa-eye"
                style={{
                  marginTop: "-49px",
                  display: "flex",
                  position: "absolute",
                  backgroundColor: "transparent",
                  marginLeft: "400px",
                }}
              ></i>
            )}
            <p className="text-danger">{passwordError}</p>
            <input
              type={passwordType}
              name="confirmPassword"
              id="conf-pass"
              placeholder="Confirm Password"
              value={passwordInput.confirmPassword}
              onKeyUp={handleValidation}
              onChange={handlePasswordChange}
            />
            {passwordType === "password" ? (
              <i
                onClick={togglePassword}
                className="fa fa-eye-slash"
                style={{
                  marginTop: "-49px",
                  display: "flex",
                  position: "absolute",
                  backgroundColor: "transparent",
                  marginLeft: "400px",
                }}
              ></i>
            ) : (
              <i
                onClick={togglePassword}
                className="fa fa-eye"
                style={{
                  marginTop: "-49px",
                  display: "flex",
                  position: "absolute",
                  backgroundColor: "transparent",
                  marginLeft: "400px",
                }}
              ></i>
            )}
            <p className="text-danger">{confrmPasswordError}</p>
            <br />
            {/*........ country ..................*/}
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => handleCountryChange(e.target.value)}
            >
              <option value="">Select Country</option>
              {CountryList()
                .getData()
                .map((country) => (
                  <option key={country.value} value={country.label}>
                    {country.label}
                  </option>
                ))}
            </select>
            {/*........ phone numer ..................*/}
            <input
              type="tel"
              name=""
              id="phoneNumber"
              placeholder="Phone Number"
              // value={phoneNumber}
              onChange={handlePhoneChange}
              className={isPhnValid ? "valid" : "invalid"}
            />
            {!isPhnValid && (
              <p className="error" style={{ color: "red" }}>
                Please enter a 10-digit phone number.
              </p>
            )}
            {/* ....gender ...... */}
            <div className="radio-div">
              <label className="gender" htmlFor="">
                {" "}
                Gender
              </label>{" "}
              <br />
              <input type="radio" name="gender" id="female" />{" "}
              <label className="female" htmlFor="">
                {" "}
                Female
              </label>
              <input type="radio" name="gender" id="male" />{" "}
              <label htmlFor=""> Male</label>
              <input type="radio" name="gender" id="other" />{" "}
              <label htmlFor=""> Other</label> <br />
              <br />
            </div>{" "}
            <br />
            <button className="login-btn">Continue</button>
            <p className="sign-up-btn">
              Already have an account? <a href="">Log in</a>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
