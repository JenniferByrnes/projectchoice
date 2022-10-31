import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "../Nav/nav.css";

const Navbar = () => {

  return (
    <nav className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#e7e7e7] text-black">
    <ul className="hidden md:flex nav-bar-menu mx-auto space-x-10">
      <li className="nav-link">
        <a href="/">Home</a>
      </li>
      <li className="nav-link">
        <a href="/about">About</a>
      </li>
      <li className="nav-link">
        <a href="/policies">Policies</a>
      </li>
      <li className="nav-link">
        <a href="/contact">Contact</a>
      </li>
      <li className="nav-link">
        <a href="/shop">Shop</a>
      </li>
      <li className="nav-link">
        <a href="/login">Login</a>
      </li>
      <li className="nav-link">
        <a href="/signup">Sign Up</a>
      </li>
      <li className="nav-link">
        <Link to="/orderHistory">
          Order History
        </Link>
      </li>
      <li className="nav-link">
        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
        <a href="/" onClick={() => Auth.logout()}>
          Logout
        </a>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar; 
