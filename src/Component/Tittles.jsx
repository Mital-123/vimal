import React from 'react';

function Tittles(props) {
  return (
    
    <div className=' ps-2   '>
           <h3
                className=" fw-bold stittle p-0 m-0"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
                
              >
               {props.stitle}
              </h3>
              <h1
                className="ftittle fw-bold m-0 p-0 text-capitalize"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
               {props.ltitle}
              </h1>
    </div>
  );
}

export default Tittles;
