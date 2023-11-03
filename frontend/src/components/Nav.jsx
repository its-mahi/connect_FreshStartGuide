"use client";
import React, { useState, useEffect } from "react";
import "../../styles/nav.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Nav = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const logout = async () => {
    const response = await axios.post("https://connect-qbpn.onrender.com/api/v1/logout", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    // console.log("logout res " + response.success);
    dispatch({
      type: "CLEAR_USER",
    });
    props.toggleLogin();
  };

  return (
    <>
      <section id="nav">
        <div className="nav">
          <div className="pl-0">
            <a href="#top">
              <img src="/connect.png" className="w-36" alt="" />
            </a>
          </div>
          <div>
            <div className="hidden md:flex flex-wrap gap-0">
              <div className="nav-titles nav-titles-ltr">
                <Link to="/">Home</Link>
              </div>
              <div className="nav-titles nav-titles-ltr">
                {props.isLoggedIn && <Link to="/profile">Profile</Link>}
              </div>
              <div className="nav-titles nav-titles-ltr">
                <Link to="/query">
                  QueryRoom
                </Link>
              </div>

              <div className="nav-titles nav-titles-ltr">
                <Link to="/blogs">Blogs</Link>
              </div>
              <div className="nav-titles nav-titles-ltr">
                <Link to="/notes">Notes</Link>
              </div>
              {!props.isLoggedIn && (
                <div className="nav-titles nav-titles-ltr">
                  <Link to="/login">Login</Link>
                </div>
              )}

              {!props.isLoggedIn && (
                <div className="nav-titles nav-titles-ltr">
                  <Link to="/register">Register</Link>
                </div>
              )}

              {props.isLoggedIn && (
                <div className="nav-titles nav-titles-ltr" onClick={logout}>
                  Logout
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="dropdown-toggle text-3xl md:hidden text-white cursor-pointer"
                onClick={toggleDropdown}
              >
                &#9776;
              </button>
              {isOpen && (
                <div className="dropdown-menu nav-dropdown">
                  <Link to="/" className="nav-dropdown-titles">Home</Link>
                  <Link to="/query" className="nav-dropdown-titles">
                    QueryRoom
                  </Link>
                  <Link to="/blogs" className="nav-dropdown-titles">
                    Blogs
                  </Link>
                  <Link to="/notes" className="nav-dropdown-titles">
                    Notes
                  </Link>
                  {!props.isLoggedIn && (
                    <Link to="/login" className="nav-dropdown-titles">Login</Link>
                  )}
                  {!props.isLoggedIn && (
                    <Link to="/register" className="nav-dropdown-titles">Register</Link>
                  )}
                  {props.isLoggedIn && <Link to="/profile" className="nav-dropdown-titles">Profile</Link>}
                  {props.isLoggedIn && (<div className="nav-dropdown-titles" onClick={logout}>
                    Logout
                  </div>)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
