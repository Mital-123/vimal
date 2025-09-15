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
    const [activeBlog, setActiveBlog] = useState("All");
    const [recipeSections, setRecipeSections] = useState([]);
    const sliderRef = useRef(null);

    // Fetch Blogs
    const FetchProduct = async () => {
        try {
            const res = await axios.get("https://backendvimalagro.onrender.com/api/blogs");
            setRecipeSections(res.data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        FetchProduct();
    }, []);

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

    // Create a list of titles
    const titles = ["All", ...recipeSections.map(item => item.category)];

    // Filter blogs by activeBlog
    const filteredBlogs =
        activeBlog === "All"
            ? recipeSections
            : recipeSections.filter(item => item.category === activeBlog);

    // banner state
    const [banner, setBanner] = useState(null);
    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const res = await axios.get("https://backendvimalagro.onrender.com/blogbanner");
                if (res.data && res.data.length > 0) {
                    setBanner(res.data[0]);
                }
            } catch (err) {
                console.error("Error fetching banner:", err);
            }
        };
        fetchBanner();
    }, []);

    if (!banner) {
        return null; // loader/spinner optional
    }

    return (
        <>
            {/* Banner */}
            <div
                style={{ position: "relative", width: "100%", overflow: "hidden" }}
                className="landingimg mt-5 pt-md-4 pt-0"
            >
                <img
                    src={banner.desktopblogbanner}
                    alt="desktop-banner"
                    className="img-fluid w-100 d-lg-block d-none object-fit-cover"
                />
                <img
                    src={banner.mobileblogbanner}
                    alt="mobile-banner"
                    className="img-fluid w-100 d-lg-none d-block object-fit-cover"
                />
            </div>

            {/* Title Slider */}
            <div className="py-4 py-md-5 p-1 category_bgimg overflow-hidden" style={{ backgroundAttachment: "fixed" }}>
                <div className="container-lg">
                    <div className="text-center">
                        <Tittles stitle={"Our Blogs"} ltitle={"Leading the market with quality and trust"} />
                    </div>

                    <div className="col-11 m-auto pt-2 pt-md-4 categoryarrow blogarrow">
                        <Slider {...settings} ref={sliderRef}>
                            {titles.map((category, index) => (
                                <div key={index} className="px-2 m-1">
                                    <div
                                        className={`shadow-sm text-dark rounded-pill text-center btn_active d-flex align-items-center justify-content-center category-btn-container bg-transparent ${activeBlog === category ? 'active-btn' : ''}`}
                                    >
                                        <button
                                            className="nav-link text-center w-100 h-100 py-2 px-3 text-capitalize category-btn bg-transparent"
                                            onClick={() => {
                                                setActiveBlog(category);
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

                    {/* Filtered Blogs */}
                    <div className="row justify-content-center mx-auto">
                        {filteredBlogs.map((item) => (
                            <div key={item._id} className="col-12 col-lg-3 col-md-6 mt-sm-4 mt-3 d-flex fade-in">
                                <div className="card h-100 w-100">
                                       <div style={{height:180}} className='shadow'>
                                     <img src={item.blogImage} alt={item.title} className="card-img-top img-fluid w-100 h-100 object-fit-cover"  />
                                   </div>
 
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text flex-grow-1 pera">{item.description}</p>
                                        <Link to={`/Recepie/${item._id}`} className="text-decoration-none text-dark">
                                            <button className="c-button c-button--gooey py-1 px-3 fw-bold fstyle overflow-hidden">
                                                How To Make ?
                                                <div className="c-button__blobs">
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                            </button>
                                        </Link>
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

export default HOC(Blog);
