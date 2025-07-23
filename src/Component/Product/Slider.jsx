import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';
import Tittles from '../Tittles';

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
        autoplay: false,
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
        autoplay: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='container py-5'>
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6">
                    {/* Image Slider */}
                    <Slider {...imageSettings}>
                        {recipes.map((item, index) => (
                            <>
                                <div className='productbgred mx-auto'>
                                    <div className=''>
                                        <img src={item.productImage} alt="" className='rounded-circle image1 bg-warning p-3 shadow' />
                                    </div>
                                    <div className='me-sm-1 me-0'>
                                        <img src={item.dishImage} alt="" className='rounded-circle ms-auto border bg-white border-5 border-light shadow-lg image2' />
                                    </div>
                                </div>
                            </>
                        ))}
                    </Slider>
                </div>

                <div className="col-lg-6 rounded-5 shadow-lg" style={{ backgroundColor: "#fffcf3" }}>
                    {/* Content Slider */}
                    <Slider {...contentSettings}>
                        {recipes.map((item, index) => (
                            <div key={index} className=''>
                                <div className=" px-3 py-4  ">
                                    <div><Tittles stitle={item.title} /></div>
                                    <h5 className='fw-bold ms-3'>Instructions :</h5>
                                    <ol>
                                        {item.instructions.map((step, idx) => (
                                            <li key={idx} className='mb-2'>{step}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ProductSlider

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
        dishImage: require('../../assets/Images/recepi1.jpg'),
        productImage: require('../../assets/Images/productbg_img.jpg')
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
        dishImage: require('../../assets/Images/recepi2.jpg'),
        productImage: require('../../assets/Images/product_thumb_2.png')
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
        dishImage: require('../../assets/Images/recepi1.jpg'),
        productImage: require('../../assets/Images/productbg_img.jpg')

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
        productImage: require('../../assets/Images/product_thumb_2.png')
    }
];