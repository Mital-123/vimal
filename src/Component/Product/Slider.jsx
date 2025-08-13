import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaLeaf } from 'react-icons/fa';
import Slider from 'react-slick';
import Tittles from '../Tittles';
function ProductSlider() {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
    };


    return (
        <>
            <div className="container">
                <div className='row justify-content-center text-center'>
                    {/* <div className='col-sm-2 col-7 rounded-4 m-auto' style={{ background: "var(--golden)" }}>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className="p-2 rounded-circle" style={{ background: "white", color: 'var(--golden)' }}>
                                <FaLeaf className='fs-5' />
                            </div>
                            <i className='pera ms-2 py-3 fw-bold'>Authentic 
                                Indian recipe</i>
                        </div>
                    </div> */}
                    {/* <div className='col-sm-5 col-6 ms-sm-5 ps-sm-5 rounded-top-5 rounded-end-0' style={{ height: '80px', background: "var(--golden)" }}></div> */}
                </div>
            </div>


            <div className="container bg-white">
                <div className="row">
                    <div className="col-12 order-lg-0 order-1">
                        <div className="row align-items-end justify-content-end ">
                            <div className="col-lg-10 px-0 recepieslider">
                                <Slider ref={sliderRef}  {...settings}>
                                    {recipes.map((item, index) => (
                                        <div key={index}>
                                            <div className="row justify-content-end align-items-center animate-slide">
                                                <div className="col-lg-4 col-md-6 text-center position-relative">
                                                    <div className="productbgred mx-auto" data-aos="zoom-in"
                                                        data-aos-duration="1500"
                                                        data-aos-once="true">
                                                        <div className='text-start ms-4 pt-4 pt-md-5'>
                                                            <img src={item.dishImage} alt="" className='image1 rounded-circle' />
                                                        </div>
                                                        <div className='text-end'>
                                                            <img src={item.productImage} alt="" className='image2 rounded-circle ms-auto me-5 bg-light ' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-6 text-start px-4">
                                                    <div className=' rounded-pill me-auto' style={{ background: "var(--golden)", width: "fit-content" }} data-aos="zoom-in"
                                                        data-aos-duration="1500"
                                                        data-aos-once="true">
                                                        <div className='d-flex align-items-center justify-content-center p-2'>
                                                            <div className="p-1 rounded-circle" style={{ background: "white", color: 'var(--golden)' }}>
                                                                <FaLeaf className='fs-5' />
                                                            </div>
                                                            <i className='pera mx-2 fw-bold'>Authentic
                                                                Indian recipe</i>
                                                        </div>
                                                    </div>
                                                    <h3 className='display-6 fw-bold ftittle mt-1' data-aos="fade-up"
                                                        data-aos-duration="1500"
                                                        data-aos-once="true">{item.title}</h3>
                                                    <h4
                                                        className=" fw-bold stittle p-0 my-1"
                                                        data-aos="fade-down"
                                                        data-aos-duration="1500"
                                                        data-aos-once="true"
                                                    >
                                                        Instruction
                                                    </h4>
                                                    {/* <p className="fw-semibold ps-2 "><Tittles stitle="Instruction"/></p> */}
                                                    {/* <ol className="small lh-lg"> */}
                                                    {item.instructions.map((x, i) => {
                                                        return (
                                                            // <li>{x}</li>
                                                            <div className='pt-1 pt-0 pt-md-1 pera'>{i + 1}. {x}</div>
                                                        )
                                                    })}
                                                    {/* </ol> */}
                                                    <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis temporibus, optio voluptatem consequatur similique natus cum veniam omnis voluptate vero.  </p>
                                                    <p className="small p-0 m-0">Enjoy with Swad pickles and chutney!</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 text-start bg-transparent product-line order-0 order-lg-1" >
                        <p className="mb-1 fw-semibold small text-muted">Authentic Indian recipe</p>
                        <div className='fsizefont'>
                            With <span className="fw-bold" style={{ color: 'var(--golden)' }}>Vimal</span>, <br />
                            make your Food <br />
                            <span className="fw-bold" style={{ color: 'var(--golden)' }}>Quick, Easy & Flavourful</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row justify-content-center text-center'>
                    <div className='col-sm-5 col-7 pt-0 px-3 rounded-top-5'
                        style={{ height: '60px', }}>
                        <button className="btn btn-link text-white fs-5 ms-auto mx-2 " style={{ backgroundColor: "var(--golden)" }} onClick={() => sliderRef.current?.slickPrev()}>
                            <FaChevronLeft className='' style={{ color: 'white', fontWeight: 900 }} />
                        </button>
                        <button className="btn btn-link text-white fs-5  mx-2" style={{ backgroundColor: "var(--golden)" }} onClick={() => sliderRef.current?.slickNext()}>
                            <FaChevronRight className='' style={{ color: 'white', fontWeight: 900 }} />
                        </button>
                    </div>
                    {/* <div className='col-sm-5 col-6 ms-sm-5 ps-sm-5 rounded-top-5 rounded-end-0' style={{ height: '80px', background: "var(--golden)" }}></div> */}
                </div>
            </div>

            {/* <div className="container">
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
            </div> */}
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
