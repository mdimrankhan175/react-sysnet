// Home.js
import React from 'react';
import './index.css';

const Home = () => {
    return (
      <div className="home-container">
        <div className='home-text-container'>
        <h2 className="welcome-heading">Welcome to Technology Navigator</h2>
        <p className="description">Explore the latest updates and features.</p>
        </div>
        <div className="latest-updates-container">
        <h2 className='latest-text'>***Latest </h2>
        <p>{`Request to All RE's download SAN Switch FW versions (8.2.3d) Login: e4942254 Password: 9fa*BP7yi}BH3de_`}
        <a href="https://hprc-h3.it.hpe.com/hprc" target="_blank" className="updates-link">Click Here</a>
       </p>
       </div>

      </div>
    );
  };

export default Home;
