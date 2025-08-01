import { Link, useNavigate, useParams } from 'react-router-dom';
import products from '../../Product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonCom from '../ButtonCom';
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

    const [selectedMainWeight, setSelectedMainWeight] = useState(null);
    const [selectedSubtypeWeights, setSelectedSubtypeWeights] = useState({});

    if (!product || !product.subproducts) return <p>No subproducts found.</p>;
    const packagedetail = product.Pckdetail;

    const uniqueMainWeights = Array.from(new Set(product.subproducts.map(item => item.weight)));

    const filteredMainSubProducts = selectedMainWeight
        ? product.subproducts.filter(item => item.weight === selectedMainWeight)
        : product.subproducts;

    return (
        <div className='mt-5'>
            {/* Banner */}
            <div className='pt-3'>
                <img src="https://i0.wp.com/sub.vimalagro2.vimalagro.com/sub.vimalagro2.vimalagro/wp-content/uploads/2024/10/3-1.png?w=1920&ssl=1" alt="" className='img-fluid w-100' />
            </div>

            {/* Power Section */}
            <div style={{ backgroundColor: "#fffcf3" }}>
                <div className='pt-2 pt-lg-4'><Gogreen /></div>
                <div className='m-auto text-center col-sm-8 col-11 py-2 py-lg-4'>
                    <h2 className='fw-bold my-2 my-lg-4'>Power of {product.h1}</h2>
                    <p className='px-2 px-lg-5'>{product.powerdesc}</p>
                    <div className='w-75 mx-auto pb-3'>
                        {packagedetail.map((x, i) => (
                            <span key={i} className='fw-bold'>{x}{i < packagedetail.length - 1 && ' | '}</span>
                        ))}
                    </div>
                    {/* <div className='mt-1 mt-lg-4'>
                        <Link to="https://www.facebook.com/SWADBrand/" target="_blank" className='fs-4 mx-2 text-dark'><FaFacebook /></Link>
                        <Link to="https://www.instagram.com/swadbrand/" target="_blank" className='fs-4 mx-2 text-dark'><FaInstagram /></Link>
                        <Link to="https://www.youtube.com/@SwadBrand/" target="_blank" className='fs-4 mx-2 text-dark'><FaYoutube /></Link>
                    </div> */}
                </div>
            </div>

            {/* Main Product Section */}
            <div className="position-relative">
                <div className="yellow-circle" style={{
                    position: 'absolute',
                    left: '-50px',
                    marginTop: '-60px',
                    width: '270px',
                    height: '270px',
                    backgroundColor: '#dbb842',
                    borderRadius: '50%',
                    zIndex: '-1',
                }}></div>

                <div className='pt-3'>
                    <h3 className='mt-3 mt-lg-5 text-center text-dark text-uppercase fw-bold'>{product.h1}</h3>
                </div>

                {/* Main Weight Filter */}
                {uniqueMainWeights.length > 0 && (
                    <div className='text-center pt-3 d-block d-lg-flex align-items-center justify-content-center'>
                        <div className='border-0 bg-transparent mx-2 mt-3' onClick={() => setSelectedMainWeight(null)}>
                            <div className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedMainWeight === null ? 'active-btn' : ''}`} >
                                All
                            </div>
                        </div>
                        {uniqueMainWeights.map((weight, idx) => (
                            <div key={idx} className='border-0 bg-transparent mx-2 mt-3' onClick={() => setSelectedMainWeight(weight)}>
                                <div className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedMainWeight === weight ? 'active-btn' : ''}`} >
                                    {weight}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Display Main Subproducts */}
                <div className="container py-5">
                    <div className="row justify-content-center">
                        {filteredMainSubProducts.map((item, index) => (
                            <div key={index} className="col-6 col-md-4 custom-col-lg-5 mb-4 d-flex">
                                <div className="card shadow-sm w-100 h-100 text-center p-1 p-md-3">
                                    <img src={item.proimg} alt="" className='img-fluid' style={{ height: '180px', objectFit: 'contain' }} />
                                    <div className='fw-semibold subp pt-2 p-1 fs-6'>
                                        {item.ProductName}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subtypes Section */}
                {product.subtypes && product.subtypes.length > 0 && product.subtypes.map((subtype, idx) => {
                    const subtypeId = subtype.id;
                    const subtypeWeights = Array.from(new Set(subtype.subproducts.map(item => item.weight)));
                    const selectedSubtypeWeight = selectedSubtypeWeights[subtypeId] || null;
                    const filteredSubtypeProducts = selectedSubtypeWeight
                        ? subtype.subproducts.filter(item => item.weight === selectedSubtypeWeight)
                        : subtype.subproducts;

                    return (
                        <div key={idx} className="my-5">
                            <h3 className='mt-3 text-center text-dark text-uppercase fw-bold'>{subtype.h1}</h3>

                            {/* Weight Filter for Subtype */}
                            {subtypeWeights.length > 0 && (
                                <div className='text-center py-4 d-block d-lg-flex align-items-center justify-content-center'>
                                    <div className='border-0 bg-transparent mx-2' onClick={() =>
                                        setSelectedSubtypeWeights(prev => ({ ...prev, [subtypeId]: null }))
                                    }>
                                        <div className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase mt-3 ${!selectedSubtypeWeight ? 'active-btn' : ''}`} >
                                            All
                                        </div>
                                    </div>
                                    {subtypeWeights.map((weight, i) => (
                                        <div key={i} className='border-0 bg-transparent mx-2' onClick={() =>
                                            setSelectedSubtypeWeights(prev => ({ ...prev, [subtypeId]: weight }))
                                        }>
                                            <div className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase mt-3 ${selectedSubtypeWeight === weight ? 'active-btn' : ''}`}>
                                                {weight}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Display Subtype Subproducts */}
                            <div className="container py-3">
                                <div className="row justify-content-center">
                                    {filteredSubtypeProducts.map((item, index) => (
                                        <div key={index} className="col-6 col-md-4 custom-col-lg-5 mb-4 d-flex">
                                            <div className="card shadow-sm w-100 h-100 text-center p-1 p-md-3">
                                                <img src={item.proimg} alt="" className='img-fluid' style={{ height: '180px', objectFit: 'contain' }} />
                                                <div className='fw-semibold subp pt-2 p-1 fs-6'>
                                                    {item.ProductName}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Components */}
            <Howtouse />
            <ProductSlider />
        </div>
    );
}

export default HOC(SubProducts);


{/* old product show with slider code */ }
{/*   // ✅ Slider settings paste this up side on return 
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
                    */}
{/* <div className="col-lg-4 col-sm-6 col-10 mt-4 mb-5" style={{ position: 'sticky', top: '100px' }}>
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
                    </div> */}

{/* Right Cards => Filtered by Weight */ }
{/* <div className="col-lg-8 col-sm-6 fade-in bg-white" key={selectedWeight}>
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
                    </div> */}