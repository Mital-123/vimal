// // import Aos from "aos";
// import React, { useEffect } from "react";
// import CountUp from "react-countup";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { FaCalendarAlt, FaGlobe } from "react-icons/fa";
// import { ImHappy2 } from "react-icons/im";
// import { IoIosPeople } from "react-icons/io";
// import Whychooseus from "./Whychooseus";

// function Counter() {
// //   useEffect(() => {
// //     Aos.init({ once: true });
// //   }, []);
//   return (
//     <>
//       <div className="py-5  counter_bg">
//         <div className="container">
//           <div className="row  my-5">
//             <div className="col-lg-3 col-md-6 col-sm-6 overflow-hidden">
//               <div
//                 className="counter text-secondary text-center position-relative z-1"
//                 data-aos="zoom-in"
//                 data-aos-duration="1000"
//                 data-aos-once="true"
//               >
//                 <div className="counter-icon text-white fs-3 fw-bold rounded-circle position-absolute top-0 start-0 z-1">
//                          <ImHappy2 />
//                 </div>
//                 <h3 className="fs-5 fw-bold text-uppercase m-0 text-dark">
//                 happy CUSTOMERS
//                 </h3>
//                 <span className="counter-value  fs-3 fw-bold " style={{color:"#ff8f00"}}>
//                   {" "}
//                   <CountUp end={1000} enableScrollSpy={true} separator="" />  +
//                 </span>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6 col-sm-6 mb-5 overflow-hidden">
//               <div
//                 className="counter2 text-secondary text-center position-relative z-1"
//                 data-aos="zoom-in"
//                 data-aos-duration="1500"
//                 data-aos-delay="500"
//                 data-aos-once="true"
//               >
//                 <div className="counter-icon2 text-white fs-3 rounded-circle position-absolute top-0 start-0 z-1">
//                   <BsGraphUpArrow /> 
//                 </div>
//                 <h3 className="fs-5 fw-bold text-uppercase m-0 text-dark">
//                 popular product
//                 </h3>
//                 <span className="counter-value  fs-3 fw-bold"  style={{color:"#ff8f00"}}> 
//                   <CountUp end={160} enableScrollSpy={true} separator="" /> +{" "}
//                 </span>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6 col-sm-6 mb-5 overflow-hidden">
//               <div
//                 className="counter1 text-secondary text-center position-relative z-1"
//                 data-aos="zoom-in"
//                 data-aos-duration="1800"
//                 data-aos-delay="800"
//                 data-aos-once="true"
//               >
//                 <div className="counter-icon1 text-white fs-3 rounded-circle position-absolute top-0 start-0 z-1">
//                   <FaGlobe />
//                 </div>
//                 <h3 className="fs-5 fw-bold text-uppercase m-0 text-dark">
//                   More Countries
//                 </h3>
//                 <span className="counter-value  fs-3 fw-bold " style={{color:"#ff8f00"}}  >
//                   <CountUp end={45} enableScrollSpy={true} separator="" /> +
//                 </span>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6 col-sm-6 mb-5 overflow-hidden">
//               <div
//                 className="counter3 text-secondary text-center position-relative z-1"
//                 data-aos="zoom-in"
//                 data-aos-duration="2000"
//                 data-aos-delay="1000"
//                 data-aos-once="true"
//               >
//                 <div className="counter-icon3 text-white fs-3 rounded-circle position-absolute top-0 start-0 z-1">
//                   <FaCalendarAlt  />
//                 </div>
//                 <h3 className="fs-5 fw-bold text-uppercase m-0 text-dark">
//                  years of excellence
//                 </h3>
//                 <span className="counter-value  fs-3 fw-bold"  style={{color:"#ff8f00"}}> 
//                   <CountUp end={35} enableScrollSpy={true} separator="" />+
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//            <Whychooseus />
//       </div>
//     </>
//   );
// }

// export default Counter;






// import { RiEmotionHappyLine } from "react-icons/ri";
// import CountUp from 'react-countup';
// import { TiShoppingCart } from 'react-icons/ti';
// import { TbWorld } from 'react-icons/tb';
// import { FaRegCalendarAlt } from 'react-icons/fa';

