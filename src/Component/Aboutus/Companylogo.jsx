import React from 'react';
import Tittles from '../Tittles';

function Companylogo() {
  return (
<>
<div style={{backgroundColor:"var(--ofwhite)"}}>
      <div className="container logo-section " >
      <div className="row align-items-center">
        <div className="col-md-4 mb-4 mb-md-0">
          <p className="logo-text">
            We come from a wide range of global<br />
            technology leaders and fast-paced startups.
          </p>
        </div>
        <div className="col-md-8">
          <div className="row py-4">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="h-100 p-2">
                <img src={require("../../assets/Images/aboutlogocopy.png")} alt="" className='img-fluid w-100 h-100' />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="h-100 p-2">
                <img src={require("../../assets/Images/aboutlogocopy.png")} alt="" className='img-fluid w-100 h-100' />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="h-100 p-2">
                <img src={require("../../assets/Images/aboutlogocopy.png")} alt="" className='img-fluid w-100 h-100' />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="h-100 p-2">
                <img src={require("../../assets/Images/aboutlogocopy.png")} alt="" className='img-fluid w-100 h-100' />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="h-100 p-2">
                <img src={require("../../assets/Images/aboutlogocopy.png")} alt="" className='img-fluid w-100 h-100' />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="h-100 p-2">
                <img src={require("../../assets/Images/aboutlogocopy.png")} alt="" className='img-fluid w-100 h-100' />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="h-100 p-2">
                <img src={require("../../assets/Images/aboutlogocopy.png")} alt="" className='img-fluid w-100 h-100' />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="h-100 p-2">
                <img src={require("../../assets/Images/aboutlogocopy.png")} alt="" className='img-fluid w-100 h-100' />
              </div>
            </div>
     
          </div>
        </div>
      </div>
    </div>
</div>
    <div className="container my-5">
      <h4 className='text-center'><Tittles stitle="Our Story"/></h4>
      <p className="story-text text-justify pt-2">
        What began in 1975 as a humble rice mill is today a globally trusted name in Indian food.
        At Vimal, tradition meets innovation to bring the authentic taste of Indian cuisine to homes
        across the world. In 1988, we took our first major step—establishing a food processing unit and
        launching the brand "Swad", driven by a passion to make real Indian flavours accessible
        everywhere. By the early 1990s, we introduced our flagship Kesar Mango Pulp in tin, and began
        exports to the US and UK, marking our entry into international markets. By 2000, Vimal was
        exporting to 25+ countries, recognized for its quality, taste, and reliability. Between 2008–2012,
        we embraced automation and strategically entered the Indian retail market, scaling operations while
        staying true to our roots.
      </p>
      <p className="story-text text-justify mt-3">
        Today, in 2024, Vimal exports to 45+ countries and is present in over 30,000 retail shops across
        India. Our growth is driven not just by taste, but by purpose—with 60% of our operations now powered
        by green energy, reflecting our commitment to a more sustainable future. At Vimal, we don’t just make
        food—we carry forward a legacy of quality, authenticity, and care, delivered in every product we create.
      </p>
    </div>
</>
  );
}

export default Companylogo;
