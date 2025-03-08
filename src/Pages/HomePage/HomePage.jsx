import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"; // Import logout icon
import "./HomePage.css"; // Import the CSS file

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || "Guest"; // Retrieve username

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      sessionStorage.clear();
      navigate("/", { replace: true });

      window.history.pushState(null, "", "/");
      window.onpopstate = () => {
        window.history.go(1);
      };
    }
  };

  return (
    <div className="container">
      {/* Logout Button */}
      <button onClick={handleLogout} className="logout-button">
        <FaSignOutAlt className="logout-icon" /> Logout
      </button>

      {/* Centered Content */}
      <h1 className="title">Hello, {username}!</h1>
    </div>
  );
}

export default HomePage;
