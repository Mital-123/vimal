import { useRef, useState } from 'react';
import Tittles from '../Tittles';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HOC from '../HOC'
const recipeSections = [
    {
        id: 1,
        image: require('../../assets/Images/recepi1.jpg'),
        titleSmall: "5 Favorite",
        titleLarge: "Pickles In The Winter",
        description: "There is no spring without sunshine, no autumn without brown, no summer without holidays, and no winter without...yes, you guess it right! Pickles!!",
        type: "Appetizers"
    },
    {
        id: 2,
        image: require('../../assets/Images/recepi2.jpg'),
        titleSmall: "Swad's",
        titleLarge: "Mango Milkshake",
        description: "SWAD Mango Milkshake is a cool and satiating drink made by blending ripe mango pulp, milk and sugar.",
        type: "Main Courses"
    },
    {
        id: 3,
        image: require('../../assets/Images/recepi1.jpg'),
        titleSmall: "Fresh Salad",
        titleLarge: "Garden Salad",
        description: "A healthy mix of fresh vegetables and dressing.",
        type: "Salad & Slides"
    },
    {
        id: 4,
        image: require('../../assets/Images/recepi2.jpg'),
        titleSmall: "Fresh Salad",
        titleLarge: "Garden Salad",
        description: "A healthy mix of fresh vegetables and dressing.",
        type: "Vagetarian Delights"
    },
    // Add more recipes...
];

function Blog() {
    const [activeCategory, setActiveCategory] = useState("All");
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
        ],
    };

    // Create a unique category list from recipeSections
    const categories = ["All", ...new Set(recipeSections.map(item => item.type))];

    // Filter recipes based on category
    const filteredRecipes =
        activeCategory === "All"
            ? recipeSections
            : recipeSections.filter(item => item.type === activeCategory);

    return (
        <div className='py-2 py-md-5 p-1 category_bgimg' style={{ backgroundAttachment: "fixed" }}>
            <div className='container'>
                <div className='text-center'>
                    <Tittles stitle={"Our Categories"} ltitle={"Leading the market with quality and trust"} />
                </div>

                {/* Dynamic Category Tabs */}
                <div className="col-11 m-auto pt-2 pt-md-5 categoryarrow">
                    <Slider {...settings} ref={sliderRef}>
                        {categories.map((category, index) => (
                            <div key={index} className="px-2 m-1">
                                <div
                                    className={`shadow-sm text-dark rounded-pill text-center btn_active d-flex align-items-center justify-content-center category-btn-container bg-transparent ${activeCategory === category ? 'active-btn' : ''}`}
                                >
                                    <button
                                        className="nav-link text-center w-100 h-100 py-2 px-3 text-capitalize category-btn bg-transparent"
                                        onClick={() => {
                                            setActiveCategory(category);
                                            if (sliderRef.current) {
                                                sliderRef.current.slickGoTo(index);
                                            }
                                        }}
                                    >
                                        {category}
                                    </button>
                                </div>  
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Filtered Recipes */}
                <div className="row col-10 justify-content-sm-start justify-content-center mx-auto">
                    {filteredRecipes.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-5 col-sm-6 mt-4 d-flex">
                            <div className="card h-100 w-100">
                                <img src={item.image} alt="" className="card-img-top" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.titleLarge}</h5>
                                    <p className="card-text flex-grow-1">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default HOC(Blog)