import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Tittles from '../Tittles';
// import Tittles from '../Tittles';

function ProductSlider() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    const imageSettings = {
        asNavFor: nav2,
        ref: slider1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const contentSettings = {
        asNavFor: nav1,
        ref: slider2,
        dots: false,
        arrows: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='category_bgimg'>
            <div className="slider_bgcolor ">
                <div className='container-lg py-5'>
                    <div className='text-end text-lg-center'>
                        <Tittles stitle="Our Recipe's" ltitle="Vimal Agro's latest Recipes"/>
                    </div>
                    <div className="row align-items-center justify-content-md-center justify-content-center">
                        {/* Image Slider */}
                        <div className="col-md-5 col-10 m-2 m-lg-4 ps-5 ms-auto ms-md-0 py-3  rounded-start-5" style={{ backgroundColor: "#fffcf3" }} >
                            <Slider {...imageSettings}>
                                {recipes.map((item, index) => (
                                    <div key={index} className='d-flex justify-content-center'>
                                        <div className='productbgred text-center'>
                                            <img src={item.productImage} alt="product" className='rounded-circle image1 bg-warning p-3 shadow object-fit-cover' />
                                            <img src={item.dishImage} alt="dish" className='rounded-circle ms-3 border bg-white border-5 border-light position-relative my-3 image2 z-3 shadow ' />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* Content Slider */}
                        <div className="col-md-6 col-11  rounded-5 shadow-lg" style={{ backgroundColor: "var(--golden)" }}>
                            <Slider {...contentSettings}>
                                {recipes.map((item, index) => (
                                    <div key={index} className=" px-4 pt-3 pb-4" >
                                        <div className='fs-4 fw-bold text-danger' style={{ color: "var(--red)" }}>{item.title}</div>

                                        <h5 className='fw-bold mt-2 '>Instructions :</h5>
                                        <ol>
                                            {item.instructions.map((step, idx) => (
                                                <li key={idx} className='mb-2 fw-normal'>{step}</li>
                                            ))}
                                        </ol>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        dishImage: require('../../assets/Images/Pickles/gunda_pickle_thumb.png'),
        productImage: "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.47.51_PM.png?v=1728991096&width=360"
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
        dishImage: require('../../assets/Images/Pickles/methia_mango_thumb.png'),
        productImage: "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.46.33_PM.png?v=1728991057&width=360"
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
        dishImage: require('../../assets/Images/Curry Paste/tikka_thumb.png'),
        productImage: "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.50.11_PM.png?v=1728991237&width=360"
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
        dishImage: require('../../assets/Images/recepi2.jpg'),
        productImage: "https://www.swad.shop/cdn/shop/files/DSC_8662-min.jpg?v=1728981995&width=360"
    }
];
