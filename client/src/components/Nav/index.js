import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {


      return (
        <ul className="flex-row">
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
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
}

export default Nav; 
