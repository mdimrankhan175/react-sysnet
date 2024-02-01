import React from 'react';
import './index.css';

const contacts = [
  {
    id: 1,
    name: 'Sunil Sheoran',
    title: 'Project Manager',
    email: 'sunil.sheoran@hpe.com',
    image: 'URL_TO_SUNIL_IMAGE',
  },
  {
    id: 2,
    name: 'Suresh Revad',
    title: 'Technical Specialist',
    email: 'suresh.revad@hpe.com',
    image: 'URL_TO_SURESH_IMAGE',
  },
  {
    id: 3,
    name: 'Vipul Sunda',
    title: 'Technical Specialist',
    email: 'vipul.sunda@hpe.com',
    image: 'URL_TO_VIPUL_IMAGE',
  },
  {
    id: 4,
    name: 'Sayantani Dhar',
    title: 'Case Management Lead',
    email: 'sayantani.dhar@hpe.com',
    image: 'https://res.cloudinary.com/dbelvmspz/image/upload/v1706775275/sayan_qnq0eq.jpg',
  },
  {
    id: 5,
    name: 'Kashyap Kumar',
    title: 'Technical Operations',
    email: 'hpe-ericsson@hpe.com',
    image: 'https://res.cloudinary.com/dbelvmspz/image/upload/v1706775617/kashyap_yzrkgv.jpg',
  },
  {
    id: 6,
    name: 'Himanshu Sharma',
    title: 'Technical Operations',
    email: 'hpe-ericsson@hpe.com',
    image: 'URL_TO_HIMANSHU_IMAGE',
  },
  // ... Repeat similar objects for other contacts
];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const ContactUs = () => {
  return (
    <div className='cards'>
      {contacts.map((contact) => (
        <div key={contact.id} className={`card card-${getRandomNumber(1, 6)}`}>
          <div className="contact-container">
            <img
              src={contact.image}
              className="contact-image"
              alt={contact.name}
            />
            <div className="card-details">
              <h2>{contact.name}</h2>
              <p className="title">{contact.title}</p>
              <p>{contact.email}</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactUs;
