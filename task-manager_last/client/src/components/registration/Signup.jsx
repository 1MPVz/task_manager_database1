import React, { use, useState } from "react";
import "./signup.scss";
import "../../styles/components/_button.scss";
import {useDispatch} from 'react-redux';
import { register } from "../../redux/authSlice";
import { Link } from 'react-router-dom'

const Signup = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(
      register({
        username: state.username,
        password: state.password,
        email: state.email,
      })
    )
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  console.log(state.username, state.password, state.email)
  return (
<div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <h2 className="login-head">Sign Up</h2>
          <p>We're so excited to have you join us!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              USERNAME <span>*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              value={state.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">
              EMAIL <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">
              PASSWORD <span>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <p className="register-text">
            Already have an account? <Link to="/signin">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;