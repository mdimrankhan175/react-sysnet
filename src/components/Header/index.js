// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaEnvelope, FaUsers, FaServer, FaCalendar } from 'react-icons/fa';
import './index.css';

const Header = () => {
  return (
    <>
      {/* Regular header for larger screens */}
      <header className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img
              src="https://res.cloudinary.com/dbelvmspz/image/upload/v1676831745/coollogo_com-145311121_jrkcxf.jpg"
              alt="SysNet Logo"
              className="logo-image"
            />
          </Link>
        </div>
        <nav className="nav-container">
          <ul className="nav-list">
            <li><Link to="/ownership" className="nav-link">Ownership</Link></li>
            <li><Link to="/meeting" className="nav-link">Meeting</Link></li>
            <li><Link to="/emp_section" className="nav-link">Employee_Section</Link></li>
            <li><Link to="/server" className="nav-link">Server</Link></li>
            <li><Link to="/contact_us" className="nav-link">ContactUs</Link></li>
            <li><Link to="/follow_us" className="nav-link">FollowUs</Link></li>
          </ul>
        </nav>
      </header>

      {/* Small screen header and footer */}
      <div className="small-screen-container">
        <header className="header-container-small">
          <div className="logo-container-small">
            <Link to="/" className="logo-link">
              <img
                src="https://res.cloudinary.com/dbelvmspz/image/upload/v1676831745/coollogo_com-145311121_jrkcxf.jpg"
                alt="SysNet Logo"
                className="logo-image"
              />
            </Link>
          </div>
          <nav className="nav-container-small">
            <ul className="nav-list">
              <li><Link to="/" className="nav-link-small"><FaHome /></Link></li>
              <li><Link to="/ownership" className="nav-link-small"><FaBuilding /></Link></li>
              <li><Link to="/contact_us" className="nav-link-small"><FaEnvelope /></Link></li>
              <li><Link to="/follow_us" className="nav-link-small"><FaUsers /></Link></li>
            </ul>
          </nav>
        </header>

        {/* Small screen footer */}
        <footer className="footer-container-small">
          <nav className="footer-nav-container-small">
            <ul className="footer-nav-list-small">
              <li><Link to="/meeting" className="footer-nav-link-small"><FaCalendar /></Link></li>
              <li><Link to="/emp_section" className="footer-nav-link-small"><FaUsers /></Link></li>
              <li><Link to="/server" className="footer-nav-link-small"><FaServer /></Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Header;
