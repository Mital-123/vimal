import HOC from '../HOC'
import HomeCarousel from './HomeCarousel'

function HomePage() {
    return (
        <div>
            <HomeCarousel />
        </div>
    )
}

export default HOC(HomePage)