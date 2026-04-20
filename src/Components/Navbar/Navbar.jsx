
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="travel-logo">
        <img src="/logo.png" className="logo" alt="Logo" />
      </div>

      <div
        className="menu-toggle"
        id="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li className="service-link-div">
          <Link to="/services">Services</Link>
          <i className="fa-solid fa-caret-down"></i>
          <div className="service-dropdown">
            <div className="service-link-triangle"></div>
            <ul className="service-links">
              <li><Link to="/honeymoon">Honeymoon Packages</Link></li>
              <li><Link to="/Tourplan">Tours Packages</Link></li>
              <li><Link to="/Musicpackage">Musical Events</Link></li>
              <li><Link to="/packages">Build Packages</Link></li>
            </ul>
          </div>
        </li>
        <li><Link to="/upcoming-package">Upcoming Packages</Link></li>
        <li className="mobile-btn">
          <button className="nav-btn">Get in Touch</button>
        </li>
      </ul>

      <div className="btn-wrapper">
        <button className="nav-btn">Get in Touch</button>
      </div>
    </nav>
  );
}

