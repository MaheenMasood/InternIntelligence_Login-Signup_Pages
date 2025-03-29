import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Auth.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const validateForm = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error show">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className={`input-group ${emailError ? "invalid" : ""}`}>
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {emailError && <p className="error show">{emailError}</p>}

        <div className={`input-group ${passwordError ? "invalid" : ""}`}>
          <FaLock className="icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        {passwordError && <p className="error show">{passwordError}</p>}

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="link">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
