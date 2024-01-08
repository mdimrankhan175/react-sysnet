// Import necessary React modules if not already imported
import React from 'react';
import './index.css';

// Your component that renders the meeting cards
const Meeting = () => {
  return (
    <div class="main-container">
    <div class="heading">
        <h1 class="heading__title mt-5">CAB MEETING</h1>
        <p class="heading__credits" >Conducted by HPE and Sysnet.</p>
       
    </div>


    <div className="cards">
      {/* Card 1 */}
      <div className="card card-1">
        <div className="card__icon"><i className="fas fa-bolt"></i></div>
        <p className="card__exit"><i className="fas fa-times"></i></p>
        <h2 className="card__title">HPE Regular CAB Meeting. RFC Discussed here. Start's at 16:30 PM. </h2>
        <p className="card__apply">
          <a className="card__link" target="_blank" href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjJmNWZjYWItMGZkMy00NWQwLWI3YTctMjA5MTIzZTNjOTA3%40thread.v2/0?context=%7b%22Tid%22%3a%22105b2061-b669-4b31-92ac-24d304d195dc%22%2c%22Oid%22%3a%2217091bd3-94d3-42f3-9bd6-2e164e14e81f%22%7d">Join Meeting <i className="fas fa-arrow-right"></i></a>
        </p>
      </div>

      {/* Card 2 */}
      <div className="card card-2">
        <div className="card__icon"><i className="fas fa-bolt"></i></div>
        <p className="card__exit"><i className="fas fa-times"></i></p>
        <h2 className="card__title">Sysnet Weekly Internal Meeting. Every Friday Start's at 11:00 AM </h2>
        <p className="card__apply">
          <a className="card__link" target="_blank" href="https://meet.google.com/ewx-gvai-tvg?hs=224">Join Meeting <i className="fas fa-arrow-right"></i></a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Meeting;
