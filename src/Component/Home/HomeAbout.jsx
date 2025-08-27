import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';
import Tittles from '../Tittles';
import ButtonCom from '../ButtonCom';
import { Link } from 'react-router-dom';

function HomeAbout() {

    const testimonials = [
        {
            quote:
                "Vimal Agro Products was born with a simple dream—to bring the authentic taste of Indian home-cooked food to every corner of the world. From a humble vision, it has grown into a globally trusted name, loved by families across continents. With respect for age-old recipes and a passion for quality, we make it easy to enjoy the richness of Indian cuisine anytime, anywhere. From curries and pickles to snacks and sweets, every Vimal Agro product celebrates tradition, made convenient for modern life. Savor the tradition—made with love.",
            name: "parishi ",
            title: "LOREM",
            img: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_003.png",
            logo: require("../../assets/Images/logo_vimal_agro.png"),
        },

    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="my-0 my-md-3 pt-1 pt-md-3 overflow-hidden">
            <div className="testi_bg overflow-hidden">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center align-content-center py-1 py-lg-3">
                        <div className=" col-12 col-lg-6 p-3">
                            <div className="h-100 d-flex">
                                <div className="sec1_imgtesti h-100">
                                    <div className='test-shinee'>
                                        <img
                                            src={
                                                "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.49.00_PM.png?v=1728991163&width=360"
                                            }
                                            alt=""
                                            className="img-fluid w-100 "
                                            data-aos="fade-right"
                                            data-aos-duration="1800"
                                            data-aos-once="true"
                                        />
                                    </div>
                                    <div className="my-3 h-100 test-shinee">
                                        <img
                                            src={
                                                "https://www.swad.shop/cdn/shop/files/Swad_Anshoooo-19.jpg?v=1729109375&width=360"
                                            }
                                            alt=""
                                            className="img-fluid w-100"
                                            data-aos="fade-right"
                                            data-aos-duration="1800"
                                            data-aos-once="true"
                                        />
                                    </div>
                                </div>
                                <div className="sectesti_img ms-3 test-shinee" data-aos="zoom-in"
                                    data-aos-duration="1800"
                                    data-aos-once="true">
                                    <img
                                        src={
                                            "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.50.11_PM.png?v=1728991237&width=360"
                                        }
                                        alt=""
                                        className="img-fluid w-100 h-100"
                                    />
                                </div>
                            </div>
                            <div className="p-0 aboutslide_sec overflow-hidden">
                                <div className="aboutslider ms-auto m-0 overflow-hidden">
                                    <div className="p-0 m-0 overflow-hidden border border-5 border-white">
                                        <div className="slider_imageaboutus test-shinee" data-aos="zoom-in"
                                            data-aos-duration="1800"
                                            data-aos-once="true">
                                            <img
                                                src={
                                                    "https://www.vimalagro.com/wp-content/uploads/2018/03/inner_about_element_2-794x528.jpg"
                                                }
                                                alt=""
                                                className="img-fluid w-100 h-100 object-fit-cover "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-100 col-12 col-lg-6 p-3 p-lg-5 pt-0 pt-md-3 pb-0 pb-md-2">


                            <div className='brdstart'>
                                <Tittles stitle={"About Us"} ltitle={"Authentic Taste, Global Trust"} />
                            </div>


                            {testimonials.map((testimonial, index) => (
                                <div
                                    className="px-0 py-1 py-md-3"
                                    key={index}
                                >
                                    <div>
                                        <FaQuoteLeft className="fs-1 text-secondary" />
                                    </div>
                                    <div className="pt-2 pt-md-4 pera" style={{ textAlign: "justify" }}>
                                        {testimonial.quote}
                                    </div>
                                    <div className="row  m-0  mt-1 mt-md-3">
                                        <div className="col-3 p-0 m-0 bg-white">
                                            <div className="h-100 fs-1 text-white text-center shadow d-flex align-items-center justify-content-center " style={{ backgroundColor: "#6a1a1f", borderRadius: "20px 0px 0px 20px" }}>
                                                <FaQuoteRight />
                                            </div>
                                        </div>
                                        <div className="col-9 shadow  bg-white" style={{ borderRadius: "0px 20px 20px 0px" }}>
                                            <div className="h-100 d-flex align-items-center py-2 py-md-4   pera fw-bold text-center">
                                                " Vimal Agro proudly serves homes in India and beyond, making mealtimes easier, tastier, and filled with nostalgia. "
                                            </div>
                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center align-content-center mt-2">

                                        <div className="mt-2">
                                            <Link to={"/aboutus"} className='text-decoration-none'><ButtonCom btn={"view More"} /></Link>
                                        </div>
                                        {/* <div className=" p-1 rounded w-25 h-25 ms-auto  test-shinee" style={{ filter: "drop-shadow(-11px 11px 11px #0000009b)" }}>
                                            <img
                                                src={testimonial.logo}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div> */}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;
