import HOC from '../HOC'
import HomeCarousel from './HomeCarousel'
import HomeProduct from './HomeProduct'
import Testimonial from './Testimonial'

function HomePage() {
    return (
        <div>
            <HomeCarousel />
            <HomeProduct />
            <Testimonial/>
        </div>
    )
}

export default HOC(HomePage)