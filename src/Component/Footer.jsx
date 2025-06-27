import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk, FaTwitter } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdOutlineDoubleArrow, MdWifiCalling3 } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='footer_bg'>
                <div className='container'>
                    <div className='row pt-3'>
                        <div className='col-12 col-lg-4 p-4 text-center'>
                            <div style={{ width: "100px", height: "100px" }} className='mx-auto'>
                                <img src={require("../assets/Images/logo_vimal_agro.png")} className='img-fluid w-100 h-100 object-fit-cover' alt="" />
                            </div>
                            <div className='text-white my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, explicabo.</div>
                            <div className="d-flex fs-4 my-3 justify-content-center">
                                <Link
                                    to={"/"}
                                    target="_blank"
                                    className="footericon text-center p-2 mx-2  ms-0 d-flex text-decoration-none text-white facebookicon">
                                    <FaFacebookF />
                                </Link>
                                <Link
                                    to={"/"}
                                    target="_blank"
                                    className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white instaicon">
                                    <FaInstagram />
                                </Link>
                                <Link
                                    to={"/"}
                                    target="_blank"
                                    className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white twittericon">
                                    <FaTwitter />
                                </Link>
                                <Link
                                    to={"/"}
                                    target="_blank"
                                    className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white linkicon">
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 p-4'>
                            <h3 className='fw-bold text-white'>Quick Links</h3>
                            <div className="p-1 pera pt-2 pt-3">
                                <Link
                                    to={"/"}
                                    className="text-decoration-none footer_tittle fw-medium text-white"
                                >
                                    <span className="pe-2 fs-6">
                                        <MdOutlineDoubleArrow />
                                    </span>
                                    <span className='footer-tittle_text'>Home</span>
                                </Link>
                            </div>
                            <div className="p-1 pera pt-2">
                                <Link
                                    to={"/"}
                                    className="text-decoration-none footer_tittle fw-medium text-white"
                                >
                                    <span className="pe-2 fs-6">
                                        <MdOutlineDoubleArrow />
                                    </span>
                                    <span className='footer-tittle_text'>About Us</span>
                                </Link>
                            </div>
                            <div className="p-1 pera pt-2">
                                <Link
                                    to={"/"}
                                    className="text-decoration-none footer_tittle fw-medium text-white"
                                >
                                    <span className="pe-2 fs-6">
                                        <MdOutlineDoubleArrow />
                                    </span>
                                    <span className='footer-tittle_text'>Products</span>
                                </Link>
                            </div>
                            <div className="p-1 pera pt-2">
                                <Link
                                    to={"/"}
                                    className="text-decoration-none footer_tittle fw-medium text-white"
                                >
                                    <span className="pe-2 fs-6">
                                        <MdOutlineDoubleArrow />
                                    </span>
                                    <span className='footer-tittle_text'>Contact Us</span>
                                </Link>
                            </div>
                        </div>
                        <div className='col-12 col-lg-5 p-4'>
                            <h3 className='fw-bold text-white'>Contact Us</h3>
                            <div className="p-1 pera pt-2 text-white footer_contact">
                                <Link
                                    to={"/"}
                                    target="_blank"
                                    className="text-decoration-none fw-medium footer_contact text-white"
                                >
                                    <span className="pe-2 fs-4">
                                        <FaMapLocationDot />
                                    </span>
                                    172, RJD Textile Park, Hazira Road, Bhatha, Surat - 395009, Gujarat, India.
                                </Link>
                            </div>
                            <div className="p-1 pera text-white">
                                <Link
                                    to="mailto:abcdef@gmail.com"
                                    target="_blank"
                                    className="text-decoration-none fw-medium footer_contact text-white"
                                >
                                    <span className="pe-2 fs-4">
                                        <FaMailBulk />
                                    </span>
                                    abcdef@gmail.com
                                </Link>
                            </div>
                            <div className="p-1 pera text-white footer_contact">
                                <Link
                                    to={"tel:+91 1234567890"}
                                    className="text-decoration-none fw-medium footer_contact text-white"
                                >
                                    <span className="pe-2 fs-4">
                                        <MdWifiCalling3 />
                                    </span>
                                    +(91) 12345 67890
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p
                        className="border-top border-white fw-medium text-white text-center p-3 m-0"
                        style={{ fontSize: "12px" }}
                    >
                        Copyright 2025 © Vimal. All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer