import "./BakerRegister.css";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaStore,
  FaPhone,
  FaHome,
  FaCreditCard,
  FaLink,
} from "react-icons/fa";
import axios from "axios";
import Navbar from "../Navbar/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function BakerRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setBakerName] = useState("");
  const [bakeryname, setBakeryName] = useState("");
  const [mobilenumber, setPhone] = useState("");
  const [bakeryaddress, setAddress] = useState("");
  const [bankAccNumber, setBankAccNumber] = useState("");
  const [gender, setGender] = useState("");
  const [bakerlink, setBakerLink] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    setEmail("");
    setPassword("");
    setAddress("");
    setBakerName("");
    setBakeryName("");
    setBankAccNumber("");
    setPhone("");
    setGender("");
    setBakerLink("");

    if (!email) {
      alert("Please enter your email.");
      valid = false;
    }

    if (!password) {
      alert("Please enter your password.");
      valid = false;
    }

    if (!name) {
      setBakerName("Please enter your Name.");
      valid = false;
    }

    if (!bakeryname) {
      setBakeryName("Please enter your Bakery Name.");
      valid = false;
    }
    if (!mobilenumber) {
      alert("Please enter your Phone Number.");
      valid = false;
    }

    if (!bakeryaddress) {
      setAddress("Please enter your Address.");
      valid = false;
    }

    if (!bankAccNumber) {
      alert("Please enter your Account Details.");
      valid = false;
    }
    if (!gender) {
      alert("Please select your gender.");
      valid = false;
    }

    if (!valid) return;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/baker/registerBaker",
        {
          email,
          password,
          name,
          bakeryname,
          mobilenumber,
          bakeryaddress,
          bankAccNumber,
          bakerlink,
          gender,
        }
      );
      if (response.data.success) {
        toast.success("Register Successfully");
        console.log("Registration Successful!", response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/login");
        console.log("baker");
      } else {
        alert("Registration failed: " + response.data.message);
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="Register-form">
          <div className="Register-title">
            <h1>Register as a Baker</h1>
          </div>
          <div className="Register-formfield">
            <form onSubmit={handleSubmit}>
              <div className="Register-formfield">
                <div className="register-form-group-name">
                  <label>
                    <FaUser className="icon" /> Baker Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setBakerName(e.target.value)}
                    required
                  />
                </div>
                <div className="register-form-group-name">
                  <label>
                    <FaStore className="icon" /> Bakery Name
                  </label>
                  <input
                    type="text"
                    value={bakeryname}
                    onChange={(e) => setBakeryName(e.target.value)}
                    required
                  />
                </div>
                <div className="register-form-group-full">
                  <label>Gender</label>
                  <div className="gender-options">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={(e) => setGender(e.target.value)}
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={(e) => setGender(e.target.value)}
                      />{" "}
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={gender === "Other"}
                        onChange={(e) => setGender(e.target.value)}
                      />{" "}
                      Other
                    </label>
                  </div>
                </div>
                <div className="register-form-group">
                  <label>
                    <FaEnvelope className="icon" /> Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="register-form-group">
                  <label>
                    <FaPhone className="icon" /> Phone No.
                  </label>
                  <input
                    type="phone"
                    value={mobilenumber}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="register-form-group-full">
                  <label>
                    <FaLock className="icon" /> Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="register-form-group-full">
                  <label>
                    <FaHome className="icon" /> Address
                  </label>
                  <input
                    type="text"
                    value={bakeryaddress}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="register-form-group-full">
                  <label>
                    <FaLink className="icon" /> Facebook / Instagram link - not
                    required
                  </label>
                  <input
                    type="text"
                    value={bakerlink}
                    onChange={(e) => setBakerLink(e.target.value)}
                  />
                </div>
                <div className="register-form-group-full">
                  <label>
                    <FaCreditCard className="icon" /> Bank Account Number
                  </label>
                  <input
                    type="text"
                    value={bankAccNumber}
                    onChange={(e) => setBankAccNumber(e.target.value)}
                  />
                </div>
                <button type="submit" className="Register-button">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BakerRegister;
