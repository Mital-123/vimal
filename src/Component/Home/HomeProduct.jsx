import { BsArrowRight } from 'react-icons/bs';
import '../../assets/Css/Home.css';
function HomeProduct() {
    const products = [
        {
            id: 1,
            h1: "Mango Pulp & Slice",
            img: require('../../assets/Images/kesar_mango_pupl_thumb.png')
        },
        {
            id: 2,
            h1: "Ready to Eat Foods (Cans)",
            img: require('../../assets/Images/aloo_methi_thumb.png')
        },
        {
            id: 3,
            h1: "Canned Vegetables (In Brine)",
            img: require('../../assets/Images/product_thumb_2.png')
        },
        {
            id: 4,
            h1: "Ready to Eat (Pouch)",
            img: require('../../assets/Images/aloo_mutter_list.png')
        },
        {
            id: 5,
            h1: "Curry Sauce (Simmer Sauce) (Pouch)",
            img: require('../../assets/Images/balti_curry_thumb.png')
        },
        {
            id: 6,
            h1: "Pickles",
            img: require('../../assets/Images/mango_thumb.png')
        },
        {
            id: 7,
            h1: "Sweet Pickle & Mango Chutney",
            img: require('../../assets/Images/mixed_fruit_jam_thumb.png')
        },
        {
            id: 8,
            h1: "Curry Paste",
            img: require('../../assets/Images/tandoori_thumb.png')
        },
        {
            id: 9,
            h1: "Cooking Paste",
            img: require('../../assets/Images/garlic_paste_thumb.png')
        },
        {
            id: 10,
            h1: "Exotic Sweet Chutney",
            img: require('../../assets/Images/brinjal_thumb.png')
        },
        {
            id: 11,
            h1: "Papad (Pappadums)",
            img: require('../../assets/Images/black_pepper_papad_thumb.png')
        },
        {
            id: 12,
            h1: "Fruit Jam",
            img: require('../../assets/Images/mixed_fruit_jam_thumb.png')
        },
    ]
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                {products.map((item, i) => {
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-10 ps-sm-2 ps-0 pe-sm-2 pe-3" key={i}>
                            <div className='w-100 m-2 p-3 hover-trigger' style={{ backgroundColor: "var(--golden)", borderRadius: '8px' }}>
                                <div className='fw-bold text-dark mt-2 mb-3'>{item.h1}</div>
                                <div className='d-flex justify-content-between align-items-end mb-3'>
                                    <div className="styled-wrapper">
                                        <button className="button">
                                            <div className="button-box">
                                                <span className="button-elem button-elem1">
                                                    <BsArrowRight className='fs-6' />
                                                </span>
                                                <span className="button-elem button-elem2">
                                                    <BsArrowRight className='fs-6' />
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                    <img src={item.img} alt="" className='sunlight-shadow object-fit-cover' height={100} width={100} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default HomeProduct