import { useEffect, useRef, useState } from 'react';
import Tittles from '../Tittles';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HOC from '../HOC'
import { Link } from 'react-router-dom';
import ButtonCom from '../ButtonCom';
import YouTubeVideo from './YouTubeVideo';
import "../../assets/Css/Blog.css";
import axios from 'axios';

// const recipeSections = [
//     {
//         id: 1,
//         image: require('../../assets/Images/recepi1.jpg'),
//         titleSmall: "5 Favorite",
//         titleLarge: "Pickles In The Winter",
//         description: "There is no spring without sunshine, no autumn without brown, no summer without holidays, and no winter without...yes, you guess it right! Pickles!!",
//         type: "Appetizers"
//     },
//     {
//         id: 2,
//         image: require('../../assets/Images/recepi2.jpg'),
//         titleSmall: "Swad's",
//         titleLarge: "Mango Milkshake",
//         description: "SWAD Mango Milkshake is a cool and satiating drink made by blending ripe mango pulp, milk and sugar.",
//         type: "Main Courses"
//     },
//     {
//         id: 3,
//         image: require('../../assets/Images/recepi1.jpg'),
//         titleSmall: "Fresh Salad",
//         titleLarge: "Garden Salad",
//         description: "A healthy mix of fresh vegetables and dressing.",
//         type: "Salad & Slides"
//     },
//     {
//         id: 4,
//         image: require('../../assets/Images/recepi2.jpg'),
//         titleSmall: "Fresh Salad",
//         titleLarge: "Garden Salad",
//         description: "A healthy mix of fresh vegetables and dressing.",
//         type: "Vagetarian Delights"
//     },
//     // Add more recipes...
// ];

function Blog() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [recipeSections, setRecipeSections] = useState([])


    const FetchProduct = async () => {
        try {
            const res = await axios.get("https://backendvimalagro.onrender.com/api/blogs");
            setRecipeSections(res.data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    }


    useEffect(() => {
        FetchProduct()
    }, [])
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
    const categories = ["All", ...new Set(recipeSections.map(item => item.category))];

    // Filter recipes based on category
    const filteredRecipes =
        activeCategory === "All"
            ? recipeSections
            : recipeSections.filter(item => item.type === activeCategory);

    // banner created
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const res = await axios.get("https://backendvimalagro.onrender.com/blogbanner");
                if (res.data && res.data.length > 0) {
                    setBanner(res.data[0]); // ✅ take the first object
                }
            } catch (err) {
                console.error("Error fetching banner:", err);
            }
        };
        fetchBanner();
    }, []);

    if (!banner) {
        return null; // or loader/spinner
    }
    return (
        <>
            {/* <div className='mt-5'>
                <img src="https://i0.wp.com/sub.vimalagro2.vimalagro.com/sub.vimalagro2.vimalagro/wp-content/uploads/2024/10/3-1.png?w=1920&ssl=1" alt="" className='img-fluid w-100' />
            </div> */}
            <div
                style={{ position: "relative", width: "100%", overflow: "hidden" }}
                className="landingimg mt-5 pt-md-4 pt-0"
            >
                {/* Desktop View */}
                <img
                    src={banner.desktopblogbanner}
                    alt="desktop-banner"
                    className="img-fluid w-100 d-md-block d-none object-fit-cover"
                    style={{ height: "100%" }}
                />

                {/* Mobile View */}
                <img
                    src={banner.mobileblogbanner}
                    alt="mobile-banner"
                    className="img-fluid w-100 d-lg-none d-block object-fit-cover"
                    style={{ height: "100%" }}
                />
            </div>
            <div className='py-4 py-md-5 p-1 category_bgimg overflow-hidden' style={{ backgroundAttachment: "fixed" }}>
                <div className='container-lg'>
                    <div className='text-center'>
                        <Tittles stitle={"Our Categories"} ltitle={"Leading the market with quality and trust"} />
                    </div>

                    {/* Dynamic Category Tabs */}
                    <div className="col-11 m-auto pt-2 pt-md-4 categoryarrow blogarrow">
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
                    <div className="row justify-content-center mx-auto">
                        {filteredRecipes.map((item) => (
                            <div key={item.id} className="col-12 col-lg-3 col-md-6 mt-sm-4 mt-3 d-flex fade-in">
                                <div className="card h-100 w-100">
                                    <img src={item.blogImage} alt="" className="card-img-top" />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text flex-grow-1 pera">{item.description}</p>
                                        <Link to={`/Recepie/${item._id}`} className='text-decoration-none text-dark'><button className="c-button c-button--gooey py-1 px-3 ext-decoration-none fw-bold fstyle overflow-hidden">How To Make ?
                                            <div className="c-button__blobs">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </button>
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "block", height: 0, width: "0" }} >
                                                <defs>
                                                    <filter id="goo">
                                                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                                        <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </Link>
                                        {/* <Link to={`/Recepie/${item.id}`} className='text-decoration-none'><ButtonCom btn={"How To Make ?"} /></Link> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <YouTubeVideo />
        </>
    );
}
export default HOC(Blog)