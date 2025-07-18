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
                                <div><Tittles ltitle={"Swad's"} /></div>
                                <div ><img src={require('../../assets/Images/arrow_down.png')} alt="" style={{ height: '100px' }} /></div>
                                <Tittles stitle={subproduct.ProductName} />
                                <div className='lh-base ps-2 mt-3 fw-lighter'>{subproduct.description}</div>
                            </div>
                        </div>
                    </section>
                </div>
           
            <div className='container'>
              <div className='text-center pb-3'>      <Tittles stitle="Related Product"/></div>
                <div className="row justify-content-evenly py-4" >
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
                </div>
            </div>
             </div>
        </>
    );
}

export default HOC(SpecificSubPro)