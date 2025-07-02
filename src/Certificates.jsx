import React, { useState, useEffect } from 'react';

function Certificates() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className={`red-certificates-section py-5 ${isVisible ? 'visible' : ''}`}>
        {/* Animated Background Elements */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>

        <div className="container-fluid px-4">
          {/* Header Section */}
          <div className="row justify-content-center mb-2">
            <div className="col-lg-8 text-center">
              <div className="header-content">
                <span className="badge-text">Our Certificates</span>
                <h2 className="ftittle fw-bold m-0 p-0 text-capitalize">
                  Certified Excellence
                </h2>
                <p className="pera pt-2">
                  Our commitment to quality is backed by internationally recognized certifications
                </p>
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="certificates-grid">
            <div className="certificate-item">
              <img
                src="https://www.vimalagro.com/wp-content/themes/jan2018/images/brc_logo.jpg?v1"
                alt="BRC Logo"
                className="img-fluid"
              />
              <div className="certificate-glow"></div>
            </div>

            <div className="certificate-item">
              <img
                src="https://www.vimalagro.com/wp-content/themes/jan2018/images/halal_logo.jpg"
                alt="Halal Logo"
                className="img-fluid"
              />
              <div className="certificate-glow"></div>
            </div>

            <div className="certificate-item">
              <img
                src="https://www.vimalagro.com/wp-content/themes/jan2018/images/iso_logo.jpg"
                alt="ISO Logo"
                className="img-fluid"
              />
              <div className="certificate-glow"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificates;
