// Ownership.js
import React from 'react';
import './index.css'; // Import the corresponding CSS file

const Ownership = () => {
  return (
    <div className="ownership-container">
      

      {/* Container 1 - Left side with scroll */}
      <div className="custom-container container-scroll">
        <div className="site-card p-3 mb-3">
          <img
            src="https://res.cloudinary.com/dbelvmspz/image/upload/v1676891646/what-is-a-server-server-down-kyu-hota-hai-hindi_knwxy2.png"
            alt="Server Down"
            className="site-card-image"
          />
          <h1 className="site-card-title mt-3">P1 Call</h1>
          <ul className="site-card-description">
            <li>P1 call raised when customer unable to login server.</li>
            <li>If Server is in down state.</li>
            <li>RE reach the site within 30 minutes.</li>
            <li>Follow the instructions given by HP technical focal.</li>
          </ul>
          <h1 class="site-card-title mt-3">P2 Call</h1>
                        <ul class="site-card-description">
                            <li>P2 call raised when any server part degraded.</li>
                            <li>It is planned activity. You reach site at scheduled time.</li>
                            <li>Before start activity take customer confirmation through mail.</li>
                            <li>Complete activity in scheduled time.</li>
                            <li>Share the time stamp before leaving the site.</li>
                            <li>Dont leave the site before confirmation.</li>
                        </ul>
        </div>
      </div>

      {/* Container 2 - Middle with scroll */}
      <div className="custom-container container-scroll">
        <div className="site-card p-3 mb-3">
          <img
            src="https://res.cloudinary.com/dbelvmspz/image/upload/v1676892436/responsibility_asnujh.png"
            alt="Responsibility"
            className="site-card-image"
          />
          <h1 className="site-card-title mt-3">General Duties</h1>
          <ul className="site-card-description">
            <li>Your have to available in 24/7.</li>
            <li>Daily Reach the site at 09:30 AM.</li>
            <li>Physically check the health status of 2Hr CTR Servers. Share Daily Health status report to HP team through mail.</li>
            <li>Monthly twice (15th and 30th of the month) Physically check the Spare Stock and Update to HP team.</li>
          </ul>
          <h1 className="site-card-title mt-3">Equipment</h1>
          <ul className="site-card-description">
            <li>Carry Laptop with Bootable pendrives.</li>
            <li>Lan cable and Data Card.</li>
            <li>Toolkit with T-15,T-30 Screws.</li>
            <li>Arrange Monitor and keyboard at site.</li>
          </ul>
        </div>
      </div>

      {/* Container 3 - Right side with scroll */}
      <div className="custom-container container-scroll">
        <div className="site-card p-3 mb-3">
          <img
            src="https://res.cloudinary.com/dbelvmspz/image/upload/v1676894482/report_writing_2_hpbcom.jpg"
            alt="Report Writing"
            className="site-card-image"
          />
          <h1 className="site-card-title mt-3">Dashboard, TAT, etc,</h1>
          <ul className="site-card-description">
            <li>Daily Health Checkup Report share to HP team.</li>
            <li>For every activity after completion send Time Stamp to HP team.</li>
            <li>15th and 30th of the Month Prepare Dashboard report and send to HP team.</li>
            <li>15th and 30th of the Month, physically check the Spare Stock and Update to HP team.</li>
            <li>Send TAT Report at the end of the month to HP team.</li>
          </ul>
          <h1 className="site-card-title mt-3">DC AUDIT</h1>
          <ul className="site-card-description">
            <li>Perform the DC Audit on Quarterly basis.</li>
            <li>Share the report to HP team.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ownership;
