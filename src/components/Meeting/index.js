import React, { useState } from 'react';
import './index.css';

const Meeting = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = 'Admin123';

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="main-container">
      <div className="heading">
        <h1 className="heading__title">CAB MEETING</h1>
         {/* Password input */}
      {!isAuthenticated && (
        <form onSubmit={handleSubmit}>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      </div>

      <div className="cards">
        {/* Card 1 */}
        <div className="card card-1">
          <div className="card__icon"><i className="fas fa-bolt"></i></div>
          <p className="card__exit"><i className="fas fa-times"></i></p>
          <h2 className="card__title">HPE Regular CAB Meeting. RFC Discussed here. Technical Knowledge will be Shared. </h2>
          {isAuthenticated && (
            <p className="card__apply">
              <a className="card__link" target="_blank" rel="noopener noreferrer" href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_Yzg5NzQ0OGUtYWNiZi00YmVkLWI1MDgtZTc3YzY0OTI2ZTgx%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522105b2061-b669-4b31-92ac-24d304d195dc%2522%252c%2522Oid%2522%253a%25228cf076ab-aa88-4704-b242-f7c74da247b7%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=4daa4d90-252e-4cf3-9a49-226e6999f9ce&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true">Join Meeting <i className="fas fa-arrow-right"></i></a>
            </p>
          )}
        </div>

        {/* Card 2 */}
        <div className="card card-2">
          <div className="card__icon"><i className="fas fa-bolt"></i></div>
          <p className="card__exit"><i className="fas fa-times"></i></p>
          <h2 className="card__title">Sysnet Weekly Internal Meeting. Technical discussions and work related issues discussed here. </h2>
          {isAuthenticated && (
            <p className="card__apply">
              <a className="card__link" target="_blank" rel="noopener noreferrer" href="https://meet.google.com/ewx-gvai-tvg?hs=224">Join Meeting <i className="fas fa-arrow-right"></i></a>
            </p>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default Meeting;
