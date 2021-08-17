import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../Desktopview/Navigation.scss";
import logo from "../../assets/logo-mork.png";
import { IoPersonCircleSharp } from "react-icons/io5";

const Navigation = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-top">
          <div className="logo">
            <img src={logo}></img>
          </div>
        </div>

        <ul>
          <li className="nav-item-home">
            <NavLink
              exact
              to="/"
              style={{ textDecoration: "none" }}
              className="nav-links"
              activeClassName="nav-links-active"
            >
              HOME
            </NavLink>
          </li>

          <li className="nav-item-winery">
            <NavLink
              exact
              to="/allWinerys"
              style={{ textDecoration: "none" }}
              className="nav-links"
              activeClassName="nav-links-active"
            >
              WINERIES
            </NavLink>
          </li>

          <li className="nav-item-about">
            <NavLink
              exact
              to="/about"
              style={{ textDecoration: "none" }}
              className="nav-links"
              activeClassName="nav-links-active"
            >
              ABOUT
            </NavLink>
          </li>

          <li className="nav-item-faq">
            <NavLink
              exact
              to="/faq"
              style={{ textDecoration: "none" }}
              className="nav-links"
              activeClassName="nav-links-active"
            >
              FAQ
            </NavLink>
          </li>
        </ul>

        <div className="icon">
          <Link to="/login">
            <IoPersonCircleSharp color="#ffffff" fontSize="50px" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
