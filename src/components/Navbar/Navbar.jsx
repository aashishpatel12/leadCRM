

import React, { useState } from 'react';
import "./Navbar.css"
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiDownload2Line } from "react-icons/ri";
import logo from "../../assets/Leadcrm Logo.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="main-navbar" className="navbar-container">

      <div className="navbar-logo">
        <img src={logo} alt='logo' className=''/>
      </div>


      <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <li className="menu-item" onClick={closeMobileMenu}>
          Product <span className="dropdown-arrow"><MdKeyboardArrowDown /></span>
        </li>
        <li className="menu-item" onClick={closeMobileMenu}>
          Pricing
        </li>
        <li className="menu-item" onClick={closeMobileMenu}>
          Resources <span className="dropdown-arrow"><MdKeyboardArrowDown /></span>
        </li>
        <li className="menu-item" onClick={closeMobileMenu}>
          Company <span className="dropdown-arrow"><MdKeyboardArrowDown /></span>
        </li>
      </ul>

   
      <div className="navbar-actions desktop-actions">
        <button className="nav-btn primary-btn">
          Get Your Free Account
        </button>
        <button  className="action-link-nav">
        <RiDownload2Line />
          Login
        </button>
      </div>

      <div
        className="hamburger"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </div>

    
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-menu-list">
              <li onClick={closeMobileMenu}>Product Down Arrow</li>
              <li onClick={closeMobileMenu}>Pricing</li>
              <li onClick={closeMobileMenu}>Resources Down Arrow</li>
              <li onClick={closeMobileMenu}>Company Down Arrow</li>
            </ul>
            <div className="mobile-actions">
              <button className="action-btn primary-btn full-width">
                Get Your Free Account
              </button>
              <a href="#login" className="mobile-login-link" onClick={closeMobileMenu}>
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;