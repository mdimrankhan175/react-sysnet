import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowRight } from 'react-icons/fa';


import './index.css';

const Server = () => {
    return (
      <div className="download-software-section-bg" id="downloadSoftwareSection">
        <div className="container">
          <div className="row">
            <div className="heading links-background text-center mb-4">
              <h1 className="download-section-heading">Download</h1>
        <div className="links-background" >
              <h1 className="download-section-heading-1">
      
      For Important FIRMWARES{' '}
      <a className="styled-link" href="https://firmwarelinks.ccbp.tech/" target="_blank" rel="noopener noreferrer">
        click Me
      </a>{' '}
       For RFC Reports{' '}
      <a className="styled-link" href="https://drive.google.com/drive/folders/1qCmctfntcXoHRSCXIxUNkgDzInmO5ZLi?usp=drive_link" target="_blank" rel="noopener noreferrer">
        click Me
      </a>{' '}
       For Learning{' '}
      <a
        className="styled-link"
        target="_blank"
        href="https://docs.google.com/document/d/1w00-8DtrGBUm9hiWhvLeSN5bK0wHquH2qoI41fK-1y4/edit?usp=sharing"
        rel="noopener noreferrer"
      >
        Click Me 
      </a>{' '}
      
    </h1>
    </div>

             </div>
                    
            {/* Example Download Items as an Unordered List */}
            <ul className="row list-unstyled">
              {downloadItems.map((item) => (
                <li key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="shadow download-item-card p-3">
                    <img src={item.image} className="download-item-image" alt={item.title} />
                    <h1 className="download-card-title">{item.title}</h1>
                    <a target="_blank" href={item.link} className="download-item-link">
                      View All
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    );
  };
  


// Example data for download items with UUID
const downloadItems = [
  {
    id: uuidv4(),
    title: 'HP PROLIANT DL 360 GEN8',
    image: 'https://res.cloudinary.com/dbelvmspz/image/upload/v1677758566/DL-360-G8_cmmzbp.jpg',
    link: 'https://support.hpe.com/connect/s/product?language=en_US&tab=driversAndSoftware&kmpmoid=5194968&view=grid',
  },
  {
    id: uuidv4(),
    title: 'HP PROLIANT DL 360 GEN9',
    image: 'https://res.cloudinary.com/dbelvmspz/image/upload/v1677758566/DL-360-G8_cmmzbp.jpg',
    link: 'https://support.hpe.com/connect/s/product?language=en_US&tab=driversAndSoftware&kmpmoid=7252838&view=grid',
  },
  {
    id: uuidv4(),
    title: 'HP PROLIANT DL 360 GEN10',
    image: 'https://res.cloudinary.com/dbelvmspz/image/upload/v1677758566/DL-360-G8_cmmzbp.jpg',
    link: 'https://support.hpe.com/connect/s/product?language=en_US&tab=driversAndSoftware&kmpmoid=1010093150&view=grid',
  },
  // ... (existing items)
  // Add more items as needed

  {id: uuidv4(),
    title: 'HPE BL460C GEN8',
    image: 'https://res.cloudinary.com/dbelvmspz/image/upload/v1677758993/HP_BL460C_GEN8_klddu8.png',
    link: 'https://support.hpe.com/connect/s/product?language=en_US&ismnp=0&l5oid=5177949&cep=on&kmpmoid=5177951&tab=driversAndSoftware',
    },
    {id: uuidv4(),
    title: 'HPE BL460C GEN9',
    image: 'https://res.cloudinary.com/dbelvmspz/image/upload/v1677758993/HP_BL460C_GEN8_klddu8.png',
    link: 'https://support.hpe.com/connect/s/product?language=en_US&ismnp=0&l5oid=7271227&cep=on&kmpmoid=7271228&tab=driversAndSoftware',
    },
    {id: uuidv4(),
    title: 'HPE BL460C GEN10',
    image: 'https://res.cloudinary.com/dbelvmspz/image/upload/v1677758993/HP_BL460C_GEN8_klddu8.png',
    link: 'https://support.hpe.com/connect/s/product?language=en_US&ismnp=0&l5oid=7271227&cep=on&kmpmoid=1010093155&tab=driversAndSoftware&view=grid',
    },
];

export default Server;