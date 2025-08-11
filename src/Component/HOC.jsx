import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaFileDownload, FaLinkedinIn, FaMailBulk, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BiSolidPhoneCall } from 'react-icons/bi';
import brochurePDF from '../assets/Images/groser.pdf';
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
                <div className={`social_Nav ${isVisible ? "show" : "hide"}`}>
                    <ul>
                        <li>
                            <a href="tel:+911234509876" className="sideNavIcon_tittle">
                                <div className="side_Nav_Icon order-0"><BiSolidPhoneCall /></div>
                                <span className='order-1'>+91 12345 09876</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:vimal123@gmail.com" className="sideNavIcon_tittle">
                                <div className="side_Nav_Icon order-0"><FaMailBulk /></div>
                                <span className='order-1'>vimal123@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a href={brochurePDF} download target="_blank" rel="noopener noreferrer" className="sideNavIcon_tittle">
                                <div className="side_Nav_Icon order-0"><FaFileDownload /></div>
                                <span className="order-1">Download Brochure</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <Component />
                <Footer />
            </>
        )
    }
    return NewComponent
}

export default HOC