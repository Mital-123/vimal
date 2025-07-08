import React, { useEffect, useState } from 'react'
import HOC from '../HOC'
import Tittles from '../Tittles'
import ButtonCom from '../ButtonCom';

function Blog() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
       <>
        <div style={{ position: 'relative', width: '100%', height: '60vh', overflow: 'hidden' }}>
  <img
    src="https://www.yellowsky.in/image/catalog/products/vimal_agro/02.jpg"
    // src="https://www.yellowsky.in/image/catalog/products/vimal_agro/03.jpg"
    alt=""
    className="img-fluid w-100"
    style={{
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    }}
  />
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#240000c0', // overlay color
      boxShadow: 'inset 0 0 100px 20px #000',
      pointerEvents: 'none',
    }}
  ></div>
</div>

        <div className="container-lg">
            {recipeSections.map((recipe, i) => (
                <div className='red-circle' key={recipe.id}>
                    <div className='row align-items-center justify-content-center py-5 lh-lg'>
                        <div className='col-md-6'>
                            <img src={recipe.image} alt="" className='img-fluid' />
                        </div>
                        <div className='col-md-6'>
                            <section className={`red-certificates-section py-0 ${isVisible ? 'visible' : ''}`}>
                                <div className="floating-shapes">
                                    <div className="shape shape-1"></div>
                                    <div className="shape shape-2"></div>
                                    <div className="shape shape-3"></div>
                                    <div className="shape shape-4"></div>
                                    <div className="shape shape-5"></div>
                                </div>
                                <Tittles stitle={recipe.titleSmall} ltitle={recipe.titleLarge} />
                                <div className='lh-base ps-2 mt-3 fw-lighter'>{recipe.description}</div>
                                <div className='text-md-start text-center'>
                                    <img src={recipe.arrow} alt="" style={{ height: '100px' }} />
                                </div>
                                <div>
                                    <ButtonCom btn={"How to Make ??"} />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <div>

                </div>
            </div>
        </div>
       </>
    )
}

export default HOC(Blog)


const recipeSections = [
    {
        id: 1,
        image: require('../../assets/Images/recepi1.jpg'),
        titleSmall: "5 Favorite",
        titleLarge: "Pickles In The Winter",
        description: "There is no spring without sunshine, no autumn without brown, no summer without holidays, and no winter without...yes, you guess it right! Pickles!! We guarantee that even today when you rack your br...",
        arrow: require('../../assets/Images/arrow_down.png'),
    },
    {
        id: 2,
        image: require('../../assets/Images/recepi2.jpg'),
        titleSmall: "Swad's",
        titleLarge: "Mango Milkshake",
        description: "SWAD Mango Milkshake is a cool and satiating drink made by simply blending ripe mango pulp, milk and sugar. Ingredients: 2 large Ripe Mangoes(approx. 2 cups chopped mango) 1½ cups Milk 1½ tabl...",
        arrow: require('../../assets/Images/arrow_down.png'),
    },
    // Add more recipes like this...
];