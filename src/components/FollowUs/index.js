import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './index.css'; // Import your CSS file for styling

const FooterSection = () => {
  return (
    <div className="c-container">
      <div className="row">
        <div className='i'>
      <FaTwitter className="icon" />
      <FaInstagram className="icon" />
      <FaFacebook className="icon" />
</div>
        <div className="col-12 text-center">
         
          <h1 className="footer-section-mail-id">services@sysnetglobal.com</h1>
          <p className="footer-section-address">
            Sysnet Global Technology Pvt. Ltd.
            W-42, Tum Rd, Pocket W, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020, India
          </p>
          <p className="footer-section-address">@ This Page was created By MD. Imran Khan, Hyderabad.</p>
          <p className="footer-section-address">Mail Id: md.khan4@sysnetglobal.com, mdimrankhan175@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

const FollowUs = () => {
  return (
    <div className='f-container'>
     
      <FooterSection />
    </div>
  );
};

export default FollowUs;
