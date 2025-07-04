import React from 'react'
import products from '../../Product'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick';
import { ImArrowRight2 } from 'react-icons/im';
import Tittles from '../Tittles';

function ProductHighlight() {

    const navigate = useNavigate();

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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <div >
                <div className='container'>
                    <Slider {...settings}>
                        {products.map((item, i) => (
                            <div key={i} className="h-100 px-4 py-4">
                                <div className='card-box position-relative h-100'>
                                    <div className='card-content border shadow' style={{ backgroundColor: "#e8e6e6b3", borderRadius: "20px" }}>
                                        <div className='text-center p-5'>
                                            <img
                                                src={item.img}
                                                alt=""
                                                className='product-img mx-auto'
                                            />
                                        </div>
                                        <div className='bg-white d-flex p-3 align-items-center justify-content-between mt-auto' style={{ borderRadius: "0px 0px 20px 20px" }}>
                                            <div style={{ color: "var(--red)", lineHeight: "1.4", fontWeight: "bold", whiteSpace: "pre-wrap" }}>
                                                {item.h1}
                                            </div>
                                            <div>
                                                <div className="product-style-wrapper">
                                                    <button className="product_button" onClick={() => navigate(`/product/${item.id}`)}>
                                                        <div className="product-btn-box">
                                                            <span className="product_btn-elem product_btn-elem1">
                                                                <ImArrowRight2 className='ps-1 fs-5 text-white' />
                                                            </span>
                                                            <span className="product_btn-elem product_btn-elem2">
                                                                <ImArrowRight2 className='ps-1 fs-5 text-white' />
                                                            </span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-line"></div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default ProductHighlight