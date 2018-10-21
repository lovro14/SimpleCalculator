import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Simple Calculator
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-nav"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  </nav>
);

export default Navbar;
