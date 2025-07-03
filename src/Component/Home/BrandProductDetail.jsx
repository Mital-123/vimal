import React from 'react'
import { useParams } from 'react-router-dom'
import { BrandProduct } from './BrandProductList';
import Tittles from '../Tittles';
import ButtonCom from '../ButtonCom';

function BrandProductDetail() {

    const { brand, brandproduct } = useParams();
    const branddata = BrandProduct.find(brapro => brapro.brandId === brand);
    const branddetails = branddata?.subBrand.find(bradetail => bradetail.brandproductId === brandproduct);

    return (
        <>
            <div className='brand-detail-wrapper'>
                <div className="bubble-background">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="bubble"></span>
                    ))}
                </div>
                <div className='container'>
                    {branddetails?.subbrandDetails?.map((item, index) => (
                        <div key={index}>
                            <div className='row justify-content-center my-5'>
                                <div className='col-12 col-lg-5 p-4 order-2 order-lg-1'>
                                    <div className='h-100'>
                                        <div className='brdstart'>
                                            <Tittles stitle={item.ProductTittle} ltitle={item.Productsubtittle} />
                                        </div>
                                        <div className='pera my-3'>
                                            {item.productInfo}
                                        </div>
                                        <div>
                                            <ButtonCom btn="Inquire For Bulk" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-5 p-4 order-1 order-lg-2'>
                                    <div className='h-100'>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <div className='product-yellow-circle p-3 rounded-5'>
                                                <img
                                                    src={item.ProductImage}
                                                    alt={item.ProductTittle}
                                                    className='img-fluid product-image object-fit-cover'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BrandProductDetail