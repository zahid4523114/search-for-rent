import { Link } from "react-router-dom";
import { HiMailOpen } from "react-icons/hi";
import React from "react";
const Header = () => {
  const navLinks = (
    <React.Fragment>
      <Link
        to="/rentProperties"
        className="btn btn-ghost rounded-xl lg:mr-5 mb-2"
      >
        Rent
      </Link>

      <Link className="btn btn-ghost rounded-xl lg:mr-5 mb-2">Buy</Link>
      <Link className="btn btn-ghost rounded-xl lg:mr-5 mb-2">Sell</Link>
      <Link className="btn btn-ghost rounded-xl lg:mr-5 mb-2">
        Manage Property
      </Link>
      <Link className="btn btn-ghost rounded-xl lg:mr-5 mb-2">Resources</Link>
      <Link className="btn btn-primary text-white rounded-xl lg:mr-5 mb-2">
        Login
      </Link>
      <Link className="btn btn-primary text-white rounded-xl lg:mr-5 mb-2">
        Sign Up
      </Link>
    </React.Fragment>
  );
  return (
    <div className="navbar shadow-lg lg:p-4 lg:flex lg:justify-between justify-between items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-slate-500 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
            className="menu menu-compact bg-slate-400 dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            <li>{navLinks}</li>
          </ul>
        </div>
        <Link className="flex items-center">
          <HiMailOpen className="text-4xl text-violet-500"></HiMailOpen>
          <span className="font-bold text-3xl">Estatery</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 ">
          <li>{navLinks}</li>
        </ul>
      </div>
      <label
        htmlFor="my-drawer"
        tabIndex={1}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
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
    </div>
  );
};

export default Header;
