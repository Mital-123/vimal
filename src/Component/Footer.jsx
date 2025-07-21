import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import Tittles from './Tittles'

function Footer() {
  return (
    <div className="py-5 pb-2" style={{ backgroundColor: "#fffcf3" }}>
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-3 order-lg-0 order-4 mb-4 text-center">
            <img src={require('../assets/Images/logo_vimal_agro.png')} alt="EnerGen Logo" width="120" />
            <h6 className="fw-bold mt-3">STRATEGIC | ASTUTE | SAFE</h6>
            <p className="text-muted small">
              Your Strategic Partner To Enhanced Operation Efficiency & Improved Safety.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <Link
                to={"https://www.facebook.com/SWADBrand/"}
                target="_blank"
                className="footericon text-center p-2 mx-2  ms-0 d-flex text-decoration-none text-white facebookicon">
                <FaFacebookF />
              </Link>
              <Link
                to={"https://www.instagram.com/swadbrand/"}
                target="_blank"
                className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white instaicon">
                <FaInstagram />
              </Link>
              <Link
                to={"https://www.youtube.com/@SwadBrand"}
                target="_blank"
                className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white linkicon">
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-sm-8">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-sm-6 mb-4">
                <h5 className="fs-6 text-danger fw-semibold"><Tittles stitle="Helpful Links" /></h5>
                <div className='ms-2 pera'>
                  <NavLink to="/" className={({ isActive }) => `d-block text-decoration-none my-3 activetab ${isActive ? 'text-danger fw-bold' : 'text-dark'}`}>
                    Home
                  </NavLink>
                  <NavLink to="/aboutus" className={({ isActive }) => `d-block text-decoration-none my-3 activetab ${isActive ? 'text-danger fw-bold' : 'text-dark'}`} >
                    About Us
                  </NavLink>
                  <NavLink to="/product" className={({ isActive }) => `d-block text-decoration-none my-3 activetab ${isActive ? 'text-danger fw-bold' : 'text-dark'}`}>
                    Product
                  </NavLink>
                  <NavLink to="/blog" className={({ isActive }) => `d-block text-decoration-none my-3 activetab ${isActive ? 'text-danger fw-bold' : 'text-dark'}`}>
                    Blog
                  </NavLink>
                  <NavLink to="/contact" className={({ isActive }) => `d-block text-decoration-none my-3 activetab ${isActive ? 'text-danger fw-bold' : 'text-dark'}`}>
                    Contact
                  </NavLink>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mb-4">
                <h5 className="fs-6 text-danger fw-semibold"><Tittles stitle="Legal" /></h5>
                <div className='ms-2 pera'>
                  <Link to="/privacy-policy" className="d-block text-dark text-decoration-none my-3 activetab">Privacy Policy</Link>
                  <Link to="/terms-condition" className="d-block text-dark text-decoration-none my-3 activetab">Terms And Conditions</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-4 mb-4 pera">
            <h5 className="fs-6 text-danger fw-semibold"><Tittles stitle="Get in Touch" /></h5>
            <div className="mb-2 text-dark my-3 d-flex align-items-center justify-content-center">
              <FaMapMarkerAlt className="me-2 fs-4 text-danger" />
              Vimal Agro Products Pvt Ltd, Near GIDC, Ten Road, Bardoli, Gujarat: 394601, INDIA
            </div>
            <p className="mb-2 text-dark my-3">
              <FaPhoneAlt className="me-2 text-danger" /> (+91) 2622 222759
            </p>
            <p className="mb-0 text-dark my-3">
              <FaEnvelope className="me-2 text-danger" /> info@vimalagro.com
            </p>
            <div className="mb-2 text-dark my-3 d-flex align-items-center">
              <FaEnvelope className="me-2 text-danger" />
              <span className='ms-1'>Domestic Sales : sales@vimalagro.com</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;