import { FaRegClock } from 'react-icons/fa'
import HOC from '../HOC'
import { GoPerson } from 'react-icons/go'
import { PiChefHat } from 'react-icons/pi'
import { MdKeyboardDoubleArrowRight, MdStarBorder } from 'react-icons/md'
import Tittles from '../Tittles'
import { TbArrowBadgeRightFilled } from 'react-icons/tb'

function Recepie() {
    return (
        <>
            <div className='mt-5'>
                <img src="https://i0.wp.com/sub.vimalagro2.vimalagro.com/sub.vimalagro2.vimalagro/wp-content/uploads/2024/10/3-1.png?w=1920&ssl=1" alt="" className='img-fluid w-100' />
            </div>
            <div className='container'>
                <div className='pt-3 pt-md-5'>
                    <div>
                        <div className='row mx-auto'>
                            <div className="col-lg-3 col-6">
                                <div className="h-100 d-block d-md-flex align-items-center mt-2 mt-md-0 justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
                                    <GoPerson className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
                                    <div className='ms-0 ms-md-3'>
                                        <div className='fs-5 fw-semibold text-center text-md-start mt-2 mt-md-0' style={{ letterSpacing: "1.2px" }}>Servings</div>
                                        <div className="text-center text-md-start mt-1 mt-md-0">4 Persons</div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="h-100 d-block d-md-flex align-items-center mt-2 mt-md-0 justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
                                    <FaRegClock className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
                                    <div className='ms-0 ms-md-3'>
                                        <div className='fs-5 fw-semibold text-center text-md-start mt-2 mt-md-0' style={{ letterSpacing: "1.2px" }}>Prep Time</div>
                                        <div className="text-center text-md-start mt-1 mt-md-0">15 Minutes</div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="h-100 mt-3 mt-md-0 d-block d-md-flex align-items-center mt-2 mt-md-2 mt-lg-0 justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
                                    <PiChefHat className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
                                    <div className='ms-0 ms-md-3'>
                                        <div className='fs-5 fw-semibold text-center text-md-start mt-2 mt-md-0' style={{ letterSpacing: "1.2px" }}>Cook Time</div>
                                        <div className="text-center text-md-start mt-1 mt-md-0">10 Minutes</div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="h-100 mt-3 mt-md-0 d-block d-md-flex align-items-center mt-2 mt-md-2 mt-lg-0 justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
                                    <MdStarBorder className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
                                    <div className='ms-0 ms-md-3'>
                                        <div className='fs-5 fw-semibold text-center text-md-start mt-2 mt-md-0' style={{ letterSpacing: "1.2px" }}>Difficulty</div>
                                        <div className="text-center text-md-start mt-1 mt-md-0">Intermediate Level</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='p-1 mx-auto mt-4'>
                        <p className='p-2' style={{ textAlign: "justify" }}>
                            Savor the bold and savory flavors of our Ground Beef Tacos! The impeccably seasoned ground beef, nestled in warm tortillas, creates a symphony of tastes complemented by vibrant toppings like crisp lettuce, juicy tomatoes, and a dollop of zesty salsa. This recipe promises a fiesta of textures and tastes, making it a perfect choice for a quick and delicious weeknight meal.
                        </p>
                    </div>
                    <div className='row mt-0 mt-md-3'>
                        <div className='col-12 col-lg-7 mb-4'>
                            <div className='h-100'>
                                <div className='shadow-lg p-4 rounded-3'>
                                    <Tittles stitle='ingredients' />
                                    <ul className="ingredients-list mt-4 ps-2">
                                        <li><MdKeyboardDoubleArrowRight /> 1 lb ground beef 70–80% lean</li>
                                        <li><MdKeyboardDoubleArrowRight /> 2 tbsp olive oil</li>
                                        <li><MdKeyboardDoubleArrowRight /> 1 tsp smoked paprika</li>
                                        <li><MdKeyboardDoubleArrowRight /> 1 tsp cumin</li>
                                        <li><MdKeyboardDoubleArrowRight /> 1/2 tsp cayenne pepper</li>
                                        <li><MdKeyboardDoubleArrowRight /> Salt and pepper to taste</li>
                                        <li><MdKeyboardDoubleArrowRight /> 8 small flour tortillas</li>
                                        <li><MdKeyboardDoubleArrowRight /> 1 cup shredded lettuce</li>
                                        <li><MdKeyboardDoubleArrowRight /> 1 cup diced tomatoes</li>
                                        <li><MdKeyboardDoubleArrowRight /> 1/2 cup chopped red onion</li>
                                        <li><MdKeyboardDoubleArrowRight /> 1/4 cup chopped fresh cilantro</li>
                                        <li><MdKeyboardDoubleArrowRight /> 1 avocado, sliced</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-5 mb-4'>
                            <div className='h-100'>
                                <img src="https://lh7-us.googleusercontent.com/docsz/AD_4nXfsbBeZ1tR_1liLc0HPWTCJgYlY837Q8zpTngz9aiLsYcRmRI1raCaJp6xZonXjJ1HrO7eHA77eqnZMwkZSmyPIe34_sQWMliMJEP_W6ShaHmsbmgn-0EVCeJXAe6-INi8q8cbuEjvqD109PcVA1V8AZeZE?key=t5W7vH5YL5hNler7f6L92g" className='img-fluid rounded-3 w-100 h-100 object-fit-cover' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="p-1 mx-auto mb-3 mb-md-5 mt-2 mt-md-4">
                        <Tittles stitle='Coockig Intructions' />
                        <div className='mt-4'>
                            <div className='d-flex align-items-center my-3 p-1 pt-3 rounded-4 my-3 shadow' style={{ backgroundColor: "var(--ofwhite)" }}>
                                <h1 className='me-1 text-warning p-2 fw-bold'>01</h1>
                                <p className='ms-3 col-9 pera'>In a clean bowl, toss the ground beef with spices olive oil, smoked paprika, cumin, cayenne pepper, salt, and pepper.</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='d-flex align-items-center my-3 p-1 pt-3 rounded-4 my-3 shadow' style={{ backgroundColor: "var(--ofwhite)" }}>
                                <h1 className='me-1 text-warning p-2 fw-bold'>02</h1>
                                <p className='ms-3 col-9 pera'>Heat a skillet over medium–high heat. Add the seasoned ground beef and cook for 2–3 minutes per side until opaque.</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='d-flex align-items-center my-3 p-1 pt-3 rounded-4 my-3 shadow' style={{ backgroundColor: "var(--ofwhite)" }}>
                                <h1 className='me-1 text-warning p-2 fw-bold'>03</h1>
                                <p className='ms-3 col-9 pera'>Warm the prepared flour tortillas in a dry pan or microwave. Make sure to heat the microwave in 180 degrees for 2 minutes.</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='d-flex align-items-center my-3 p-1 pt-3 rounded-4 my-3 shadow' style={{ backgroundColor: "var(--ofwhite)" }}>
                                <h1 className='me-1 text-warning p-2 fw-bold'>04</h1>
                                <p className='ms-3 col-9 pera'>Assemble tacos: Place ground beef on each tortilla, top with lettuce, tomatoes, red onion, paprika, cilantro, and avocado slices.</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className='col-10 mx-auto my-5'>
                        <img src="https://lh7-us.googleusercontent.com/docsz/AD_4nXfsbBeZ1tR_1liLc0HPWTCJgYlY837Q8zpTngz9aiLsYcRmRI1raCaJp6xZonXjJ1HrO7eHA77eqnZMwkZSmyPIe34_sQWMliMJEP_W6ShaHmsbmgn-0EVCeJXAe6-INi8q8cbuEjvqD109PcVA1V8AZeZE?key=t5W7vH5YL5hNler7f6L92g" className='img-fluid rounded-5' alt="" />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default HOC(Recepie)