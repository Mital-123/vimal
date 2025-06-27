import React from 'react'
import Footer from './Footer'

function HOC(Component) {
    function NewComponent() {
        return (
            <>
                <Component />
                <Footer />
            </>
        )
    }
    return NewComponent
}

export default HOC