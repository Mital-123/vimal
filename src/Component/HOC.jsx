import React from 'react'
import Footer from './Footer'
import Header from './Header'

function HOC(Component) {
    function NewComponent() {
        return (
            <>
                <Header />
                <Component />
                <Footer />
            </>
        )
    }
    return NewComponent
}

export default HOC