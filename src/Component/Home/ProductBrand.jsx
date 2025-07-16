import React, { useState } from 'react'
import Tittles from '../Tittles'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrandProduct } from './BrandProductList';
import { Link } from 'react-router-dom';
import ButtonCom from '../ButtonCom';
export  const productlist = [
  {
    brandId: "Swad",
    title: "Mango Pulp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    alt: "Snacks",
  },
  {
    brandId: "Seeds",
    title: "Seeds",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore",
    image: require("../../assets/Images/Screenshot 2025-07-15 134744.png"),
    alt: "Biscuits",
  },
 
  {
    brandId: "Juices",
    title: "Juices",
    description:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore",
        image: require("../../assets/Images/bvitasjuice.png"),

    alt: "Confectionery",
  },
  {
    brandId: "Pickles ",
    title: "Pickles ",
    description:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore",
        image: require("../../assets/Images/download.jpeg"),

    alt: "Rusk",
  },
  {
    brandId: "Masala",
    title: "Masala ",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd_P9m1Z6-s4UAHqpZ4wipZPUaDeSHrdPXtI05m7Q1LY8ffJZWdQJXKY4ycomqCHwzVo&usqp=CAU",
    alt: "Platina",
  },

];

function ProductBrand() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

 const [activeBrand, setActiveBrand] = useState(productlist[0]);

  const handleBrandClick = (brand) => {
    setActiveBrand(brand);
  };


    
    return (
        <>
            <div className='my-5 p-1'>
                <div className='container mb-5'>
                    <div className=' text-center'>
                        <Tittles stitle={"Our Brand"} ltitle={"Leading the market with quality and trust"} />
                    </div>

<div>
 <ul className="nav justify-content-center nav-brand-tabs mt-3 flex-wrap">
          {productlist  .map((item, index) => (
            <li className="nav-item" key={index}>
              <button
                className={`nav-link shadow m-2 rounded-pill bg-warning text-dark ${activeBrand.brandId === item.brandId ? 'active' : ''}`}
                onClick={() => handleBrandClick(item)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
</div>
 <div className="row align-items-center  rounded-4 pt-4 overflow-hidden">
          <div className="col-md-6 d-flex justify-content-center " data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
        <div className='test-shine' >
                <img
              src={activeBrand.image}
              alt={activeBrand.alt}
              className="img-fluid brand-main-img"
            />
        </div>
          </div>
          <div className="col-md-6 text-start" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
            <h2 className="fw-bold">{activeBrand.title}</h2>
            <p>{activeBrand.description}</p>
            {/* <Link to={`/${activeBrand.brandId}`}> */}
            <ButtonCom btn={"Explore Now"}/>
            {/* </Link> */}
          </div>
        </div>
                    <div className="row mt-4 product-brand_bg shadow-lg rounded-4 p-5">
                        {/* <Slider {...settings}> */}
                            {BrandProduct.map((item, index) => (
                                <div key={index} className='col-lg-3 col-12 px-0 px-lg-3 mt-3 mt-lg-0'>
                                    <div className='brand-card position-relative' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                                        <Link className='text-decoration-none icon-overlay position-absolute top-50 start-50 translate-middle' to={`/${item.brandId}`}>
                                            <span className='plus-icon text-white bg-dark d-flex justify-content-center align-items-center'>+</span>
                                        </Link>
                                        <div className='bg-white p-2  rounded-4 h-100 d-flex justify-content-center align-items-center brand-box'>
                                            <div style={{ width: "150px", height: "150px" }}>
                                                <img
                                                    src={item.image}
                                                    alt={item.alt}
                                                    className="w-100 h-100 img-fluid object-fit-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        {/* </Slider> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductBrand