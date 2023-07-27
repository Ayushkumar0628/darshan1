import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminlogin.css";
import {  useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate=useNavigate();

  const handleLogin = () => {
    // Replace these with the actual credentials you want to verify against
    const validUsername = "ayush";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
      setErrorMessage("");
      alert("Login successful!");
      navigate('/showlisting');
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container login-container">
      <h2 className="text-center">Admin Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary btn-block" onClick={handleLogin}>
        Login
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Adminlogin;

