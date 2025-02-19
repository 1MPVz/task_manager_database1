import React from "react";
import "./header.scss";
import "../../styles/components/_button.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../../redux/authSlice";
import Logo from "../../assets/Logo-removebg-preview.png";

const Header = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));

  const handleClick = (e) => {
    //e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem("auth");
    history.push("/signin");
    window.location.reload();
  };

  return (
    <div>
      <nav className="header">
        <div class="logo-image">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          {auth.currentUser && auth.currentUser.token ? (
            <div className="registerButton">
              <Link to="/signin" className="btn" onClick={handleClick}>
                Log Out
              </Link>
            </div>
          ) : (
            <div className="registerButton">
              <Link to="/signin" className="btn">
                Log in
              </Link>
              <Link to="/signup" className="btn">
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </nav>
    </div>
  );
};

export default Header;
