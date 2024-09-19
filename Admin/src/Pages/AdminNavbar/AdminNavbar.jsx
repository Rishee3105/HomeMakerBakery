import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AdminNavbar.css";
import { assets } from "../../../../frontend/images/assets"; // Assuming assets is correctly defined

const AdminNavbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="admin-nav">
      <img
        className="logo"
        src={"../../../../Image/Logo.png"}
        alt="Logo"
        height={"80px"}
        width={"250px"}
      />
      <Link className="loginbutton1" to="/">
        <img
          className="profile"
          src="../Image/logout.jpeg"
          alt="Profile Icon"
          height={"30px"}
          width={"30px"}
        />
      </Link>
      {/* {dropdownVisible && (
        <div className="dropdown-menu">
          <Link to="/adminprofile">Profile</Link>
          <a onClick={handleLogout} className="dropdown-item">
            Logout
          </a>
        </div>
      )} */}
    </div>
  );
};

export default AdminNavbar;