// function Counter() {
//   return (
//     <>

//     <div className='counterbck_image overflow-hidden'>
// <div className='container py-5'>
// <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1 text-center g-3' data-aos="zoom-in" data-aos-delay="50" data-aos-once="true"
//     data-aos-duration="1800">
//       <div className='col' data-aos="zoom-in" data-aos-delay="50" data-aos-once="true"
//     data-aos-duration="1800">
// <div className='text-white counter fw-bold py-3 p-1'>
//     <div className='countericon'><RiEmotionHappyLine /></div>
//     <p className='fs-4'>Happy Customers</p>
//     <p className='countnumber'> <CountUp end={1000} enableScrollSpy={true} separator="" /> +</p>
// </div>
// </div>
// <div className='col' data-aos="zoom-in" data-aos-delay="50" data-aos-once="true"
//     data-aos-duration="1800">
// <div className='text-white counter fw-bold py-3 p-1'>
//     <div className='countericon'><TiShoppingCart /></div>
//     <p className='fs-4'>popular product</p>
//     <p className='countnumber'>    <CountUp end={160} enableScrollSpy={true} separator="" /> +</p>
// </div>
// </div>
// <div className='col ' data-aos="zoom-in" data-aos-delay="50" data-aos-once="true"
//     data-aos-duration="1800">
// <div className='text-white  counter fw-bold py-3 p-1'>
//     <div className='countericon'><TbWorld /></div>
//     <p className='fs-4'> More Countries</p>
//     <p className='countnumber'> <CountUp end={45} enableScrollSpy={true} separator="" /> +</p>
// </div>
// </div>
// <div className='col ' data-aos="zoom-in" data-aos-delay="50" data-aos-once="true"
//     data-aos-duration="1800">
// <div className='text-white counter fw-bold py-3 p-1'>
//     <div className='countericon'><FaRegCalendarAlt/></div>
//     <p className='fs-4'>years of excellence</p>
//     <p className='countnumber'> <CountUp end={35} enableScrollSpy={true} separator="" /> +</p>
// </div>
// </div>

// </div>
// </div>
//     </div>
//     </>
//   )
// }

// export default Counter


import React from 'react';
import CountUp from 'react-countup';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import { TiShoppingCart } from 'react-icons/ti';

function Counter() {
    return (
        <>
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4 mt-3">
                        <div className="h-100 shadow p-0 p-lg-3 rounded-5 text-white" style={{ backgroundColor: "var(--red)" }}>
                            <div className='d-flex align-items-center '>
                                <div className='fw-bold p-3 pt-1' style={{ fontSize: "70px" }}><RiEmotionHappyLine /></div>
                                <div className='p-3'>
                                    <div >
                                        <h2 className='countnumber fw-bold'> <CountUp end={1000} enableScrollSpy={true} separator="" /> +</h2></div>
                                    <div className='fs-5 fw-bold'>Happy Customers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-3">
                        <div className="h-100 shadow p-0 p-lg-3 rounded-5 text-white" style={{ backgroundColor: "var(--red)" }}>
                            <div className='d-flex align-items-center '>
                                <div className='fw-bold p-3 pt-1' style={{ fontSize: "70px" }}><TiShoppingCart /></div>
                                <div className='p-3'>
                                    <div >
                                        <h2 className='countnumber fw-bold'> <CountUp end={160} enableScrollSpy={true} separator="" /> +</h2></div>
                                    <div className='fs-5 fw-bold'>popular product</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-3">
                        <div className="h-100 shadow p-0 p-lg-3 rounded-5 text-white" style={{ backgroundColor: "var(--red)" }}>
                            <div className='d-flex align-items-center '>
                                <div className='fw-bold p-3 pt-1' style={{ fontSize: "70px" }}><TbWorld /></div>
                                <div className='p-3'>
                                    <div >
                                        <h2 className='countnumber fw-bold'> <CountUp end={45} enableScrollSpy={true} separator="" /> +</h2></div>
                                    <div className='fs-5 fw-bold'>More Countries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counter;
