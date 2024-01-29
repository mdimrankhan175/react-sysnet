// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src="https://res.cloudinary.com/dbelvmspz/image/upload/v1676831745/coollogo_com-145311121_jrkcxf.jpg" alt="SysNet Logo" className="logo-image" />
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
  );
};

export default Header;
