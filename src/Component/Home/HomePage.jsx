import Certificates from '../../Certificates'
import HOC from '../HOC'
import HomeCarousel from './HomeCarousel'
import HomeProduct from './HomeProduct'
import ProductBrand from './ProductBrand'
import Testimonial from './Testimonial'

function HomePage() {
    return (
        <div>
            <HomeCarousel />
            <HomeProduct />
            <ProductBrand />
            <Testimonial/>
    <Certificates/>
        </div>
    )
}

export default HOC(HomePage)