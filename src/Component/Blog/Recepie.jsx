import { FaRegClock } from 'react-icons/fa'
import HOC from '../HOC'
import { GoPerson } from 'react-icons/go'
import { PiChefHat } from 'react-icons/pi'
import { MdStarBorder } from 'react-icons/md'
import Tittles from '../Tittles'

function Recepie() {
    return (
        <div className='container mt-5 pt-5'>
            <div className='pt-5'>
                <div>
                    <div className='row col-sm-10 mx-auto'>
                        <div className="col-lg-3 col-md-5 col-6 ">
                            <div className="h-100 d-flex align-items-center justify-content-center text-white rounded-4 p-2 " style={{ backgroundColor: "var(--red)" }}>
                                <GoPerson className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1",  }} />
                                <div className='ms-3'>
                                    <div className='fs-5 fw-semibold' style={{letterSpacing:"1.2px"}}>Servings</div>
                                    <div className="">4 Persons</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-6 ">
                            <div className="h-100 d-flex align-items-center justify-content-center text-white rounded-4 p-2 " style={{ backgroundColor: "var(--red)" }}>
                                <FaRegClock className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1",  }} />
                                <div className='ms-3'>
                                    <div className='fs-5 fw-semibold' style={{letterSpacing:"1.2px"}}>Prep Time</div>
                                    <div className="">15 Minutes</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-6 ">
                            <div className="h-100 d-flex align-items-center justify-content-center text-white rounded-4 p-2 " style={{ backgroundColor: "var(--red)" }}>
                                <PiChefHat className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1",  }} />
                                <div className='ms-3'>
                                    <div className='fs-5 fw-semibold' style={{letterSpacing:"1.2px"}}>Cook Time</div>
                                    <div className="">10 Minutes</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-6 ">
                            <div className="h-100 d-flex align-items-center justify-content-center text-white rounded-4 p-2 " style={{ backgroundColor: "var(--red)" }}>
                                <MdStarBorder className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1",  }} />
                                <div className='ms-3'>
                                    <div className='fs-5 fw-semibold' style={{letterSpacing:"1.2px"}}>Difficulty</div>
                                    <div className="">Intermediate Level</div>
                                </div>

                            </div>
                        </div>
                     
                    </div>
                </div>
                <div className='col-sm-10 p-1 mx-auto mt-5'>
                    <p className='p-2' style={{ textAlign: "justify" }}>
                        Savor the bold and savory flavors of our Ground Beef Tacos! The impeccably seasoned ground beef, nestled in warm tortillas, creates a symphony of tastes complemented by vibrant toppings like crisp lettuce, juicy tomatoes, and a dollop of zesty salsa. This recipe promises a fiesta of textures and tastes, making it a perfect choice for a quick and delicious weeknight meal.
                    </p>
                </div>
                <div className='col-sm-10 p-1 mx-auto mt-3'>
                    {/* <div className='mb-5 mt-3'>
                        Tags<br />
                        <span className='text-warning'>Mexican Food, Tacos, Spicy, Seafood, Featured Recipe</span>
                    </div> */}
                    <div className='shadow-lg p-4'>
                        <Tittles stitle='ingredients' />
                        <ul style={{ columnCount: 2, listStyle: "none" }} className='mt-4 ps-2'>
                            <li>1 lb ground beef 70–80% lean</li>
                            <li>2 tbsp olive oil</li>
                            <li>1 tsp smoked paprika</li>
                            <li>1 tsp cumin</li>
                            <li>1/2 tsp cayenne pepper</li>
                            <li>Salt and pepper to taste</li>
                            <li>8 small flour tortillas</li>
                            <li>1 cup shredded lettuce</li>
                            <li>1 cup diced tomatoes</li>
                            <li>1/2 cup chopped red onion</li>
                            <li>1/4 cup chopped fresh cilantro</li>
                            <li>1 avocado, sliced</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-10 p-1 mx-auto my-5">
                    <Tittles stitle='Coockig Intructions' />
                    <div className='mt-4'>
                        <div className='d-flex align-items-centermy-3 p-2 pt-3 rounded-4 my-3 shadow' style={{ backgroundColor: "var(--ofwhite)" }}>
                            <h1 className='me-1 text-warning p-2 fw-bold'>01</h1>
                            <p className='ms-3 col-9'>In a clean bowl, toss the ground beef with spices olive oil, smoked paprika, cumin, cayenne pepper, salt, and pepper.</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='d-flex align-items-centermy-3 p-2 pt-3 rounded-4 my-3 shadow' style={{ backgroundColor: "var(--ofwhite)" }}>
                            <h1 className='me-1 text-warning p-2 fw-bold'>02</h1>
                            <p className='ms-3 col-9'>Heat a skillet over medium–high heat. Add the seasoned ground beef and cook for 2–3 minutes per side until opaque.</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='d-flex align-items-centermy-3 p-2 pt-3 rounded-4 my-3 shadow' style={{ backgroundColor: "var(--ofwhite)" }}>
                            <h1 className='me-1 text-warning p-2 fw-bold'>03</h1>
                            <p className='ms-3 col-9'>Warm the prepared flour tortillas in a dry pan or microwave. Make sure to heat the microwave in 180 degrees for 2 minutes.</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='d-flex align-items-centermy-3 p-2 pt-3 rounded-4 my-3 shadow' style={{ backgroundColor: "var(--ofwhite)" }}>
                            <h1 className='me-1 text-warning p-2 fw-bold'>04</h1>
                            <p className='ms-3 col-9'>Assemble tacos: Place ground beef on each tortilla, top with lettuce, tomatoes, red onion, paprika, cilantro, and avocado slices.</p>
                        </div>
                    </div>
                </div>

                <div className='col-10 mx-auto my-5'>
                    <img src="https://lh7-us.googleusercontent.com/docsz/AD_4nXfsbBeZ1tR_1liLc0HPWTCJgYlY837Q8zpTngz9aiLsYcRmRI1raCaJp6xZonXjJ1HrO7eHA77eqnZMwkZSmyPIe34_sQWMliMJEP_W6ShaHmsbmgn-0EVCeJXAe6-INi8q8cbuEjvqD109PcVA1V8AZeZE?key=t5W7vH5YL5hNler7f6L92g" className='img-fluid rounded-5' alt="" />
                </div>
            </div>
        </div>
    )
}

export default HOC(Recepie)