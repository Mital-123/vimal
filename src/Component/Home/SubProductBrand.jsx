import React from 'react'
import { useParams } from 'react-router-dom'
import { BrandProduct } from './BrandProductList';
import ButtonCom from '../ButtonCom';
import Tittles from '../Tittles';

function SubProductBrand() {

    const { id } = useParams();
    const BrandProductData = BrandProduct.filter((item) => item.id === id);
    console.log(BrandProductData);

    return (
        <>
            <div className='subproductbrand_bg py-5'>
                <div className='container'>
                    <div className='row'>
                        {BrandProductData.map((item, index) => (
                            <div key={item.id}>
                                <div className=''>
                                    <div className='brdstart'>
                                        <Tittles stitle={item.Name} />
                                    </div>
                                </div>
                                <div className='row mt-4 g-3'>
                                    {item.subBrand && item.subBrand.map((sub, subIndex) => (
                                        <div key={subIndex} className='col-12 col-lg-3'>
                                            <div className='pt-4' style={{ backgroundImage: "linear-gradient(135deg,#610303, #b90000,#ff2525)", borderRadius: "20px" }}>
                                                <div className='w-75 h-75 mx-auto p-2 rounded-5' style={{ backgroundColor: "white" }}>
                                                    <img
                                                        src={sub.subBrandImage}
                                                        alt=""
                                                        className='img-fluid w-100 h-100'
                                                    />
                                                </div>
                                                <div className='fw-semibold text-white text-center fs-6 py-3'>
                                                    {sub.subBrandtittle}
                                                </div>
                                            </div>
                                            {/* <div className='subbtn text-center pb-2' style={{ backgroundImage: "linear-gradient(135deg, #f7971e, #ffd200)" }}>
                                            <ButtonCom btn={"View Product"} />
                                        </div> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubProductBrand