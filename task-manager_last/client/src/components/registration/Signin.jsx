import React, { useState } from "react";
import "./signin.scss";
import "../../styles/components/_button.scss";
import { useDispatch } from 'react-redux';
import { signin } from "../../redux/authSlice";
import LoginImage from '../../assets/Log_in__1_-removebg-preview.png'
import { Link } from 'react-router-dom'

const Signin = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin({
      email: state.email,
      password: state.password,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <h2 className="login-head">Welcome Back!</h2>
          <p>We're so excited to see you again!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">USERNAME OR EMAIL <span>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={state.email}
              onChange={handleChange}
            />
            <label htmlFor="password">PASSWORD <span>*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={state.password}
              onChange={handleChange}
            />
            <button type="submit">Log In</button>
          </form>
          <p className="register-text">No account? <Link to="/signup">Sign Up</Link></p>
        </div>
        <div className="login-image">
          <img src={LoginImage} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Signin;