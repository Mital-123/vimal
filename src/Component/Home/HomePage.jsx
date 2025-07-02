import HOC from '../HOC'
import HomeCarousel from './HomeCarousel'
import HomeProduct from './HomeProduct'
import ProductBrand from './ProductBrand'

function HomePage() {
    return (
        <div>
            <HomeCarousel />
            <HomeProduct />
            <ProductBrand />
        </div>
    )
}

export default HOC(HomePage)