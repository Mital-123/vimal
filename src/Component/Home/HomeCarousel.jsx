import React from 'react'

function HomeCarousel() {
    return (
        // <div>
        //     <img src="https://www.swad.shop/cdn/shop/files/Home_page_banner_3_desktop.jpg?v=1739857468&width=2000" alt="" className='img-fluid w-100' />
        // </div>
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden', marginTop: '78px' }} className="landingimg">
            <img
                src="https://www.swad.shop/cdn/shop/files/Home_page_banner_3_desktop.jpg?v=1739857468&width=2000"
                alt=""
                className="img-fluid w-100"
                style={{
                    height: '100%',
                }}
            />
        </div>
    )
}

export default HomeCarousel