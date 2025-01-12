import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa"; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginInfo = {
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:8080/auth/login", loginInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        toast.success("Login successful!"); 
        const { token } = response.data; 
        localStorage.setItem("authToken", token); 
        navigate("/home"); 
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError(error.response ? error.response.data.message : "Login failed. Please try again.");
      toast.error(error.response ? error.response.data.message : "Login failed. Please try again."); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <h2>EcoEats</h2>
        </div>
        <div className="welcome-message">WELCOME BACK!</div>
        <div className="quote">
          "Connecting people, sharing food, and making a difference, one meal at a time."
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>} 
          <button type="submit" className="login-button">
            <FaSignInAlt /> Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
