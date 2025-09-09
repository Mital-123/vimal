import HOC from '../HOC';
import { useNavigate, useParams } from 'react-router-dom';
// import products from '../../Product';
import Tittles from '../Tittles';
import { useEffect, useState } from 'react';
import ButtonCom from '../ButtonCom';
import axios from 'axios';

function SpecificSubPro() {
    const { id, proid } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const FetchProduct = async () => {
        try {
            const res = await axios.get("https://backendvimalagro.onrender.com/api/products");
            setProducts(res.data || []);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        FetchProduct();
    }, []);

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // ✅ Find product safely
    const product = products.find(p => p._id === id);

    if (!product) {
        return <p>Loading product...</p>;
    }

    // ✅ Safely access subproducts
    const subproduct = product?.subproducts?.find(item => item._id === proid);

    if (!subproduct) {
        return <p>No subproduct found.</p>;
    }
    return (
        <>
            <div className='red-certificates-section'>
                <div className='container red-circle'>
                    <section className={` py-5 ${isVisible ? 'visible' : ''}`}>
                        <div className='row align-items-center justify-content-center rounded-4 my-3 '>
                            <div className='col-lg-4 col-md-6 col-sm-7 col-10'>
                                <div className='test-shine'>
                                    <img src={subproduct.subproductImg} alt="" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 lh-lg mt-md-0 mt-4' style={{ textAlign: "justify" }}>
                                <Tittles stitle={subproduct.subproductName} />
                                <div className='lh-base ps-2 mt-3 fw-lighter pera'>{subproduct.description}</div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className='container pb-4'>
                    <div className='text-center pb-3'>
                        <Tittles stitle="Related Products" />
                    </div>
                    <div className="row g-3 justify-content-center">
                        {product.subproducts.filter(item => item.id !== proid).map((item, index) => { // ✅ filter out current subproduct
                            return (
                                <div key={index} className="col-6 col-md-4 col-lg-3 fade-in mt-3">
                                    <div className="h-100 shadow text-center p-1 p-lg-3 rounded-4" style={{ backgroundColor: "#fffcf3", cursor: "pointer" }}>
                                        <img src={item.subproductImg} alt="" className='img-fluid' style={{ height: '200px' }} />
                                        <div className='fw-semibold subp pt-2 p-1 fs-6'>{item.subproductName}</div>
                                        <div onClick={() => navigate(`/product/${id}/${item._id}`)}>
                                            <ButtonCom btn="View More" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HOC(SpecificSubPro)