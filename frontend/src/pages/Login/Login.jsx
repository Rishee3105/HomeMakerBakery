import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { setIsAuthenticated } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Please enter your email.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Please enter your password.");
      valid = false;
    }

    if (!valid) return;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        { email, password }
      );

      if (response.data.success) {
        console.log("Login Successful!", response.data);
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        toast.success("Login Successful");

        if (response.data.message === "admin") {
          navigate("/homeadmin");
        } else if (response.data.message === "user") {
          navigate("/homeuser");
        } else if (response.data.message === "baker") {
          navigate("/homebaker");
        }
      } else {
        toast.error("Login failed: " + response.data.message);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <div className="image-container">
            <img
              src="/images/bac.jpg"
              alt="Cookies"
              className="cookies-image"
            />
          </div>
          <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>
                  <FaEnvelope className="icon" /> Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error">{emailError}</p>}
              </div>
              <div className="form-group">
                <label>
                  <FaLock className="icon" /> Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="error">{passwordError}</p>}
              </div>
              <button type="submit" className="Login-button">
                Login
              </button>
              <h4 className="account">
                Don't Have an Account?<Link to="/signup"> Sign up</Link>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
