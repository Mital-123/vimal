import Certificates from '../../Certificates'
import HOC from '../HOC'
import Counter from './Counter'
import HomeAbout from './HomeAbout'
import HomeCarousel from './HomeCarousel'
import HomeContact from './HomeContact'
import HomeProduct from './HomeProduct'
import ProductBrand from './ProductBrand'
import ProductHighlight from './ProductHighlight'
import Testimonial from './Testimonial'


function HomePage() {
    return (
        <div>
            <HomeCarousel />
            <ProductHighlight />
            <HomeAbout />
            <ProductBrand />
            <HomeContact />
            <Counter />
            {/* <HomeProduct /> */}
            <Testimonial />
            <Certificates />
        </div>
    )
}

export default HOC(HomePage)