import React, { useState, useEffect } from 'react';
import Tittles from './Component/Tittles';

function Certificates() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className={`red-certificates-section py-5 ${isVisible ? 'visible' : ''}`}>
        {/* Animated Background Elements */}
        {/* <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div> */}

        <div className="container-fluid px-4">
          {/* Header Section */}
          <div className="row justify-content-center mb-2">
            <div className="col-lg-8 text-center">
              <div className="header-content" >
                   <div className='text-center mb-2'><Tittles stitle={"Our Certificates"} ltitle={"  Certified Excellence"} /></div>
              
                <p className="pera pt-2">
                  Our commitment to quality is backed by internationally recognized certifications
                </p>
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="certificates-grid">
   <div  data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true">
             <div className="certificate-item"  >
              <img
                src="https://www.vimalagro.com/wp-content/themes/jan2018/images/brc_logo.jpg?v1"
                alt="BRC Logo"
                className="img-fluid"
              />
              <div className="certificate-glow"></div>
            </div>
   </div>

        <div data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="500"
                data-aos-once="true">
              <div className="certificate-item"   >
              <img
                src="https://www.vimalagro.com/wp-content/themes/jan2018/images/halal_logo.jpg"
                alt="Halal Logo"
                className="img-fluid"
              />
              <div className="certificate-glow"></div>
            </div>
        </div>

          <div data-aos="zoom-in"
                data-aos-duration="1800"
                data-aos-delay="800"
                data-aos-once="true">
              <div className="certificate-item" >
              <img
                src="https://www.vimalagro.com/wp-content/themes/jan2018/images/iso_logo.jpg"
                alt="ISO Logo"
                className="img-fluid"
              />
              <div className="certificate-glow"></div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificates;
