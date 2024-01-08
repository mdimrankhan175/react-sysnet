import React from 'react';
import './index.css'; // Import your CSS file for styling

const contacts = [
  {
    id: 1,
    name: 'Sunil Sheoran',
    title: 'Project Manager',
    email: 'sunil.sheoran@hpe.com',
  },
  {
    id: 2,
    name: 'John Doe',
    title: 'Software Engineer',
    email: 'john.doe@example.com',
  },
  {
    id: 3,
    name: 'Jane Smith',
    title: 'UX Designer',
    email: 'jane.smith@example.com',
  },
  // ... Repeat similar objects for other contacts
];

// Function to generate a random number between min (inclusive) and max (exclusive)
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
              src="https://res.cloudinary.com/dbelvmspz/image/upload/v1677672313/male_contact_pic_fzbonf.png"
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
