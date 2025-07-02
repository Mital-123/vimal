import HOC from '../HOC'
import HomeCarousel from './HomeCarousel'
import HomeProduct from './HomeProduct'

function HomePage() {
    return (
        <div>
            <HomeCarousel />
            <HomeProduct />
        </div>
    )
}

export default HOC(HomePage)