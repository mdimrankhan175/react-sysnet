// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaCalendar, FaUser, FaServer, FaEnvelope, FaPhone } from 'react-icons/fa';

import './index.css';

const Header = () => {
  return (
    <>
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
    <header className="header-container-small">
     
        <Link to="/" className="logo-link">
          <img src="https://res.cloudinary.com/dbelvmspz/image/upload/v1676831745/coollogo_com-145311121_jrkcxf.jpg" alt="SysNet Logo" className="logo-image" />
        </Link>
       
     
     <nav className="nav-container">
        <ul className="nav-list">
          <li><Link to="/ownership" className="nav-link"><FaTasks  style={{ fontSize: '1em', color: '#e67e22' }}  /></Link></li>
          <li><Link to="/meeting" className="nav-link"><FaCalendar style={{ fontSize: '1em', color: '#2ecc71' }}  /></Link></li>
          <li><Link to="/emp_section" className="nav-link"><FaUser style={{ fontSize: '1em', color: '#e74c3c' }}   /></Link></li>
          <li><Link to="/server" className="nav-link"><FaServer style={{ fontSize: '1em', color: '#9b59b6' }}  /></Link></li>
          <li><Link to="/contact_us" className="nav-link"><FaEnvelope style={{ fontSize: '1em', color: '#e67e22' }}  /></Link></li>
          <li><Link to="/follow_us" className="nav-link"><FaPhone style={{ fontSize: '1em',  color: '#3498db' }} /></Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
