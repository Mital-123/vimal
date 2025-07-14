import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Slider from 'react-slick'

// import '../assets/Css/Testimonial.css'
 
function Testimonial() {
  const settings = {
     dots: false,
  arrows: false,
  infinite: true,
  speed: 2500,          // Controls the slide animation duration (in ms)
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,  // Controls how long each slide stays before transitioning

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
 
  const testimonials = [
    {
      id: 1,
      text: "“When I came to Japan I was very concerned about my everyday food but all thanks to SWAD for making their products available in Japan which made my work life easier”",
      name: "Prit Patel",
      image:
        "https://images.unsplash.com/photo-1563715992566-7ad5cf5b71d3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    },
    {
      id: 2,
      text:  "“I discovered Vimal’s products in Australia after visiting India. The taste and quality brought back memories of my trip. Truly authentic!”",
      name: "Kristen Williamsworth",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      text: "“Being in USA we missed that rich taste of indian delicacy, but thanks to Vimal agro and their wonderul products from SWAD that we are able to have that same taste of home.”",
      name: "Rishi Chauhan",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      text: "“SWAD makes it easy for us to settle anywhere in the world with its pure Indian taste”",
      name: "Nikita Gill (Canada)",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      text: "“I have been studying in the UK for the last 2 years and products from Vimal Agro makes it easy for students like us to stay away from home”",
      name: "Rohan Jain",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    },
  ]
 
  return (
    <div className='testimonial_bg py-5'>
      <div className='container overflow-hidden'>
        <div className='row py-5'>
          <div className='col-12 col-lg-4 p-4 ms-2 ms-lg-0 ms-md-0'>
            <div className='h-100' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
              <div className='text-white display-3'>
                <FaQuoteLeft />
              </div>
              <h4
                className='fw-bold mt-1'
                style={{ color: 'rgb(249 176 176)' }}
              >
                Testimonial
              </h4>
              <h2 className='ftittle text-white fw-bold m-0 p-0 text-capitalize'>
                What Our Customers Say
              </h2>
              <div className='pera pt-3' style={{ color: '#b7b3b3' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                tempore doloribus odio totam fugit repellat eius excepturi
                placeat accusantium officiis.
              </div>
              <div className='pera pt-3' style={{ color: '#b7b3b3' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                tempore doloribus odio totam fugit repellat eius excepturi
                placeat accusantium officiis.
              </div>
            </div>
          </div>
 
          <div className='col-12 col-lg-8 p-4'>
            <div className='h-100'>
              <Slider {...settings} className='testimonial-slider'>
                {testimonials.map((item) => (
                  <div key={item.id} className='h-100 '>
                    <div className='testimonial-card mx-2 bg-white'>
                     {/* <div className=''>
                         <FaQuoteLeft className=' display-1 darkcolor' />
                     </div> */}
                      <div className='pera text-secondary pt-0  d-flex align-items-center'>
                        {item.text}
                      </div>
                      <div className='testi_bg_content position-relative '>
                        <div
                          className='testi_image'
                          style={{
                            background: `url(${item.image}) no-repeat center/cover`,
                          }}
                        ></div>
                        <h4 className='testi_person text-white fw-bold text-medium d-flex w-100 text-center justify-content-center'>
                          {item.name}
                        </h4>
                       
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Testimonial