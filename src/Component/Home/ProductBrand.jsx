import React from 'react'
import Tittles from '../Tittles'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrandProduct } from './BrandProductList';
import { Link } from 'react-router-dom';

function ProductBrand() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='my-5 p-1'>
                <div className='container mb-5'>
                    <div className='brdstart'>
                        <Tittles stitle={"Our Brand"} ltitle={"Leading the market with quality and trust"} />
                    </div>
                    <div className="row mt-4 product-brand_bg shadow-lg rounded-4 p-5">
                        {/* <Slider {...settings}> */}
                            {BrandProduct.map((item, index) => (
                                <div key={index} className='col-3 px-3'>
                                    <div className='brand-card position-relative' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                                        <Link className='text-decoration-none icon-overlay position-absolute top-50 start-50 translate-middle' to={`/${item.brandId}`}>
                                            <span className='plus-icon text-white bg-dark d-flex justify-content-center align-items-center'>+</span>
                                        </Link>
                                        <div className='bg-white p-2  rounded-4 h-100 d-flex justify-content-center align-items-center brand-box'>
                                            <div style={{ width: "150px", height: "150px" }}>
                                                <img
                                                    src={item.image}
                                                    alt={item.alt}
                                                    className="w-100 h-100 img-fluid object-fit-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        {/* </Slider> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductBrand