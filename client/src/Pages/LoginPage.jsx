import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import "./LoginPage.css";

const LoginPage = () => {
  return (
      <div className="login-box">
        <div className="login-form">
          <h1 className="heading">Welcome Back</h1>
          <p>Please enter your account details</p>
          <input type="email" placeholder="E-mail" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />

          <div className="links">
            <Link to="/register" className="link">Register</Link>
            <Link to="/forgot-password" className="link">Forgot Password?</Link>
          </div>

          <button className="sign-in-btn">Sign-in</button>

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

        <div className="testimonial">
          <h3 className="testimonial-title">What's Our Jobseekers Said</h3>
          <blockquote>"Search and find dream job is now easier than ever. Just browse a job and apply if you need to."</blockquote>
          <p><strong>Atharva Chavan</strong></p>
          <p>UI Designer at Google</p>
          <div className="nav-buttons">
            <button className="nav-button gradient">&larr;</button>
            <button className="nav-button">&rarr;</button>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;
