import React from 'react'

function HomeCarousel() {
    return (
        // <div>
        //     <img src="https://www.swad.shop/cdn/shop/files/Home_page_banner_3_desktop.jpg?v=1739857468&width=2000" alt="" className='img-fluid w-100' />
        // </div>
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }} className="landingimg mt-5 pt-md-4 pt-0">
            <img
                src="https://www.swad.shop/cdn/shop/files/Home_page_banner_3_desktop.jpg?v=1739857468&width=2000"
                alt=""
                className="img-fluid w-100 d-md-block d-none "
                style={{
                    height: '100%',
                }}
            />
            <img
                src={require("../../assets/Images/verticle mobile_image.jpeg")}
                alt=""
                className="img-fluid w-100 d-md-none d-block object-fit-cover"
                style={{
                    height: '100%',
                }}
            />
        </div>
    )
}

export default HomeCarousel