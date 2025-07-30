import React, { useState } from 'react';
import Tittles from '../Tittles';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ButtonCom from '../ButtonCom';
export const productlist = [
  {
    brandId: "MangoPulp",
    title: "Mango Pulp",
    description:
      "Savor the richness of Indian summers with our premium Mango Pulp and Slices, made from handpicked Alphonso and Kesar mangoes. Carefully processed to preserve their natural sweetness and aroma, they’re perfect for desserts, drinks, and a variety of culinary delights. We are proud to be the first manufacturer of Kesar Mango Pulp, relished worldwide for our quality and purity.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/mango-pulp"
  },
  {
    brandId: "Pickles",
    title: "Pickles",
    description:
      "We offer a vibrant range of traditional Indian pickles, crafted with age-old recipes and the finest ingredients. From tangy mango and spicy mixed to regional favourites like lime and sweet pickles, each variant is packed with bold, authentic flavours. Hygienically processed and globally loved, they add the perfect punch to every meal.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",

    path: "/product/pickles"
  },
  {
    brandId: "ReadyToEat",
    title: "Ready to Eat",
    description:
      "Our Ready-to-Eat range brings the taste of India’s diverse culinary heritage to your plate in minutes. From Punjabi Chole and Surti Undhiyu to South Indian Sambhar and more, each dish is crafted with authentic spices and traditional recipes. Flavourful and loved worldwide — An authentic homestyle meal, anytime, anywhere.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/ready-to-eat"
  },
  {
    brandId: "CookingSauces",
    title: "Cooking Sauces",
    description:
      "Make authentic Indian cooking effortless and quick. From rich Butter Chicken sauce and classic Tikka Masala to fiery Vindaloo, each sauce is crafted with traditional spices and slow-cooked flavours. Just add your choice of protein or vegetables, and enjoy restaurant-style dishes in minutes. A time-saving delight, trusted under the SWAD brand globally.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/cooking-sauces"
  },
  {
    brandId: "CurryPaste",
    title: "Curry Paste",
    description:
      "Dive into a world of regional Indian flavours with our curated Curry Pastes collection. Featuring expertly blended pastes like Balti, Madras, Biryani and Rogan Josh, each variant captures the essence of its origin with aromatic spices and tradition. Designed for culinary precision—just add fresh ingredients and simmer to perfection. A trusted pantry staple for unmistakable authenticity in every dish.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/curry-paste"
  },
  {
    brandId: "Papadums",
    title: "Papadums",
    description:
      "Our Papadums are the perfect accompaniment to every Indian meal. Made from legacy recipes using lentils, spices, and care, they offer a satisfying crunch whether roasted, fried, or microwaved. From classic Urad dal to Black Pepper, each bite delivers a nostalgic taste of home with global appeal.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/papadums"
  },
  {
    brandId: "Chutneys",
    title: "Chutneys",
    description:
      "From street-style tang to global zing, our Chutney range brings bold flavours to every bite. Whether it’s Mint, Tamarind, Spicy Schezwan, or zesty Chaat chutneys, each jar is packed with real ingredients and local essence. Perfect for snacks, chaats, or fusion dishes — these chutneys are your shortcut to instant flavour elevation.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/chutneys"
  },
  {
    brandId: "KetchupJam",
    title: "Ketchup & Jam",
    description:
      "Our Ketchups and Jams are crafted to add vibrant flavour and everyday joy to your table. Tomato Ketchup delivers bold, tangy richness, while the fruit-packed Jams burst with natural sweetness in every spoonful. Whether paired with snacks or spread on warm toast, they offer a tasty treat loved by all ages.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/ketchup-jam"
  },
  {
    brandId: "Sweets",
    title: "Sweets",
    description:
      "Indulge in the rich traditions of Indian sweets with our Shahi Gulab Jamun, Shahi Rasgulla, and classic Chikki. From the soft, syrup-soaked luxury of our royal desserts to the nostalgic crunch of jaggery and roasted nut Chikki, each treat is a celebration of timeless flavour. Whether it’s a festive occasion or a moment of personal indulgence, these handcrafted delights bring warmth, sweetness, and tradition to every bite.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/sweets"
  },
  {
    brandId: "BasmatiRice",
    title: "Basmati Rice",
    description:
      "Our Basmati Rice stands out for its long, slender grains, and fluffy texture. Aged to perfection, it cooks evenly and elevates everything from biryanis to simple everyday meals. With each serving, it brings elegance, purity, and the hallmark of authentic Indian quality to your plate.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/basmati-rice"
  },
  {
    brandId: "Juices",
    title: "Juices",
    description:
      "Our Juices bring you the rich taste of ripe Mango, smooth Guava, and fragrant Litchi—each bottle filled with juicy indulgence and real fruit character. Carefully processed to retain natural flavour and freshness, these juices are perfect for cooling down or perking up, any time of day. Taste the difference in every refreshing sip.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/juices"
  },
  {
    brandId: "SeedsNuts",
    title: "Seeds & Nuts",
    description:
      "Power up your day with our wholesome range of Seeds and Nuts — nature’s original source of protein, fiber, and essential nutrients. From crunchy almonds to nutrient-rich chia, flax, and Basil seeds, every bite supports a healthier lifestyle. Ideal for snacking, baking, or boosting your meals with clean, plant-based energy.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/seeds-nuts"
  },
  {
    brandId: "Makhana",
    title: "Makhana (Dry Snacks)",
    description:
      "Our Raw Makhana, also known as fox nuts or lotus seeds, are the popped kernels of the plant, traditionally grown in the water-filled ponds of South Asia. Harvested by hand and naturally dried, these light, puffed seeds are prized for their subtle taste and versatility. Perfect for roasting, seasoning, or cooking — a truly unique ingredient rooted in centuries of culinary tradition.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/makhana"
  },
  {
    brandId: "CannedVegetables",
    title: "Canned Vegetables",
    description:
      "Our Canned Vegetables offer a ready-to-use mix of Indian staples like okra, drumsticks, tuver lilva, lotus root, and more—carefully preserved in brine for freshness and ease. Pre-washed and prepped, they save time without compromising on taste or nutrition. Ideal for quick curries, stews, or fusion dishes with authentic flavour in every bite.",
    image: "https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png",
    path: "/product/canned-vegetables"
  }
];

