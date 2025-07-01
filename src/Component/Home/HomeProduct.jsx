import { BsArrowRight } from 'react-icons/bs';
import '../../assets/Css/Home.css';
import products from '../../Product';
import { useNavigate } from 'react-router-dom';
function HomeProduct() {
    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                {products.map((item, i) => {
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-10 ps-sm-2 ps-0 pe-sm-2 pe-3" key={i}>
                            <div className='w-100 m-2 p-3 hover-trigger' style={{ backgroundColor: "#dfe0e5", borderRadius: '8px' }}>
                                <div className='fw-bold text-dark mt-2 mb-3'>{item.h1}</div>
                                <div className='d-flex justify-content-between align-items-end mb-3'>
                                    <div className="styled-wrapper">
                                        <button className="button" onClick={() => navigate(`/product/${item.id}`)}>
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
                                    <img src={item.img} alt="" className='sunlight-shadow object-fit-cover' height={100} width={100} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default HomeProduct