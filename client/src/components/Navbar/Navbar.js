import React, { useState, useContext } from "react";
// style
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { logout } from "../../authContext/AuthActions";
import { AuthContext } from "../../authContext/AuthContext";

const Navbar = () => {
  const { dispatch, user } = useContext(AuthContext);

  console.log(user);

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
          <div className="left">
            <Link to="/">
              <span>Homepage</span>
            </Link>
            <Link to="/movies">
              <span>Movies</span>
            </Link>
            <Link to="/series">
              <span>Series</span>
            </Link>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <div className="right">
              <Search className="icon" />
              <span>KID</span>
              <Notifications className="icon" />

              <div className="profile">
                <img
                  src={
                    user.profilePic ||
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  }
                  alt=""
                />
                <ArrowDropDown className="icon" />
                <div className="options">
                  <span>Settings</span>
                  <span onClick={() => dispatch(logout())}>Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