function HomeCategory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = React.useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (current) => {
      setActiveIndex(current);
      setActiveBrand(productlist[current]);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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

  const [activeBrand, setActiveBrand] = useState(productlist[0]);

  return (
    <>
      <div className='py-5 p-1 category_bgimg'>
        <div className='container'>
          <div className='text-center'>
            <Tittles stitle={"Our Categories"} ltitle={"Leading the market with quality and trust"} />
          </div>
          <div className="col-md-8 col-10 m-auto pt-5 categoryarrow">
            {/* <Slider {...settings} ref={sliderRef}>
              {productlist.map((item, index) => (
                <div key={index} className="px-2 m-1">
                  <div
                    className={`shadow-sm text-dark rounded-pill text-center btn_active ${activeBrand.brandId === item.brandId ? 'active-btn' : ''}`}
                  >
                    <button
                      className={`nav-link text-center p-2 py-1 m-auto text-capitalize`}
                      onClick={() => {
                        setActiveIndex(index);
                        setActiveBrand(item);
                        if (sliderRef.current) {
                          sliderRef.current.slickGoTo(index);
                        }
                      }}
                    >
                      {item.title}
                    </button>
                  </div>
                </div>
              ))}
            </Slider> */}
            <Slider {...settings} ref={sliderRef}>
              {productlist.map((item, index) => (
                <div key={index} className="px-2 m-1">
                  <div
                    className={`shadow-sm text-dark rounded-pill text-center btn_active d-flex align-items-center justify-content-center category-btn-container bg-transparent ${activeBrand.brandId === item.brandId ? 'active-btn' : ''}`}
                  >
                    <button
                      className={`nav-link text-center w-100 h-100 py-2 px-3 text-capitalize category-btn bg-transparent`}
                      onClick={() => {
                        setActiveIndex(index);
                        setActiveBrand(item);
                        if (sliderRef.current) {
                          sliderRef.current.slickGoTo(index);
                        }
                      }}
                    >
                      {item.title}
                    </button>
                  </div>
                </div>
              ))}
            </Slider>


          </div>

          <div className="row align-items-center rounded-4 pt-4 overflow-hidden">
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
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
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