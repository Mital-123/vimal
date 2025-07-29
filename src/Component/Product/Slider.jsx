import Slider from 'react-slick';

function ProductSlider() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="container bg-white py-5">
            <div className="row">
                <div className="col-12">
                    <div className="row align-items-end justify-content-end  order-lg-0 order-1 ">
                        <div className="col-lg-10 px-0">
                            <Slider {...settings}>
                                {[0, 1, 2, 3, 4].map((item, index) => (
                                    <div>
                                        <div key={index} className="row justify-content-end align-items-end">
                                            <div className="col-lg-4 col-md-6 text-center position-relative">
                                                <div className="productbgred mx-auto">
                                                    <div className='text-start ms-4 pt-5'>
                                                        <img src="https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.47.51_PM.png?v=1728991096&width=360" alt="" className='image1 rounded-circle  ' />
                                                    </div>
                                                    <div className='text-end'>
                                                        <img src={require('../../assets/Images/Pickles/gunda_pickle_thumb.png')} alt="" className='image2 rounded-circle ms-auto me-5 bg-light p-3  ' />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-7 col-md-6 text-start px-4">
                                                <h3 className='display-6 fw-bold'>Tikka Masala with Veg Pulao</h3>
                                                <p className="fw-semibold">Instruction</p>
                                                <ol className="small">
                                                    <li>Marinate the chicken pieces with a little oil, Swad ginger garlic paste, lemon and salt to taste. Let it sit for at least 30 minutes.</li>
                                                    <li>Heat oil in a pan and add the marinated chicken pieces and cook until golden brown.</li>
                                                    <li>Pour in the SWAD Butter Chicken Sauce. Simmer for 3-5 min stirring occasionally.</li>
                                                    <li>Garnish with chopped coriander, fresh cream, and dried fenugreek leaves.</li>
                                                    <li>Serve with Swad rice preparations, paratha, or naan.</li>
                                                </ol>
                                                <p className="small">Pair with Swad pickles, papad, and mango chutney for a complete meal.</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-start bg-transparent product-line order-0 order-lg-1 bg-white">
                    <p className="mb-1 fw-semibold small text-muted">Authentic Indian recipe</p>
                    <h1>
                        With <span className="fw-bold" style={{ color: 'var(--golden)' }}>Vimal</span>, <br />
                        make your Food <br />
                        <span className="fw-bold" style={{ color: 'var(--golden)' }}>Quick, Easy & Flavourful</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider





// import { useEffect, useRef, useState } from 'react';
// import Slider from 'react-slick';
// import Tittles from '../Tittles';
// import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from 'react-icons/bi';

// const CustomPrevArrow = ({ onClick }) => (
//     <div
//         className="custom-arrow custom-prev"
//         onClick={onClick}
//         style={{
//             position: 'absolute',
//             top: '10px',
//             right: '10%',
//             zIndex: 1,
//             cursor: 'pointer',
//         }}
//     >
//         <span style={{ fontSize: '30px', color: '#d9534f' }}><BiSolidLeftArrowCircle /></span>
//     </div>
// );

// const CustomNextArrow = ({ onClick }) => (
//     <div
//         className="custom-arrow custom-next"
//         onClick={onClick}
//         style={{
//             position: 'absolute',
//             top: '10px',
//             right: '0',
//             zIndex: 1,
//             cursor: 'pointer',
//         }}
//     >
//         <span style={{ fontSize: '30px', color: '#d9534f' }}><BiSolidRightArrowCircle /></span>
//     </div>
// );

// function ProductSlider() {
//     const [nav1, setNav1] = useState(null);
//     const [nav2, setNav2] = useState(null);
//     const slider1 = useRef();
//     const slider2 = useRef();

//     useEffect(() => {
//         setNav1(slider1.current);
//         setNav2(slider2.current);
//     }, []);

//     const imageSettings = {
//         asNavFor: nav2,
//         ref: slider1,
//         dots: false,
//         arrows: true,
//         infinite: true,
//         speed: 2000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 3000,
//         prevArrow: <CustomPrevArrow />,
//         nextArrow: <CustomNextArrow />,
//     };

//     const contentSettings = {
//         asNavFor: nav1,
//         ref: slider2,
//         dots: false,
//         arrows: false,
//         infinite: true,
//         vertical: true,
//         verticalSwiping: true,
//         speed: 2000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 3000,
//     };

//     return (
//         <div className='category_bgimg'>
//             <div className="slider_bgcolor ">
//                 <div className='container-lg py-5'>
//                     <div className='text-end text-lg-center'>
//                         <Tittles stitle="Our Recipe's" ltitle="Vimal Agro's latest Recipes" />
//                     </div>
//                     <div className="row align-items-center justify-content-md-center justify-content-center">
//                         {/* Image Slider */}
//                         <div className="col-md-5 col-10 m-2 m-lg-4 ps-5 ms-auto ms-md-0 py-3  rounded-start-5" style={{ backgroundColor: "#fffcf3" }} >
//                             <Slider {...imageSettings}>
//                                 {recipes.map((item, index) => (
//                                     <div key={index} className='d-flex justify-content-center'>
//                                         <div className='productbgred text-center'>
//                                             <img src={item.productImage} alt="product" className='rounded-circle image1 bg-warning p-3 shadow object-fit-cover' />
//                                             <img src={item.dishImage} alt="dish" className='rounded-circle ms-3 border bg-white border-5 border-light position-relative my-3 image2 z-3 shadow ' />
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         </div>

//                         {/* Content Slider */}
//                         <div className="col-md-6 col-11  rounded-5 shadow-lg" style={{ backgroundColor: "var(--golden)" }}>
//                             <Slider {...contentSettings}>
//                                 {recipes.map((item, index) => (
//                                     <div key={index} className=" px-4 pt-3 pb-4" >
//                                         <div className='fs-4 fw-bold text-danger' style={{ color: "var(--red)" }}>{item.title}</div>

//                                         <h5 className='fw-bold mt-2 '>Instructions :</h5>
//                                         <ol>
//                                             {item.instructions.map((step, idx) => (
//                                                 <li key={idx} className='mb-2 fw-normal'>{step}</li>
//                                             ))}
//                                         </ol>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductSlider;

// const recipes = [
//     {
//         title: "Mango Smoothie Bowl",
//         instructions: [
//             "Add fresh mango pulp to a blender with yogurt and honey.",
//             "Blend until smooth and creamy.",
//             "Pour into a bowl and top with granola, nuts, and fresh fruits.",
//             "Drizzle some extra honey on top for flavor.",
//             "Serve chilled and enjoy your refreshing smoothie bowl!"
//         ],
//         dishImage: require('../../assets/Images/Pickles/gunda_pickle_thumb.png'),
//         productImage: "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.47.51_PM.png?v=1728991096&width=360"
//     },
//     {
//         title: "Spicy Mango Chutney",
//         instructions: [
//             "Heat oil in a pan, add mustard seeds until they splutter.",
//             "Add chopped mangoes, red chili powder, salt, and jaggery.",
//             "Cook on medium flame until mixture thickens.",
//             "Let it cool and store in a glass jar.",
//             "Perfect accompaniment for parathas and rice."
//         ],
//         dishImage: require('../../assets/Images/Pickles/methia_mango_thumb.png'),
//         productImage: "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.46.33_PM.png?v=1728991057&width=360"
//     },
//     {
//         title: "Tangy Mango Salad",
//         instructions: [
//             "In a bowl, add chopped cucumbers, tomatoes, onions, and mango cubes.",
//             "Season with black salt, lemon juice, and chili flakes.",
//             "Toss everything together well.",
//             "Garnish with coriander leaves and roasted peanuts.",
//             "Serve immediately for the best crunch."
//         ],
//         dishImage: require('../../assets/Images/Curry Paste/tikka_thumb.png'),
//         productImage: "https://www.swad.shop/cdn/shop/files/Screenshot_2024-10-15_at_4.50.11_PM.png?v=1728991237&width=360"
//     },
//     {
//         title: "Classic Mango Lassi",
//         instructions: [
//             "Blend mango pulp with chilled yogurt and sugar.",
//             "Add a pinch of cardamom powder and crushed ice.",
//             "Blend until frothy.",
//             "Pour into tall glasses and garnish with saffron strands.",
//             "Serve cold for a refreshing summer drink."
//         ],
//         dishImage: require('../../assets/Images/recepi2.jpg'),
//         productImage: "https://www.swad.shop/cdn/shop/files/DSC_8662-min.jpg?v=1728981995&width=360"
//     }
// ];
