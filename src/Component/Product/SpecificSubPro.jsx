import HOC from '../HOC';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../../Product';
import Tittles from '../Tittles';
import { useEffect, useState } from 'react';
import ButtonCom from '../ButtonCom';

function SpecificSubPro() {
    const { id, proid } = useParams();
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const product = products.find(p => p.id === id);
    const subproduct = product.subproducts.find(item => item.id === proid)
    if (!subproduct) return <p>No subproducts found.</p>;
    return (
        <>
            <div className='red-certificates-section'>
                <div className='container red-circle'>
                    <section className={` py-5 ${isVisible ? 'visible' : ''}`}>

                        <div className='row align-items-center justify-content-center rounded-4 my-3 '>
                            <div className='col-lg-4 col-md-6 col-sm-7 col-10'>
                                <div className='test-shine'>
                                    <img src={subproduct.proimg} alt="" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 lh-lg mt-md-0 mt-4' style={{ textAlign: "justify" }}>
                              
                                <Tittles stitle={subproduct.ProductName} />
                                <div className='lh-base ps-2 mt-3 fw-lighter pera'>{subproduct.description}</div>
                                <div className='lh-base ps-2 mt-3 fw-lighter pera'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus rem culpa dignissimos perspiciatis expedita magni eligendi nemo voluptatem cum ratione? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus rem culpa dignissimos perspiciatis expedita magni eligendi nemo voluptatem cum ratione Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus rem culpa dignissimos perspiciatis expedita magni eligendi nemo voluptatem cum ratione</div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className='container pb-4'>
                    <div className='text-center pb-3'>
                        <Tittles stitle="Related Products" />
                    </div>
                    <div className="row g-3 justify-content-center">
                        {
                            product.subproducts
                                .filter(item => item.id !== proid) // ✅ filter out current subproduct
                                .map((item, index) => {
                                    return (
                                        <div key={index} className="col-6 col-md-4 col-lg-3 fade-in mt-3">
                                            <div
                                                className="h-100 shadow text-center p-1 p-lg-3 rounded-4"
                                                style={{ backgroundColor: "#fffcf3", cursor: "pointer" }}
                                                // onClick={() => navigate(`/product/${id}/${item.id}`)} 
                                            >
                                                <img
                                                    src={item.proimg}
                                                    alt=""
                                                    className='img-fluid'
                                                    style={{ height: '200px' }}
                                                />
                                                <div className='fw-semibold subp pt-2 p-1 fs-6'>
                                                    {item.ProductName}
                                                </div>
                                                 <div onClick={() => navigate(`/product/${id}/${item.id}`)}>
                                                    <ButtonCom btn="View More"/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                    {/* <div className="row justify-content-evenly py-4" >
                    {product.subproducts.map((item, i) => (
                        <div className='col-lg-3 m-1 col-md-5 col-sm-7 col-10 p-3 mt-5 text-center bg-white shadow-lg' style={{ backgroundImage: "linear-gradient(135deg, #f7971e, #ffd200)", borderRadius: "14% 86% 13% 87% / 88% 12% 88% 12% " }} key={i}>
                            <div style={{ backgroundColor: "#eff4f8", borderRadius: "50%" }}>
                              <div>
                                  <img
                                    src={item.proimg}
                                    alt=""
                                    className='img-fluid '
                                    style={{
                                        height: '187px', position: "relative", bottom: "80px"
                                    }}
                                />
                              </div>
                                <div className='fw-semibold fs-6'
                                    style={{
                                        position: "relative", bottom: "60px"
                                    }}>
                                    {item.ProductName}
                                </div>
                                <div className='subbtn'
                                    style={{
                                        position: "relative", bottom: "50px"
                                    }}
                                    onClick={() => navigate(`/product/${id}/${item.id}`)}>
                                    <ButtonCom btn={"View Product"} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
                </div>
            </div>
        </>
    );
}

export default HOC(SpecificSubPro)