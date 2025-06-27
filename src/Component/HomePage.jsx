import HOC from './HOC'
import HomeCarousel from './Home/HomeCarousel'

function HomePage() {
    return (
        <div>
            <HomeCarousel />
        </div>
    )
}

export default HOC(HomePage)