import React from 'react'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-light py-5 mt-5">
      <div className="container-xl">
        <div className="row">

          {/* Logo Section */}
          <div className="col-lg-3 order-lg-0 order-4 mb-4 text-center">
            <img src={require('../assets/Images/logo_vimal_agro.png')} alt="EnerGen Logo" width="120" />
            <h6 className="fw-bold mt-3">STRATEGIC | ASTUTE | SAFE</h6>
            <p className="text-muted small">
              Your Strategic Partner To Enhanced Operation Efficiency & Improved Safety.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <Link to="/" className="text-dark fs-4"><FaFacebookF /></Link>
              <Link to="/" className="text-dark fs-4"><FaLinkedinIn /></Link>
            </div>
          </div>
          <div className="col-lg-6 col-sm-8">
            <div className="row justify-content-center">
              {/* Helpful Links */}
              <div className="col-lg-5 col-sm-6 mb-4">
                <h5 className="fs-6 text-danger fw-semibold">Helpful Links</h5>
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

              {/* Legal */}
              <div className="col-md-4 col-sm-6 mb-4">
                <h5 className="fs-6 text-danger fw-semibold">Legal</h5>
                <div className='ms-2 pera'>
                  <Link to="/privacy-policy" className="d-block text-dark text-decoration-none my-3 activetab">Privacy Policy</Link>
                  <Link to="/terms-condition" className="d-block text-dark text-decoration-none my-3 activetab">Terms And Conditions</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="col-lg-3 col-sm-4 mb-4 pera">
            <h5 className="fs-6 text-danger fw-semibold">Get in Touch</h5>
            <p className="mb-2 text-dark my-3">
              <FaMapMarkerAlt className="me-2 text-danger" />
              Vimal Agro Products Pvt Ltd, Near GIDC, Ten Road, Bardoli, Gujarat: 394601, INDIA
            </p>
            <p className="mb-2 text-dark my-3">
              <FaPhoneAlt className="me-2 text-danger" /> (+91) 2622 222759
            </p>
            <p className="mb-0 text-dark my-3">
              <FaEnvelope className="me-2 text-danger" /> info@vimalagro.com
            </p>
            <p className="mb-0 text-dark my-3">
              <FaEnvelope className="me-2 text-danger" />Domestic Sales: <span className='ms-4'>sales@vimalagro.com</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer


// import React from 'react'
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk, FaTwitter } from 'react-icons/fa'
// import { FaMapLocationDot } from 'react-icons/fa6'
// import { MdOutlineDoubleArrow, MdWifiCalling3 } from 'react-icons/md'
// import { Link } from 'react-router-dom'

