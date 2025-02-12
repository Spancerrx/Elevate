import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import "./RegisterPage.css"; // Import CSS file

const RegisterPage = () => {
  return (
      <div className="register-box">
        <div className="register-form">
          <h1 className="heading">Create a New Account</h1>
          <input type="text" placeholder="Full Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />

          <button className="register-btn">Register</button>

          <p className="login-link">
            Already have an account? <Link to="/">Sign in</Link>
          </p>

          <div className="social-icons">
            <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer">
              <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="google" className="social-logo" />
            </a>
            <a href="https://github.com/login" target="_blank" rel="noopener noreferrer">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-logo" />
            </a>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-logo" /> 
            </a>
          </div>
        </div>
      </div>
  );
};

export default RegisterPage;
