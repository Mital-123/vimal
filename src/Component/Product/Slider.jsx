import React from 'react'

function ProductSlider() {
    return (
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require('../../assets/Images/whychooseus_image.png')} class="d-block w-auto vh-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={require('../../assets/Images/whychooseus_image.png')} class="d-block w-auto vh-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={require('../../assets/Images/whychooseus_image.png')} class="d-block w-auto vh-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ProductSlider