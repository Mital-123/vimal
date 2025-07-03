import Certificates from '../../Certificates'
import HOC from '../HOC'
import HomeAbout from './HomeAbout'
import HomeCarousel from './HomeCarousel'
import HomeProduct from './HomeProduct'
import ProductBrand from './ProductBrand'
import Testimonial from './Testimonial'
import Whychooseus from './Whychooseus'

function HomePage() {
    return (
        <div>
            <HomeCarousel />
            <HomeAbout />
            <Whychooseus />
            <ProductBrand />
            <HomeProduct />
            <Testimonial />
            <Certificates />
        </div>
    )
}

export default HOC(HomePage)