// function Footer() {
//   return (
//     <>
//       <div className='footer_bg'>
//         <div className='container'>
//           <div className='row pt-3'>
//             <div className='col-12 col-lg-4 p-4 text-center'>
//   <div style={{ width: "100px", height: "100px" }} className='mx-auto test-shinee'>
//     <img src={require("../assets/Images/logo_vimal_agro.png")} className='img-fluid w-100 h-100 object-fit-contain' alt="" />
//   </div>
//   <div className='text-white my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, explicabo.</div>
//   <div className="d-flex fs-4 my-3 justify-content-center">
//     <Link
//       to={"/"}
//       target="_blank"
//       className="footericon text-center p-2 mx-2  ms-0 d-flex text-decoration-none text-white facebookicon">
//       <FaFacebookF />
//     </Link>
//     <Link
//       to={"/"}
//       target="_blank"
//       className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white instaicon">
//       <FaInstagram />
//     </Link>
//     <Link
//       to={"/"}
//       target="_blank"
//       className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white twittericon">
//       <FaTwitter />
//     </Link>
//     <Link
//       to={"/"}
//       target="_blank"
//       className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white linkicon">
//       <FaLinkedinIn />
//     </Link>
//   </div>
// </div>
// <div className='col-12 col-lg-3 p-4'>
//   <h3 className='fw-bold text-white'>Quick Links</h3>
//   <div className="p-1 pera pt-2 pt-3">
//     <Link
//       to={"/"}
//       className="text-decoration-none footer_tittle fw-medium text-white"
//     >
//       <span className="pe-2 fs-6">
//         <MdOutlineDoubleArrow />
//       </span>
//       <span className='footer-tittle_text'>Home</span>
//     </Link>
//   </div>
//   <div className="p-1 pera pt-2">
//     <Link
//       to={"/"}
//       className="text-decoration-none footer_tittle fw-medium text-white"
//     >
//       <span className="pe-2 fs-6">
//         <MdOutlineDoubleArrow />
//       </span>
//       <span className='footer-tittle_text'>About Us</span>
//     </Link>
//   </div>
//   <div className="p-1 pera pt-2">
//     <Link
//       to={"/"}
//       className="text-decoration-none footer_tittle fw-medium text-white"
//     >
//       <span className="pe-2 fs-6">
//         <MdOutlineDoubleArrow />
//       </span>
//       <span className='footer-tittle_text'>Products</span>
//     </Link>
//   </div>
//   <div className="p-1 pera pt-2">
//     <Link
//       to={"/contact"}
//       className="text-decoration-none footer_tittle fw-medium text-white"
//     >
//       <span className="pe-2 fs-6">
//         <MdOutlineDoubleArrow />
//       </span>
//       <span className='footer-tittle_text'>Contact Us</span>
//     </Link>
//   </div>
// </div>
//             <div className='col-12 col-lg-5 p-4'>
//               <h3 className='fw-bold text-white'>Contact Us</h3>
//               <div className="p-1 pera pt-2 text-white footer_contact">
//                 <Link
//                   to={"/"}
//                   target="_blank"
//                   className="text-decoration-none fw-medium footer_contact text-white"
//                 >
//                   <span className="pe-2 fs-4">
//                     <FaMapLocationDot />
//                   </span>
//                   172, RJD Textile Park, Hazira Road, Bhatha, Surat - 395009, Gujarat.
//                 </Link>
//               </div>
//               <div className="p-1 pera text-white">
//                 <Link
//                   to="mailto:abcdef@gmail.com"
//                   target="_blank"
//                   className="text-decoration-none fw-medium footer_contact text-white"
//                 >
//                   <span className="pe-2 fs-4">
//                     <FaMailBulk />
//                   </span>
//                   abcdef@gmail.com
//                 </Link>
//               </div>
//               <div className="p-1 pera text-white footer_contact">
//                 <Link
//                   to={"tel:+91 1234567890"}
//                   className="text-decoration-none fw-medium footer_contact text-white"
//                 >
//                   <span className="pe-2 fs-4">
//                     <MdWifiCalling3 />
//                   </span>
//                   +(91) 12345 67890
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <p
//             className="border-top border-white fw-medium text-white text-center p-3 m-0"
//             style={{ fontSize: "12px" }}
//           >
//             Copyright 2025 © Vimal. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Footer



// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <div className='footer_color'>
//       <div className="container pt-5">
//    <div className='d-block d-md-flex align-items-center justify-content-center'>
//          <div className=' footer_logo pe-5'>
//             <img src={require("../assets/Images/logo_vimal_agro.png")} alt="" className='img-fluid w-100 h-100' />
//         </div>
//         <div className='ps-3 fw-bold'>
//             <div>Addres : <span className='pera'>172, RJD Textile Park, Hazira Road, Bhatha, Surat - 395009, Gujarat. </span></div>
//             <div className='pt-1'>Call : <span className='pera'>(+91) 12345 67890</span></div>
//             <div className='pt-1'>Mail :<span className='pera'> abcdef@gmail.com</span></div>
//                   <div className="d-flex fs-4 my-3 ">
//                                <Link
//                                     to={"/"}
//                                     target="_blank"
//                                     className="footericon text-center p-2 mx-2  ms-0 d-flex text-decoration-none text-white facebookicon">
//                                     <FaFacebookF />
//                                 </Link>
//                                 <Link
//                                     to={"/"}
//                                     target="_blank"
//                                     className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white instaicon">
//                                     <FaInstagram />
//                                 </Link>
//                                 <Link
//                                     to={"/"}
//                                     target="_blank"
//                                     className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white twittericon">
//                                     <FaTwitter />
//                                 </Link>
//                                 <Link
//                                     to={"/"}
//                                     target="_blank"
//                                     className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white linkicon">
//                                     <FaLinkedinIn />
//                                 </Link>
//                             </div>
//         </div>
//    </div>
//    <hr/>
//  <p className='pera text-center pb-1  m-0'>  © copyright 2025 Vimal Agro Products Pvt Ltd. </p>
//       </div>
//     </div>
//   );
// }

// export default Footer;
