import { Link, useNavigate, useParams } from 'react-router-dom';
import products from '../../Product';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonCom from '../ButtonCom';
import Tittles from '../Tittles';
import HOC from '../HOC';
import { useState } from 'react';
import Gogreen from './Gogreen';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Howtouse from './Howtouse';
import ProductSlider from './Slider';

function SubProducts() {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = products.find(p => p.id == id);
    const [selectedWeight, setSelectedWeight] = useState(null);

    if (!product || !product.subproducts) return <p>No subproducts found.</p>;

    // ✅ Get unique weights only
    const uniqueWeights = Array.from(
        new Set(
            product.subproducts
                .filter(item => item.weight)
                .map(item => item.weight)
        )
    );

    // ✅ Filter subproducts by selected weight
    const filteredSubProducts = selectedWeight
        ? product.subproducts.filter(item => item.weight === selectedWeight)
        : product.subproducts;

    // ✅ Slider settings
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='mt-5'>
            <div style={{ backgroundColor: "#fffcf3" }}>
                <Gogreen />
                <div className='m-auto text-center col-sm-8 col-11 pb-5'>
                    <h2 className='fw-bold my-4'>Power of {product.h1}</h2>
                    <p className='px-5'>{product.powerdesc}</p>
                    <div className='mt-5'>
                        <Link to="https://www.facebook.com/SWADBrand/" target="_blank" className='fs-4 mx-2 text-dark'><FaFacebook /></Link>
                        <Link to="https://www.instagram.com/swadbrand/" target="_blank" className='fs-4 mx-2 text-dark'><FaInstagram /></Link>
                        <Link to="https://www.youtube.com/@SwadBrand/" target="_blank" className='fs-4 mx-2 text-dark'><FaYoutube /></Link>
                    </div>
                </div>
            </div>


            <div className='pt-3'>
                <h1 className='mt-3 text-center text-danger'>{product.h1}</h1>
            </div>

            {/* ✅ Weight Tabs */}
            {uniqueWeights.length > 0 && (
                <div className='text-center'>
                    <button className='border-0 bg-transparent mx-2' onClick={() => setSelectedWeight(null)}>
                        <ButtonCom btn={"All"} />
                    </button>
                    {uniqueWeights.map((weight, idx) => (
                        <button className='border-0 bg-transparent mx-2' onClick={() => setSelectedWeight(weight)}>
                            <ButtonCom btn={weight} />
                        </button>
                    ))}
                </div>
            )}

            {/* ✅ Slider (Only filtered subproducts shown) */}
            <div className="container-md py-5">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-10 mt-4 mb-5" style={{ position: 'sticky', top: '100px' }}>
                        <div className="px-4 pb-4" style={{ backgroundColor: "#eff4f8" }}>
                            <Slider {...settings}>
                                {product.subproducts.map((item, i) => (
                                    <div className='text-center' key={i}>
                                        <img src={item.proimg} alt="" className='img-fluid' />
                                        <div className='py-3'>
                                            <Tittles stitle={item.ProductName} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Right Cards => Filtered by Weight */}
                    <div className="col-lg-8 col-sm-6 fade-in bg-white" key={selectedWeight}>
                        <div className="row justify-content-evenly align-items-center">
                            {filteredSubProducts.map((item, i) => (
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
                            {filteredSubProducts.length === 0 && (
                                <p className='text-center text-danger'>No products found for selected weight</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Howtouse />
            {/* <ProductSlider /> */}
        </div>
    );
}

export default HOC(SubProducts);
