import React, { useState, useEffect, useRef } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowDropdownCircle, IoMdArrowDropdown } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { LuAlignRight } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import products from '../Product';

function Header() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
let product=products
    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowDropdown(prev => !prev);
    };

    const closeAll = () => {
        setIsOpen(false);
        setShowDropdown(false);
    };

    // Auto-close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        if (showDropdown) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showDropdown]);

    return (
        <div className='bg-white w-100 position-fixed top-0 z-3'>
            <nav className="bg-white fstyle navbar navbar-expand-md fixed-top shadow">
                <div className='container-fluid ms-5'>

                    {/* Logo */}
                    <Link className="navbar-brand bg-light me-0" to="/">
                        <img
                            src={require('../assets/Images/logo_vimal_agro.png')}
                            alt="Logo"
                            height={75}
                            width={75}
                            className="img-fluid object-fit-cover"
                            style={{ filter: "drop-shadow(-11px 11px 11px #0000002d)" }}
                        />
                    </Link>

                    {/* Toggler Button */}
                    <button
                        className="navbar-toggler ms-auto py-3 text-warning"
                        type="button"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="navbar-toggler-icon text-warning">
                            {isOpen ? <IoCloseSharp className='text-light fs-3' /> : <LuAlignRight className='fs-3' />}
                        </span>
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={`offcanvas offcanvas-end d-block d-md-none ${isOpen ? 'show' : ''}`}
                        style={{
                            width: '100%',
                            background: '#6103038c',
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            height: '100vh',
                            transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                            visibility: "visible",
                            transition: 'transform 0.5s ease-in-out'
                        }}
                    >
                        <div className='ms-auto bg-light h-100' style={{ width: '250px' }}>
                            <div className="offcanvas-header justify-content-end p-3">
                                <button className="btn" onClick={closeAll}>
                                    <IoCloseSharp className='fs-3' />
                                </button>
                            </div>
                            <div className="offcanvas-body p-3">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className={`nav-link text-center ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={closeAll}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-center ${location.pathname === "/aboutus" ? "active" : ""}`} to="/aboutus" onClick={closeAll}>About</Link>
                                    </li>
                                    <li className="nav-item text-center position-relative" ref={dropdownRef}>
                                        <div className="d-inline-block">
                                            <Link className={`nav-link d-inline-block ${location.pathname === "/product" ? "active" : ""}`} to="/product" onClick={closeAll}>
                                                Product   <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                                                <IoMdArrowDropdown />
                                            </span>
                                            </Link>
                                          
                                        </div>
                                        {showDropdown && (
                                            
                                            <ul className="list-unstyled mt-2 bg-white shadow rounded py-2 px-3">
                                                <li><Link to="/product/item1" className="dropdown-item" onClick={closeAll}>Item 1</Link></li>
                                                <li><Link to="/product/item2" className="dropdown-item" onClick={closeAll}>Item 2</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-center ${location.pathname === "/blog" ? "active" : ""}`} to="/blog" onClick={closeAll}>Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-center ${location.pathname === "/contact" ? "active" : ""}`} to="/contact" onClick={closeAll}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-collapse d-md-block d-none justify-content-end pb-1" id="navbarNav">
                        <ul className="navbar-nav pt-3 px-3 ulbg">
                            <li className="nav-item">
                                <Link className={`nav-link px-4 mx-1 ${location.pathname === "/" ? "active" : ""}`} to="/">
                                    <FaHome className='fs-4' />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link px-4 mx-1 fs-6 ${location.pathname === "/aboutus" ? "active" : ""}`} to="/aboutus">About</Link>
                            </li>
                            <li className="nav-item position-relative d-flex align-items-center" ref={dropdownRef}>
                                <Link className={`nav-link px-3 mx-1 fs-6 ${location.pathname === "/product" ? "active" : ""}`} to="/product">Product         <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                                    <IoIosArrowDropdownCircle />
                                </span></Link>
                        
                                {showDropdown && (
                                    
                                    <ul className="position-absolute bg-white shadow rounded  p-1" style={{ top: "100%", left: "-50%", zIndex: 5 }}>
                                          {products.map((p) => (
                                            <li key={p.id} className=' dropdown_color list-unstyled py-1 ps-2 pe-1'>
                                                <Link to={`/product/${p.id}`} className="dropdown-item " onClick={closeAll}>
                                                    {p.h1}
                                                </Link>
                                            </li>
                                        ))}
                                        {/* <li><Link to="/product/item1" className="dropdown-item">Item 1</Link></li>
                                        <li><Link to="/product/item2" className="dropdown-item">Item 2</Link></li> */}
                                    </ul>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link px-4 mx-1 fs-6 ${location.pathname === "/blog" ? "active" : ""}`} to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link px-4 mx-1 fs-6 ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
