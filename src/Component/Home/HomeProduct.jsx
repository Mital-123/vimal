import { BsArrowRight } from 'react-icons/bs';
import '../../assets/Css/Home.css';
import products from '../../Product';
import { useNavigate } from 'react-router-dom';
import Certificates from '../../Certificates';
function HomeProduct() {
    let product=products
    const navigate = useNavigate();

    return (
        <>
            <div className='container py-5 my-3'>
                <div className='row justify-content-center'>
                    {products.map((item, i) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-10 ps-sm-2 ps-0 pe-sm-2 pe-3 mt-4" key={i}>
                                <div data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" className='h-100 m-2'>
                                    <div className='w-100 p-2 hover-trigger shadow-sm h-100' onClick={() => navigate(`/product/${item.id}`)} style={{ backgroundColor: "rgb(255, 252, 243)", borderRadius: '8px', cursor: "pointer" }}>
                                        <div className='fw-bold text-dark mt-2 mb-3'>{item.h1}</div>
                                        <div className='d-flex justify-content-between align-items-end mb-3'>
                                            <div className="styled-wrapper">
                                                <button className="button" >
                                                    <div className="button-box">
                                                        <span className="button-elem button-elem1">
                                                            <BsArrowRight className='fs-6' />
                                                        </span>
                                                        <span className="button-elem button-elem2">
                                                            <BsArrowRight className='fs-6' />
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                
                                        <div className="d-flex flex-wrap gap-2">
                                            {
                                                item.subproducts?.slice(0, 4).map((sub, j) => (
                                                    <img
                                                        key={j}
                                                        src={sub.proimg}
                                                        alt={sub.ProductName}
                                                        className='object-fit-contain'
                                                        height={70}
                                                        style={{ maxWidth: '70px' }}
                                                    />
                                                ))
                                            }
                                            {
                                                !item.subproducts && (
                                                    <img
                                                        src={item.img}
                                                        alt={item.h1}
                                                        className='object-fit-contain'
                                                        height={70}
                                                        style={{ maxWidth: '70px' }}
                                                    />
                                                )
                                            }
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Certificates />
        </>
    );
}

export default HomeProduct