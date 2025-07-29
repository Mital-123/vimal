import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGreaterThan, FaLeaf, FaLessThan } from 'react-icons/fa';
import Slider from 'react-slick';
import ButtonCom from '../ButtonCom';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
const SampleNextArrow = (props) => {
    const { className, onClick, style } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px", zIndex: 2 }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, onClick, style } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 2 }}
            onClick={onClick}
        />
    );
};
function ProductSlider() {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };


    return (
        <>
            <div className="container-xxl">
                <div className='row justify-content-between'>
                    <div className='col-7 ms-sm-5 ps-sm-5'>
                        <div className='d-flex align-items-center'>
                            <div className="p-2 rounded-circle" style={{ background: "var(--golden)" }}>
                                <FaLeaf className='fs-3' />
                            </div>
                            <i className='h6 ms-2'>Authentic <br />
                                Indian recipe</i>
                        </div>
                    </div>
                    <div className='col-5 rounded-top-5 rounded-end-0' style={{ height: '80px', background: "var(--golden)" }}></div>
                </div>
            </div>


            <div className="container bg-white">
                <div className="row">
                    <div className="col-12 order-lg-0 order-1">
                        <div className="row align-items-end justify-content-end ">
                            <div className="col-lg-10 px-0">
                                <Slider ref={sliderRef}  {...settings}>
                                    {recipes.map((item, index) => (
                                        <div key={index}>
                                            <div className="row justify-content-end align-items-end animate-slide">
                                                <div className="col-lg-4 col-md-6 text-center position-relative">
                                                    <div className="productbgred mx-auto">
                                                        <div className='text-start ms-4 pt-5'>
                                                            <img src={item.dishImage} alt="" className='image1 rounded-circle' />
                                                        </div>
                                                        <div className='text-end'>
                                                            <img src={item.productImage} alt="" className='image2 rounded-circle ms-auto me-5 bg-light ' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-6 text-start px-4">
                                                    <h3 className='display-6 fw-bold'>{item.title}</h3>
                                                    <p className="fw-semibold">Instruction</p>
                                                    <ol className="small lh-lg">
                                                        {item.instructions.map((x, i) => {
                                                            return (
                                                                <li>{x}</li>
                                                            )
                                                        })}
                                                    </ol>
                                                    <p className="small">Enjoy with Swad pickles and chutney!</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 text-start bg-transparent product-line order-0 order-lg-1">
                        <p className="mb-1 fw-semibold small text-muted">Authentic Indian recipe</p>
                        <h1>
                            With <span className="fw-bold" style={{ color: 'var(--golden)' }}>Vimal</span>, <br />
                            make your Food <br />
                            <span className="fw-bold" style={{ color: 'var(--golden)' }}>Quick, Easy & Flavourful</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container-xxl">
                <div className="">
                    <div className='ms-auto col-sm-5 col-7 d-flex align-items-center justify-content-between px-3'
                        style={{ height: '80px', borderBottomLeftRadius: "2rem", background: "var(--golden)" }}>
                        <button className="btn btn-link text-white fs-4 ms-auto bg-white me-1" onClick={() => sliderRef.current?.slickPrev()}>
                            <FaChevronLeft className='' style={{ color: 'var(--golden)', fontWeight: 900 }} />
                        </button>
                        <button className="btn btn-link text-white fs-4 bg-white" onClick={() => sliderRef.current?.slickNext()}>
                            <FaChevronRight className='' style={{ color: 'var(--golden)', fontWeight: 900 }} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductSlider;

const recipes = [
    {
        title: "Mango Smoothie Bowl",
        instructions: [
            "Add fresh mango pulp to a blender with yogurt and honey.",
            "Blend until smooth and creamy.",
            "Pour into a bowl and top with granola, nuts, and fresh fruits.",
            "Drizzle some extra honey on top for flavor.",
            "Serve chilled and enjoy your refreshing smoothie bowl!"
        ],
        productImage: require('../../assets/Images/Pickles/gunda_pickle_thumb.png'),
        dishImage: "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.47.51_PM.png?v=1728991096&width=360"
    },
    {
        title: "Spicy Mango Chutney",
        instructions: [
            "Heat oil in a pan, add mustard seeds until they splutter.",
            "Add chopped mangoes, red chili powder, salt, and jaggery.",
            "Cook on medium flame until mixture thickens.",
            "Let it cool and store in a glass jar.",
            "Perfect accompaniment for parathas and rice."
        ],
        productImage: require('../../assets/Images/Pickles/methia_mango_thumb.png'),
        dishImage: "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.46.33_PM.png?v=1728991057&width=360"
    },
    {
        title: "Tangy Mango Salad",
        instructions: [
            "In a bowl, add chopped cucumbers, tomatoes, onions, and mango cubes.",
            "Season with black salt, lemon juice, and chili flakes.",
            "Toss everything together well.",
            "Garnish with coriander leaves and roasted peanuts.",
            "Serve immediately for the best crunch."
        ],
        productImage: require('../../assets/Images/Curry Paste/tikka_thumb.png'),
        dishImage: "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.50.11_PM.png?v=1728991237&width=360"
    },
    {
        title: "Classic Mango Lassi",
        instructions: [
            "Blend mango pulp with chilled yogurt and sugar.",
            "Add a pinch of cardamom powder and crushed ice.",
            "Blend until frothy.",
            "Pour into tall glasses and garnish with saffron strands.",
            "Serve cold for a refreshing summer drink."
        ],
        productImage: require('../../assets/Images/recepi2.jpg'),
        dishImage: "https://www.swad.shop/cdn/shop/files/DSC_8662-min.jpg?v=1728981995&width=360"
    }
];
