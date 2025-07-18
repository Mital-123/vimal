import { useNavigate, useParams } from 'react-router-dom';
import products from '../../Product';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonCom from '../ButtonCom';
// import HOC from '../HOC';
import Tittles from '../Tittles';
import HOC from '../HOC';

function SubProducts() {
    const navigate = useNavigate()
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    if (!product || !product.subproducts) return <p>No subproducts found.</p>;
    console.log();
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <div className="fancy-dot position-relative" />
        ),
        appendDots: dots => (
            <div>
                <ul className="fancy-dots-container d-flex justify-content-center"> {dots} </ul>
            </div>
        ),
    };

    return (

        <div >
            {console.log(product.h1)}
            <div className='pt-5'>
                <h1 className='mt-5 text-center text-danger'>{product.h1}</h1>
            </div>
            <div className="container-md py-5">
                <div className="row">

                    {/* Sticky Left Section */}
                    <div
                        className="col-lg-4 col-sm-6 col-10 mt-4 mb-5"
                        style={{
                            position: 'sticky',
                            top: '100px',
                            alignSelf: 'start', // ensures it aligns properly in flex layout
                        }}
                    >
                        <div className="px-4 pb-4" style={{ backgroundColor: "#eff4f8" }}>
                            <Slider {...settings}>
                                {product.subproducts.map((item, i) => (
                                    <div className='text-center' key={i} >
                                        <img src={item.proimg} alt="" className='img-fluid' />
                                        <div className='py-3'>
                                            <Tittles stitle={item.ProductName} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Right Scrollable via Page Scroll (No Scrollbar in Div) */}
                    <div className="col-lg-8 col-sm-6">
                        <div className="row justify-content-evenly align-items-center">
                            {product.subproducts.map((item, i) => (
                                <div
                                    className='col-lg-3 col-md-6 col-sm-8 col-10 mx-1 p-3 mt-5 mb-4 text-center bg-white'
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, #f7971e, #ffd200)",
                                        borderRadius: "14% 86% 13% 87% / 88% 12% 88% 12%"
                                    }}
                                    key={i}
                                >
                                    <div style={{ backgroundColor: "#eff4f8", borderRadius: "50%" }}>
                                        <div style={{ position: "relative", bottom: '83px', height: "170px" }}>
                                            <img
                                                src={item.proimg}
                                                alt=""
                                                className='img-fluid'
                                                style={{ height: '200px' }}
                                            />
                                            <div className='fw-semibold subp' style={{ height: "30px" }}>
                                                {item.ProductName}
                                            </div>
                                            <div className='subbtn' onClick={() => navigate(`/product/${id}/${item.id}`)}>
                                                <ButtonCom btn={"View Product"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default HOC(SubProducts);
