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
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
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
            <div>
                mango pulp
            </div>
            <div className="container-md py-5">
                <div className="row justify-content-center">
                    {/* Left Scrollable Section */}
                    <div className="col-lg-8 col-sm-6 overflow-auto order-1">
                        <div className="row justify-content-evenly mb-5" >
                            {product.subproducts.map((item, i) => (
                                <div className='col-lg-5 col-md-10 col-sm-10 col-10 p-3 mt-5 text-center bg-white shadow-lg' style={{ backgroundImage: "linear-gradient(135deg, #f7971e, #ffd200)", borderRadius: "14% 86% 13% 87% / 88% 12% 88% 12% " }} key={i}>
                                    <div style={{ backgroundColor: "#eff4f8", borderRadius: "50%" }}>
                                        <img
                                            src={item.proimg}
                                            alt=""
                                            className='img-fluid'
                                            style={{ height: '187px' }}
                                        />
                                        <div className='fw-semibold py-2  fs-6'>
                                            {item.ProductName}
                                        </div>
                                        <div className='subbtn' onClick={() => navigate(`/product/${id}/${item.id}`)}>
                                            <ButtonCom btn={"View Product"} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sticky Section */}
                    <div className="col-lg-4 col-sm-6 col-10 position-relative shadow mt-4 mb-5 order-0"
                        style={{ backgroundColor: "#eff4f8" }}
                    >

                        <div className="position-sticky top-0 p-4"
                        >
                            <Slider {...settings}>
                                {product.subproducts.map((item, i) => (
                                    <>
                                        <div className='mt-5 text-center'>
                                            <div >
                                                <img src={item.proimg} alt="" className='img-fluid' />
                                            </div>
                                            {/* <div className='fw-bold py-4 text-center'>{item.ProductName}</div> */}
                                            <div className='py-4'>
                                                <Tittles stitle={item.ProductName} />
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HOC(SubProducts);
