import Certificates from '../../Certificates'
import HOC from '../HOC'
import Counter from './Counter'
import HomeAbout from './HomeAbout'
import HomeCarousel from './HomeCarousel'
import HomeContact from './HomeContact'
import HomeProduct from './HomeProduct'
import HomeRecipe from './HomeRecipe'
import ProductBrand from './ProductBrand'
import ProductHighlight from './ProductHighlight'
import Testimonial from './Testimonial'
import Whychooseus from './Whychooseus'


function HomePage() {
    return (
        <div>
            <HomeCarousel />
            <ProductHighlight />
            <HomeAbout />
            <ProductBrand />
            <HomeContact />
            <Counter />
            <Whychooseus />
            {/* <HomeProduct /> */}
            <Testimonial />
            <HomeRecipe />
            <Certificates />
        </div>
    )
}

export default HOC(HomePage)