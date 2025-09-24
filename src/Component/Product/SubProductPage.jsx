import { useNavigate, useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonCom from '../ButtonCom';
import HOC from '../HOC';
import { useEffect, useState } from 'react';
import Howtouse from './Howtouse';
import ProductSlider from './Slider';
import axios from 'axios';

function SubProducts() {

    const [isVisible, setIsVisible] = useState(false);
    const [products, setSubProduct] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();
    const [extraSubProducts, setExtraSubProducts] = useState([]);
    const [selectedExtraWeight, setSelectedExtraWeight] = useState(null);

    useEffect(() => {
        axios
            .get("https://backendvimalagro.onrender.com/api/extrasubproducts")
            .then((res) => {
                setExtraSubProducts(res.data || []);
            })
            .catch((err) => console.error("Error fetching extra subproducts:", err));
    }, []);

    // ✅ Find extraSubProduct that belongs to this product

    useEffect(() => {
        axios
            .get("https://backendvimalagro.onrender.com/api/heading")
            .then((res) => {
                setExtraSubheading(res.data || []);
            })
            .catch((err) => console.error("Error fetching extra subproducts:", err));
    }, []);
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
    const [extraSubheading, setExtraSubheading] = useState([]);

    const [selectedSubtypeWeights, setSelectedSubtypeWeights] = useState({});

    // ✅ If product not found
    if (!product) return <p>No product found.</p>;

    const uniqueMainWeights = Array.from(
        new Set(product?.subproducts?.map((item) => item.weight) || [])
    );

    const filteredMainSubProducts = selectedMainWeight
        ? (product?.subproducts || []).filter(
            (item) => item.weight === selectedMainWeight
        )
        : product?.subproducts || [];


    const matchedExtras = extraSubProducts.filter(
        (extra) => extra.productId?._id === product._id
    );
    console.log(extraSubheading);

    const filtered = extraSubheading.filter(
        (item) => item.productId?._id === id
    ).map((item) => item.subproductTitle);
    console.log(filtered);

    return (
        <div className='mt-5'>
            {/* Product Banner */}

            <div >
                <div className="d-none d-lg-block  mt-5">
                    <img src={product.productBanner} alt="" className="img-fluid w-100 h-100 " />
                </div>
                <div className="d-block d-lg-none  mt-5">
                    <img src={product.productBannerMobile} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
            </div>
            <div className='py-2 py-md-4' style={{ backgroundColor: "#fffcf3" }}>
                <div className=''>
                    <div className='container-xxl'>
                        <div>
                            <div className='row justify-content-center'>

                                {/* Banner 2 */}
                                <div>
                                    <div className="d-none d-lg-block">
                                        <img src={product.banner2} alt="" className="img-fluid w-100 h-100 " />
                                    </div>
                                    <div className="d-block d-lg-none">
                                        <img src={product.banner2Mobile} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
                                    </div>
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
                    <h3 className='mt-1 mt-lg-5 text-center text-dark text-uppercase fw-bold ftittle'>{product.productName}</h3>
                </div>

                {uniqueMainWeights.length > 0 && (
                    <div className="row justify-content-center pt-1 pt-md-3 flex-wrap gx-0 gap-2">
                        <div
                            className="col-auto mt-1"
                            onClick={() => setSelectedMainWeight(null)}
                        >
                            <div
                                className={`p-2 rounded-pill px-3 px-md-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedMainWeight === null ? "active-btn" : ""
                                    }`}
                            >
                                All
                            </div>
                        </div>

                        {uniqueMainWeights.map((weight, idx) => (
                            <div
                                key={idx}
                                className="col-auto mt-1"
                                onClick={() => setSelectedMainWeight(weight)}
                            >
                                <div
                                    className={`p-2 rounded-pill px-3 px-md-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedMainWeight === weight ? "active-btn" : ""
                                        }`}
                                >
                                    {weight}
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
                                        <button className="rounded-pill px-4 py-2 fw-bold mt-2 text-white" style={{ background: "var(--red)", border: "2px solid var(--ofwhite)", fontSize: "15px" }}>View More</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* only for pickels */}
                {matchedExtras.length > 0 && (
                    <div className="my-2 my-md-5">
                        <h3 className="mt-1 mt-md-3 text-center text-dark text-uppercase fw-bold ftittle">
                            {/* Extra Subproducts of {product.productName} */}
                            {filtered.map((title, i) => (
                                <li key={i}>{title}</li>
                            ))}
                        </h3>

                        {/* 1. Collect ALL extraSubProducts for this product */}
                        {(() => {
                            const allExtraItems = matchedExtras.flatMap(extra => extra.extrasubproducts);

                            // ✅ Unique weights
                            const uniqueExtraWeights = Array.from(
                                new Set(allExtraItems.map(item => item.weight))
                            );

                            // ✅ Filter based on selectedExtraWeight
                            const filteredExtraItems = selectedExtraWeight
                                ? allExtraItems.filter(item => item.weight === selectedExtraWeight)
                                : allExtraItems;

                            return (
                                <>
                                    {/* 2. Tabs */}
                                    {uniqueExtraWeights.length > 0 && (
                                        <div className="text-center pt-1 pt-md-3 d-block d-lg-flex align-items-center justify-content-center">
                                            {/* All Tab */}
                                            <div
                                                className="border-0 bg-transparent mx-2 mt-2 mt-md-3"
                                                onClick={() => setSelectedExtraWeight(null)}
                                            >
                                                <div
                                                    className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedExtraWeight === null ? "active-btn" : ""
                                                        }`}
                                                >
                                                    All
                                                </div>
                                            </div>

                                            {/* Unique Weight Tabs */}
                                            {uniqueExtraWeights.map((weight, idx) => (
                                                <div
                                                    key={idx}
                                                    className="border-0 bg-transparent mx-2 mt-2 mt-md-3"
                                                    onClick={() => setSelectedExtraWeight(weight)}
                                                >
                                                    <div
                                                        className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedExtraWeight === weight ? "active-btn" : ""
                                                            }`}
                                                    >
                                                        {weight} GM
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* 3. Products Grid */}
                                    <div className="container py-3 py-md-5">
                                        <div className="row justify-content-center">
                                            {filteredExtraItems.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="col-6 col-md-4 custom-col-lg-5 mb-4 d-flex"
                                                >
                                                    <div className="card shadow-sm w-100 h-100 text-center p-1 pb-md-3">
                                                        {/* Image */}
                                                        <img
                                                            src={item.subproductImg}
                                                            alt={item.subproductName}
                                                            className="img-fluid product_sizeimg"
                                                            style={{ objectFit: "contain" }}
                                                        />
                                                        {/* Name */}
                                                        <div
                                                            className="fw-semibold subp pt-2 p-1"
                                                            style={{ fontSize: "14px" }}
                                                        >
                                                            {item.subproductName}
                                                        </div>
                                                        {/* Button */}
                                                        <div
                                                            onClick={() => navigate(`/product/${id}/${item._id}`)}
                                                            className={`subbtn mt-auto ${!isVisible ? "d-none" : ""
                                                                }`}
                                                        >
                                                            <button className="rounded-pill px-4 py-2 fw-bold mt-2 text-white" style={{ background: "var(--red)", border: "2px solid var(--ofwhite)", fontSize: "15px" }}>View More</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                )}
            </div>
            {/* Footer Components */}
            <Howtouse banner={product.howToMakeBanner} bannerMobile={product.howToMakeBannerMobile} />
            <ProductSlider />
        </div>
    );
}

export default HOC(SubProducts);