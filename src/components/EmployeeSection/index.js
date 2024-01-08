// Import necessary React modules if not already imported
import React from 'react';
import './index.css'; // Import your CSS file

// Your component that renders the employee section cards
const EmployeeSection = () => {
  return (
    <div className="main-container">
      <div className="heading">
        <h1 className="heading__title mt-5" >Employee Section </h1>
        <p className="heading__credits" >Your employment-related services available here.</p>
      </div>
      <div className="cards">
        {/* Card 3 */}
        <div className="card card-3">
          <div className="card__icon"><i className="fas fa-bolt"></i></div>
          <p className="card__exit"><i className="fas fa-times"></i></p>
          <h2 className="card__title">EOD - Main and Expenses Related</h2>
          <p className="card__apply">
            <a className="card__link" rel="noopener noreferrer" target="_blank" href="http://sysnetglobal.in/eod/">EOD Link <i className="fas fa-arrow-right"></i></a>
          </p>
        </div>

        {/* Card 4 */}
        <div className="card card-4">
          <div className="card__icon"><i className="fas fa-bolt"></i></div>
          <p className="card__exit"><i className="fas fa-times"></i></p>
          <h2 className="card__title">General and Application Services. Like Attendance, Leave etc.,</h2>
          <p className="card__apply">
            <a className="card__link" target="_blank" href="http://140.238.253.37:8080/EasyPAY/view/mdimain.aspx?1=1">EasyPAY Link <i className="fas fa-arrow-right"></i></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSection;
