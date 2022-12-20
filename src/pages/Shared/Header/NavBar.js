import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logoM.png";

const NavBar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/portfolio">Our Portfolio</Link>
      </li>
      <li>
        <Link to="/team">Our Team</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        {/* {user ? (
          <Link
            className="btn btn-accent text-white"
            onClick={handleSignOut}
            to="/"
          >
            Sign Out
          </Link>
        ) : ( */}
        <Link className="btn btn-primary rounded px-5 text-white" to="/login">
          Login
        </Link>
        {/* )} */}
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <img style={{ height: "60px" }} src={logo} alt="logo" />
            <p
              style={{ fontSize: "16px" }}
              className="flex justify-center flex-col items-start pl-2"
            >
              <span className="font-bold"> Moyuri's </span>
              <span>Parlour</span>
            </p>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
