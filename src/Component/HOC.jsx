import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaFileDownload, FaLinkedinIn, FaMailBulk, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BiSolidPhoneCall } from 'react-icons/bi';

function HOC(Component) {
    function NewComponent() {

        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 100) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        return (
            <>
                <Header />
                <div>
                    <div className={`social_Nav position-fixed d-none d-md-block ${isVisible ? "show_side-icons" : ""}`}>
                        <ul className='p-0'>
                            <li className="Facebook_sideNav d-block text-end">
                                <Link to="tel:+911234509876"  className='sideNavIcon_tittle align-items-center text-white text-decoration-none'>
                                    <span className='titletext border-0'> +91 12345 09876</span>
                                    <div className='side_Nav_Icon text-center bg-white p-2 rounded-circle fs-5 d-flex justify-content-center align-items-center'><BiSolidPhoneCall /></div>
                                </Link>
                            </li>
                            <li className="Instagram_sideNav d-block m-2 text-end p-2">
                                <Link to="mailto:vimal123@gmail.com" target="_blank" className='sideNavIcon_tittle align-items-center text-white text-decoration-none'>
                                    <span className='titletext border-0'>vimal123@gmail.com</span>
                                    <div className='side_Nav_Icon text-center bg-white p-2 rounded-circle fs-5 d-flex justify-content-center align-items-center'><FaMailBulk /></div>
                                </Link>
                            </li>
                            <li className="Twitter_sideNav d-block m-2 text-end p-2">
                                <Link                to={require("../assets/Images/groser.pdf")}
                target="_blank"
                 className='sideNavIcon_tittle align-items-center text-white text-decoration-none'>
                                    <span className='titletext border-0'>Download Brouchers</span>
                                    <div className='side_Nav_Icon text-center bg-white p-2 rounded-circle fs-5 d-flex justify-content-center align-items-center'><FaFileDownload  /></div>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <Component />
                <Footer />
            </>
        )
    }
    return NewComponent
}

export default HOC