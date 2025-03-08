import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import PopupMessage from "../../Components/PopupMessage/popupMessage";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState({ type: "", message: "" }); // state to manage popup messages

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setPopup({ type: "error", message: "Please enter both username and password!" });
      return;
    }
    setPopup({ type: "success", message: "Login Successful!" });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>

        <div>
          <label className="login-label">Username</label>
          <input
            type="text"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="login-label">Password</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">Login</button>

        <p className="signup-link">
          Don't have an account? <Link to="/SignUpPage">Sign up here</Link>
        </p>
      </form>

      {/* Render PopupMessage with the appropriate type and message */}
      <PopupMessage type={popup.type} message={popup.message} />
    </div>
  );
}

export default LoginPage;
