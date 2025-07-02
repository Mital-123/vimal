import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BrandProduct } from './BrandProductList';
import ButtonCom from '../ButtonCom';
import Tittles from '../Tittles';

function SubProductBrand() {

    const { brand } = useParams();
    const BrandProductData = BrandProduct.filter((item) => item.brandId === brand);

    return (
        <>
            <div className='subproductbrand_bg py-4 py-lg-5'>
                <div className='container'>
                    <div className='row p-3 p-md-0 p-lg-0'>
                        {BrandProductData.map((item, index) => (
                            <div key={item.brandproductId}>
                                <div className=''>
                                    <div className='brdstart'>
                                        <Tittles stitle={item.Name} />
                                    </div>
                                </div>
                                <div className='row mt-2 g-4'>
                                    {item.subBrand && item.subBrand.map((sub, subIndex) => (
                                        <div key={subIndex} className='col-12 col-lg-3 col-md-6'>
                                            <div className="h-100 subbrandpro_crd shadow text-center overflow-hidden position-relative bg-light">
                                                <div className="subbrandpro_pic d-inline-block mb-5 z-1 position-relative">
                                                    <img
                                                        src={sub.subBrandImage}
                                                        className="position-relative z-2"
                                                    />
                                                </div>
                                                <div className="team-content">
                                                    <div className='fw-semibold text-center fs-6 pb-1'>
                                                        {sub.subBrandtittle}
                                                    </div>
                                                    <Link className='subbtn text-center' to={`/${brand}/${sub.brandproductId}`}>
                                                        <ButtonCom btn={"View Product"} />
                                                    </Link>
                                                </div>
                                            </div>
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