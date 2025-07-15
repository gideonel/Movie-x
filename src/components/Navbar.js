import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // optional if you want to style it

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
      <h2 className="logo text-3xl text-red-500 text-bold">Movies-X</h2>
      </Link>
      <ul className="nav-links">
        <li><Link to="/movie">Movie List</Link></li>
        <li><Link to="/favorite">Favorites</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
