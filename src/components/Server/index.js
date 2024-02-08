import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowRight } from 'react-icons/fa';


import './index.css';

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


const data = [
  {
    id: 1,
    description: "iLO configuration utility",
    link: "https://support.hpe.com/hpesc/public/swd/detail?swItemId=MTX_2534e591601c4231982f2f419b"
  },
  {
    id: 2,
    description: "iLO remote console",
    link: "https://support.hpe.com/hpesc/public/swd/detail?swItemId=MTX_bc8e3ffa59904ec3b505d9964d"
  },
  {
    id: 3,
    description: ".NET",
    link: "https://download.visualstudio.microsoft.com/download/pr/fb14ba65-a9c9-49ce-9106-d0388b35ae1b/7bbfe92fb68e0c9330c9106b5c55869d/dotnet-sdk-6.0.102-win-x64.exe"
  },
  {
    id: 4,
    description: "Java",
    link: "https://www.java.com/download/ie_manual.jsp"
  },
  {
    id: 5,
    description: "Adobe flash player",
    link: "https://fpdownload.macromedia.com/pub/flashplayer/updaters/32/flashplayer_32_sa.exe"
  },
  {
    id: 6,
    description: "Putty",
    link: "https://the.earth.li/~sgtatham/putty/0.76/w64/putty-64bit-0.76-installer.msi"
  },
  {
    id: 7,
    description: "VCSU Utility",
    link: "https://support.hpe.com/hpesc/public/swd/detail?swItemId=MTX_f111ffc2e2de4aeca450a0495d"
  },
  {
    id: 8,
    description: "3CDeamon Utility",
    link: "http://static.updatestar.net/dl/oldversions/3cdaemon.exe"
  },
  {
    id: 9,
    description: "Power ISO",
    link: "https://getintopc.com/softwares/poweriso-2021-free-download/"
  },
  {
    id: 10,
    description: "USB Key Utility for Windows",
    link: "https://support.hpe.com/connect/s/softwaredetails?softwareId=MTX_360731071b404454b454390208"
  }
];




const Server = () => {
    return (
      <div className="download-software-section-bg" id="downloadSoftwareSection">
        <div className="container">
          <div className="row">
            <div className="heading links-background text-center mb-4">
              <h1 className="download-section-heading">Download</h1>
        <div className="links-background" >
              <h1 className="download-section-heading-1">
      
      Important FIRMWARES{' '}
      <a className="styled-link" href="https://firmwarelinks.ccbp.tech/" target="_blank" rel="noopener noreferrer">
        click
      </a>{' '}
       RFC Reports{' '}
      <a className="styled-link" href="https://drive.google.com/drive/folders/1qCmctfntcXoHRSCXIxUNkgDzInmO5ZLi?usp=drive_link" target="_blank" rel="noopener noreferrer">
        click 
      </a>{' '}
       Learning{' '}
      <a
        className="styled-link"
        target="_blank"
        href="https://docs.google.com/document/d/1w00-8DtrGBUm9hiWhvLeSN5bK0wHquH2qoI41fK-1y4/edit?usp=sharing"
        rel="noopener noreferrer"
      >
        Click 
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
          
          {/* Software Items */}
          <div className='software-container'>
          <h1>Important Softwares</h1>
          <div className='software'>
            
          {data.map((item) => (
            <div key={item.id} className='software-item'  >
              <div >
                <p className="software-title">{item.description}</p>
                <a target="_blank" href={item.link} className="download-item-link">
                  <FaArrowRight />
                </a>
              </div>
            </div>
            
          ))}
        </div>
        </div>
        </div>
      </div>
    );
  };
  




export default Server;