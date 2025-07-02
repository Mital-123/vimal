import React from 'react';
import CountUp from 'react-countup';
import { TiArrowForward } from 'react-icons/ti';
import Tittles from '../Tittles';
import "../../assets/Css/Aboutus.css"
import { FaQuoteRight } from 'react-icons/fa';
import HOC from '../HOC';
import MissionVision from './MissionVision';
import videoBg from '../../assets/Video/4c8cfc38a8c14408b4c9adc3ea71e9be.HD-720p-4.5Mbps-37775345.mp4';
import AboutImpact from './AboutImpact';

function AboutusSec() {
  return (
    <>
      {/* lending section start*/}
      <div className="video-container">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={videoBg} type="video/mp4" /></video>
      </div>
      {/* lending section end*/}

      <div className="py-5 mb-4 overflow-hidden">
        <div className="container">
          <div className="row p-0 m-0">

            <div className="col-12 col-lg-4 pt-4 d-flex flex-column ps-0 pe-lg-4 pe-0 overflow-hidden" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
              <div className="h-100 test-shinee shadow">
                <img
                  src={require("../../assets/Images/about us image.jpg")}
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
            <div className="col-12 col-lg-2 p-0 m-0 pt-4 d-flex flex-column overflow-hidden" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true">

              <div className="flex-grow-1 test-shinee shadow">
                <div className="h-100 ">
                  <img
                    src="https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.51.10_PM.png?v=1728991291&width=360"

                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
              <div className="mt-auto shadow d-none d-md-block">
                {/* <div className="fs-3 text-center fw-medium p-4  text-white mt-3 count_text" style={{backgroundColor:"#740000"}}>+ <CountUp end={14} enableScrollSpy={true} separator="" /> Years Experience</div> */}
                <div className='h-100 test-shinee shadow'>
                  <img
                    src="https://i0.wp.com/sub.vimalagro2.vimalagro.com/sub.vimalagro2.vimalagro/wp-content/uploads/2024/07/home_bottom_images_2-776x424-1.jpg?w=776&ssl=1"

                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover mt-3 shadow"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 pt-4  d-flex flex-column justify-content-between ps-0 ps-lg-5">
              <div className="h-100">
                <div className='brdstart'><Tittles stitle={"About us"} ltitle={" We Are Best Products provider"} /></div>

                <div className="pera text-secondary py-2 text-capitalize">
                  A Pioneer In The World Of Food Products, Vimal Agro Products Lay Its Foundation Stone Way Back In 1975 With One Rice Mill And Has Been On The Path Of Success Ever Since. With Extensive Market Research, Inclination Towards Innovation And The Directors' Far-Sightedness, Vimal Agro Products Pvt Ltd Set Up Its Renowned Processed Food Vertical In 1988 And There Has Been No Looking Back Ever Since.
                </div>
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-6 col-12 lh-lg span fw-bold">
                    <p className="pb-0 mb-0 pb-lg-1 pera">
                      <TiArrowForward className="iconbg me-2 text-light" style={{ backgroundColor: "#610303" }} />
                      Product Freshness
                    </p>
                  </div>
                  <div className="col-md-6 col-12 lh-lg span fw-bold">
                    <p className="pb-0 mb-0 pb-lg-1 pera">
                      <TiArrowForward className="iconbg me-2 text-light" style={{ backgroundColor: "#610303" }} /> 24/7
                      Support
                    </p>
                  </div>
                  <div className="col-md-6 col-12 lh-lg span fw-bold">
                    <p className="pb-0 mb-0 pb-lg-1 pera">
                      <TiArrowForward className="iconbg me-2 text-light" style={{ backgroundColor: "#610303" }} />Top
                      Quality Taste
                    </p>
                  </div>
                  <div className="col-md-6 col-12 lh-lg span fw-bold">
                    <p className="pb-0 mb-0 pb-lg-1 pera">
                      <TiArrowForward className="iconbg me-2 text-light" style={{ backgroundColor: "#610303" }} /> Fair
                      Prices
                    </p>
                  </div>
                  <div className="col-md-6 col-12 lh-lg span fw-bold">
                    <p className="pb-0 mb-0 pb-lg-1 pera">
                      <TiArrowForward className="iconbg me-2 text-light" style={{ backgroundColor: "#610303" }} /> Quick Answer
                    </p>
                  </div>
                  <div className="col-md-6 col-12 lh-lg span fw-bold">
                    <p className="pb-0 mb-0 pb-lg-1 pera">
                      <TiArrowForward className="iconbg me-2 text-light" style={{ backgroundColor: "#610303" }} /> Popular Service
                    </p>
                  </div>
                </div>
                <div className="pera text-secondary py-2 text-capitalize">
                  Paying Utmost Importance To Customer Satisfaction And Keeping Prime Focus On Maintaining A Perfect Balance Between The Taste Of Tradition And Improving By Innovation, The Brand Has Established Itself As An Industry Leader In The World Of Processed Foods And Beverages.
                </div>


                <div className="row  m-0  mt-3">

                  <div className="col-9 shadow" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
                    <div className="h-100 d-flex align-items-center py-4  pera fw-bold text-center">
                      " At Vimal, health taste and quality have been paramount since forever.  "
                    </div>
                  </div>
                  <div className="col-3 p-0 m-0 shadow" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
                    <div className="h-100 fs-1 text-white text-center d-flex align-items-center justify-content-center" style={{ backgroundColor: "#740000" }}>
                      <FaQuoteRight />
                    </div>
                  </div>
                </div>

                {/* <div>
                <button class="btncss fw-bold mt-2">About Us</button>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MissionVision />
      <AboutImpact />
    </>
  );
}

export default HOC(AboutusSec)