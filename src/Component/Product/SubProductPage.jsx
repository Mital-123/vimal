import { useNavigate, useParams } from 'react-router-dom';
// import products from '../../Product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonCom from '../ButtonCom';
import HOC from '../HOC';
import { useEffect, useState } from 'react';
import Gogreen from './Gogreen';
import Howtouse from './Howtouse';
import ProductSlider from './Slider';
import axios from 'axios';

function SubProducts() {

    const [isVisible, setIsVisible] = useState(false);
    const [products, setSubProduct] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    // ✅ Fetch visibility toggle
    useEffect(() => {
        axios
            .get("https://backendvimalagro.onrender.com/view/btn")
            .then((res) => {
                setIsVisible(res.data?.isVisible || false);
            })
            .catch((err) => console.error("Error fetching button visibility:", err));
    }, []);

    // ✅ Fetch products
    const FetchProduct = async () => {
        try {
            const res = await axios.get(
                "https://backendvimalagro.onrender.com/api/products"
            );
            setSubProduct(res.data || []);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        FetchProduct();
    }, []);

    const product = products.find((p) => p._id == id);
    console.log(product);

    const [selectedMainWeight, setSelectedMainWeight] = useState(null);
    const [selectedSubtypeWeights, setSelectedSubtypeWeights] = useState({});

    // ✅ If product not found
    if (!product) return <p>No product found.</p>;

    const packagedetail = product?.Pckdetail || [];
    const uniqueMainWeights = Array.from(
        new Set(product?.subproducts?.map((item) => item.weight) || [])
    );

    const filteredMainSubProducts = selectedMainWeight
        ? (product?.subproducts || []).filter(
            (item) => item.weight === selectedMainWeight
        )
        : product?.subproducts || [];

    return (
        <div className='mt-5'>
            {/* Product Banner */}
            <div>
                <img src={product.productBanner} alt="" className='img-fluid w-100' />
            </div>

            <div style={{ backgroundColor: "#fffcf3" }}>
                <div className='pt-2 pt-lg-4'>
                    <div className='container'>
                        <div className="col-10 mx-auto">
                            <div className='row justify-content-center'>
                                <div className='col-12 text-center'>
                                    {/* Banner 2 */}
                                    <img src={product.banner2} alt="" className='img-fluid w-100 border border-dark' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-auto text-center col-sm-8 col-11 py-2 '>
                    {/* Product Name */}
                    <h2 className='fw-bold my-1 my-lg-4 ftittle'>Power of {product.productName}</h2>
                    <p className='px-2 px-lg-5'>{product.powerdesc}</p>
                    <div className='w-75 mx-auto pb-3'>
                        {product.productSizes.map((x, i) => (
                            /* Product Sizes */
                            <span key={i} className='fw-bold pe-1 pera'>{x}{i < product.productSizes.length - 1 && ' | '}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className='pt-1 pt-md-2'>
                    <h3 className='mt-1 mt-lg-5 text-center text-dark text-uppercase fw-bold ftittle'>{product.h1}</h3>
                </div>

                {uniqueMainWeights.length > 0 && (
                    <div className='text-center pt-1 pt-md-3 d-block d-lg-flex align-items-center justify-content-center'>
                        <div className='border-0 bg-transparent mx-2 mt-2 mt-md-3' onClick={() => setSelectedMainWeight(null)}>
                            <div className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedMainWeight === null ? 'active-btn' : ''}`} >
                                All
                            </div>
                        </div>
                        {uniqueMainWeights.map((weight, idx) => (
                            <div key={idx} className='border-0 bg-transparent mx-2 mt-2 mt-md-3' onClick={() => setSelectedMainWeight(weight)}>
                                <div className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedMainWeight === weight ? 'active-btn' : ''}`} >
                                    {/* Weight */}
                                    {weight} GM
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Display Main Subproducts */}
                <div className="container py-3 py-md-5">
                    <div className="row justify-content-center">
                        {filteredMainSubProducts.map((item, index) => (
                            <div key={index} className="col-6 col-md-4 custom-col-lg-5 mb-4 d-flex">
                                <div className="card shadow-sm w-100 h-100 text-center p-1 pb-md-3">
                                    {/* Subproduct Image */}
                                    <img src={item.subproductImg} alt="" className='img-fluid product_sizeimg' style={{ objectFit: 'contain' }} />
                                    <div className='fw-semibold subp pt-2 p-1 ' style={{ fontSize: "14px" }}>
                                        {/* Subproduct Name */}
                                        {item.subproductName}
                                    </div>
                                    <div
                                        onClick={() => navigate(`/product/${id}/${item._id}`)}
                                        className={`subbtn mt-auto ${!isVisible ? "d-none" : ""}`}
                                        style={{ padding: "10px 10px" }}
                                    >
                                        <ButtonCom btn={"View More"} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subtypes Section for PICKELS Only*/}
                {product.subtypes && product.subtypes.length > 0 && product.subtypes.map((subtype, idx) => {
                    const subtypeId = subtype.id;
                    const subtypeWeights = Array.from(new Set(subtype.subproducts.map(item => item.weight)));
                    const selectedSubtypeWeight = selectedSubtypeWeights[subtypeId] || null;
                    const filteredSubtypeProducts = selectedSubtypeWeight
                        ? subtype.subproducts.filter(item => item.weight === selectedSubtypeWeight)
                        : subtype.subproducts;

                    return (
                        <div key={idx} className="my-2 my-md-5">
                            <h3 className='mt-1 mt-md-3 text-center text-dark text-uppercase fw-bold ftittle'>{subtype.h1}</h3>

                            {/* Weight Filter for Subtype */}
                            {subtypeWeights.length > 0 && (
                                <div className='text-center py-2 py-md-4 d-block d-lg-flex align-items-center justify-content-center'>
                                    <div className='border-0 bg-transparent mx-2' onClick={() =>
                                        setSelectedSubtypeWeights(prev => ({ ...prev, [subtypeId]: null }))
                                    }>
                                        <div className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase mt-2 mt-md-3 ${!selectedSubtypeWeight ? 'active-btn' : ''}`} >
                                            All
                                        </div>
                                    </div>
                                    {subtypeWeights.map((weight, i) => (
                                        <div key={i} className='border-0 bg-transparent mx-2' onClick={() =>
                                            setSelectedSubtypeWeights(prev => ({ ...prev, [subtypeId]: weight }))
                                        }>
                                            <div className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase mt-2 mt-md-3 ${selectedSubtypeWeight === weight ? 'active-btn' : ''}`}>
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
                                                <img src={item.proimg} alt="" className='img-fluid  product_sizeimg' style={{ objectFit: 'contain' }} />
                                                <div className='fw-semibold subp pt-2 p-1 ' style={{ fontSize: "14px" }}>
                                                    {/* Product Name */}
                                                    {item.ProductName}
                                                </div>
                                                <div
                                                    onClick={() => navigate(`/product/${id}/${item.id}`)}
                                                    className={`subbtn mt-auto ${!isVisible ? "d-none" : ""}`}
                                                    style={{ padding: "5px 10px" }}
                                                >
                                                    <ButtonCom btn={"View More"} />
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
            <Howtouse banner={product.howToMakeBanner} />
            <ProductSlider />
        </div>
    );
}

export default HOC(SubProducts);