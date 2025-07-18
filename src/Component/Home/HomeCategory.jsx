import React, { useState } from 'react'
import Tittles from '../Tittles'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrandProduct } from './BrandProductList';
import { Link } from 'react-router-dom';
import ButtonCom from '../ButtonCom';
export const productlist = [
  {
    brandId: "Swad",
    title: "Mango Pulp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore. labore sed do eiusmod tempor incididunt ut laborelabore sed do eiusmod tempor incididunt ut laborelabore sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    alt: "Snacks",
    path: '/product/Mango-Pulp-Slice'
  },
  {
    brandId: "Seeds",
    title: "Seeds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore. labore sed do eiusmod tempor incididunt ut laborelabore sed do eiusmod tempor incididunt ut laborelabore sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
    image: require("../../assets/Images/Screenshot 2025-07-15 134744.png"),
    alt: "Biscuits",
    path: '/product/Mango-Pulp-Slice'

  },

  {
    brandId: "Juices",
    title: "Juices",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore. labore sed do eiusmod tempor incididunt ut laborelabore sed do eiusmod tempor incididunt ut laborelabore sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
    image: require("../../assets/Images/bvitasjuice.png"),
    path: '/product/Mango-Pulp-Slice',
    alt: "Confectionery",
  },
  {
    brandId: "Pickles ",
    title: "Pickles ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore. labore sed do eiusmod tempor incididunt ut laborelabore sed do eiusmod tempor incididunt ut laborelabore sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: '/product/Mango-Pulp-Slice',
    alt: "Rusk",
  },
  {
    brandId: "Masala",
    title: "Masala ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore. labore sed do eiusmod tempor incididunt ut laborelabore sed do eiusmod tempor incididunt ut laborelabore sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: '/product/Mango-Pulp-Slice',
    alt: "Platina",
  },

];

function HomeCategory() {

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
      <div className='py-5 p-1 category_bgimg'>
        <div className='container mb-5'>
          <div className='text-center'>
            <Tittles stitle={"Our Categories"} ltitle={"Leading the market with quality and trust"} />
          </div>

          <ul className="nav justify-content-center nav-brand-tabs mt-3 flex-wrap">
            {productlist.map((item, index) => (
              <li className="nav-item" key={index}>
                <button
                  className={`nav-link shadow m-2 rounded-pill bg-warning text-dark ${activeBrand.brandId === item.brandId ? 'active' : ''
                    }`}
                  onClick={() => handleBrandClick(item)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Fixed-height section */}
          <div
            className="row align-items-center rounded-4 pt-4 overflow-hidden"
            style={{ minHeight: '400px' }} // 🔥 Set fixed minHeight
          >
            <div
              className="col-md-6 d-flex justify-content-center cat_image"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div className="test-shine">
                <img
                  src={activeBrand.image}
                  alt={activeBrand.alt}
                  className="img-fluid brand-main-img"
                  style={{ maxHeight: '300px', objectFit: 'contain' }} // 🔥 Consistent image height
                />
              </div>
            </div>

            <div
              className="col-md-6 text-start d-flex flex-column justify-content-center"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div className="fw-bold ps-0"><Tittles stitle={activeBrand.title} /></div>
              <p className='pera mt-2 ps-2'>{activeBrand.description}</p>
              <div className='ms-2 '>
                <Link to={activeBrand.path} className='text-decoration-none'> <ButtonCom btn={"Explore Now"} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default HomeCategory