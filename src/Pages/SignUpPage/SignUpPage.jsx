import React, { useState } from "react";
import './SignUpPage.css';

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add any additional logic here, like sending the data to a server.
    alert("Sign Up Successful!");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Sign Up</h2>
        
        <div>
          <label className="signup-label">Username</label>
          <input
            type="text"
            className="signup-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="signup-label">Password</label>
          <input
            type="password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="signup-label">Confirm Password</label>
          <input
            type="password"
            className="signup-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
