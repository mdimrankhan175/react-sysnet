// Home.js
import React from 'react';
import './index.css';

const Home = () => {
    return (
      <div className="home-container">
        <h2 className="welcome-heading">Welcome to SysNet</h2>
        <p className="description">Explore the latest updates and features.</p>
        <div className="latest-updates-container">
        <h2>Latest Updates</h2>
        <a href="/latest-updates" target="_blank" rel="noopener noreferrer" className="updates-link">Latest Updates</a>
       </div>

      </div>
    );
  };

export default Home;
