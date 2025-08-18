import React from 'react'
import Tittles from '../Tittles'

function Principals() {
    return (
        <div className='py-1 py-md-5'>
            <div className='container-lg'>
                <div className="col-11 mx-auto">
                    {/* <h1>OUR PRINCIPLES</h1>*/}
                       <div className='brdstart'>
              <Tittles stitle={"OUR PRINCIPLES"} ltitle="Lorem ipsum dolor sit amet"/>
            </div>
                       
                        <p className='mt-2  pera'>The success of Passage Foods is the result of following these three principles:</p>
              
                    <div className='row'>
                        <div className='text-end littleimg1' style={{
                            position: "relative",
                            bottom: "0px",
                            right: '-60px',
                            // zIndex: "-1",
                            height: '0px'
                        }}>
                            <img src={require('../../assets/Images/11436576.png')} style={{ height: '100px' }} alt="" />
                        </div>
                        <div className='col-md-6 p-lg-5 p-2 principalimg'>
                            <img src={require('../../assets/Images/recepi1.jpg')} style={{ minHeight: "300px", height: '100%', width: "auto" }} alt="" className='img-fluid object-fit-cover shadow ' />
                        </div>
                        <div className='col-md-6 p-lg-5 p-2 principaltext'>
                            <div className='h1strike text-warning text-opacity-25 pb-2 display-1 font-normal text-end mb-12 mt-8' style={{
                                color: " ",
                                WebkitTextStroke: "1px var(--golden)",
                                WebkitFontSmoothing: "antialiased",
                                MozOsxFontSmoothing: "grayscale",
                                textRendering: "optimizeLegibility",
                                
                                position: "relative",
                                top: "38px",
                                right: '30px',
                                zIndex: "-1"

                            }}>ONE</div>
                            <h3 className='fw-bold stittle' style={{ letterSpacing: '1px' }}>TRUE AUTHENTICITY</h3>
                            <p className='pera mb-0'>Each of our recipes is carefully researched and developed by specialty chefs from the region of origin. We also ensure all of our ingredients are sourced from around the world to ensure absolute authenticity.</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6 p-lg-5 p-2 principaltext order-md-0 order-1'>
                            <div className='h1strike text-warning text-opacity-25 pb-2 display-1 font-normal text-end mb-12 mt-8' style={{
                                color: " ",
                                WebkitTextStroke: "1px var(--golden)",
                                WebkitFontSmoothing: "antialiased",
                                MozOsxFontSmoothing: "grayscale",
                                textRendering: "optimizeLegibility",
                                
                                position: "relative",
                                top: "38px",
                                right: '30px',
                                zIndex: "-1"

                            }}>TWO</div>
                            <h3 className='fw-bold stittle' style={{ letterSpacing: '1px' }}>CONSUMER CONVENIENCE</h3>
                            <p className='pera mb-0'>Today the consumer is more time poor than ever. Therefore, our focus lies in creating easy tasting but nutritious and authentic meals. Using Passage Foods sauces and our instant Heat and Eat bowls, a delicious and convenient meal can be prepared in under five minutes.</p>
                        </div>
                        <div className='col-md-6 p-lg-5 p-2 principalimg'>
                            <img src={require('../../assets/Images/recepi1.jpg')} style={{ minHeight: "300px", height: '100%', width: "auto" }} alt="" className='img-fluid img-fluid object-fit-cover shadow' />
                        </div>
                    </div>
                    <div className='text-start  littleimg1 littleimg2' style={{
                        position: "relative",
                        bottom: "50px",
                        right: '50px',
                        // zIndex: "-1",
                        height: '0px'
                    }}>
                        <img src={require('../../assets/Images/sweet-mango-cubes-bowl-image-on-transparent-background-png-removebg-preview.png')} style={{ height: '100px' }} alt="" className='img-fluid ' />
                    </div>
                    <div className='row'>
                        <div className='col-md-6 p-lg-5 p-2 principalimg'>
                            <img src={require('../../assets/Images/recepi1.jpg')} style={{ minHeight: "300px", height: '100%', width: "auto" }} alt="" className='img-fluid object-fit-cover shadow ' />
                        </div>
                        <div className='col-md-6 p-lg-5 p-2 principaltext'>
                            <div className='h1strike text-warning text-opacity-25 pb-2 display-1 font-normal text-end mb-12 mt-8' style={{
                                color: " ",
                                WebkitTextStroke: "1px var(--golden)",
                                WebkitFontSmoothing: "antialiased",
                                MozOsxFontSmoothing: "grayscale",
                                textRendering: "optimizeLegibility",
                                
                                position: "relative",
                                top: "38px",
                                right: '30px',
                                zIndex: "-1"

                            }}>THREE</div>
                            <h3 className='fw-bold stittle' style={{ letterSpacing: '1px' }}>NO ARTIFICIAL COLOURS OR FLAVOURS</h3>
                            <p className='pera mb-0'>We know that many people are concerned about the use of artificial colours, flavours, flavour enhancers and preservatives. That’s why we develop our products using no artificial ingredients.</p>
                        </div>
                    </div>
                </div>
                <div className='text-end littleimg1' style={{
                    position: "relative",
                    bottom: "100px",
                    right: '-50px',
                    // zIndex: "-1",
                    height: '0px'
                }}>
                    <img src={require('../../assets/Images/principal-little-1.png')} style={{ height: '100px' }} alt="" />
                </div>
            </div >
        </div >
    )
}

export default Principals;