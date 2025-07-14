import React from 'react'
import { Link } from 'react-router-dom'
import ButtonCom from '../ButtonCom'
import Slider from 'react-slick';
import Tittles from '../Tittles';

function HomeRecipe() {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1800,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const recipes = [
        {
            title: '5 Favorite Pickles In The Winter',
            image: 'https://www.vimalagro.com/wp-content/uploads/2020/12/5-favorite-pickles-in-the-winter-794x528.jpg',
        },
        {
            title: 'SWAD Mango Milk shake',
            image: 'https://www.vimalagro.com/wp-content/uploads/2018/03/mango_milkshake-794x528.jpg',
        },
        {
            title: '5 Favorite Pickles In The Winter',
            image: 'https://www.vimalagro.com/wp-content/uploads/2020/12/5-favorite-pickles-in-the-winter-794x528.jpg',
        },
        {
            title: 'SWAD Mango Milk shake',
            image: 'https://www.vimalagro.com/wp-content/uploads/2018/03/mango_milkshake-794x528.jpg',
        },
    ];

    return (
        <>
            <div className='container my-5'>
                <div className='text-center mb-4'><Tittles ltitle={"Mouth-Watering Recipes"} /></div>
                <Slider {...settings}>
                    {recipes.map((recipe, index) => (
                        <div key={index} className='p-3 ps-4 '>
                            <div className='recipe_image h-100'>
                                <div className='test-shinee position-relative recipe-shadow-wrapper' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                                    <img
                                        src={recipe.image}
                                        className='img-fluid object-fit-cover h-100 w-100'
                                        style={{ borderRadius: "17px" }}
                                        alt={recipe.title}
                                    />
                                </div>
                                <div
                                    className='recipe_tittle text-center bg-white mx-auto p-3 position-relative d-flex flex-column justify-content-center align-items-center'
                                    style={{
                                        width: "85%",
                                        marginTop: "-60px",
                                        zIndex: 1,
                                        border: "4px double var(--red)",
                                        borderRadius: "20px"
                                    }}
                                >
                                    <div className="fw-bold mb-1">{recipe.title}</div>
                                    <Link className='text-decoration-none' to={"/"}>
                                        <ButtonCom btn="Make It" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default HomeRecipe