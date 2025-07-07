import React from 'react'
import Tittles from '../Tittles';

function AboutImpact() {

    const services = [
        {
            title: "Organic Non-GMO",
            description: "Everything we make is Organic and Non-GMO so it’s better for you and better for the planet.",
            icon_image: require("../../assets/Images/images_1-removebg-preview.png"),
            bgImage: require("../../assets/Images/close-up-basket-vegetables.jpg")
        },
        {
            title: "Regenerative Agriculture",
            description: "Today our sustainable supply chain is made up of 32,000 acres of land that practice regenerative farming.",
            icon_image: require("../../assets/Images/images_2-removebg-preview.png"),
            bgImage: require("../../assets/Images/smart-agriculture-iot-with-hand-planting-tree-background.jpg")
        },
        {
            title: "Fair Trade",
            description: "Our collective of over 10,000 farmer partners are paid fair trade wages and have improved wage stability and transparency.",
            icon_image: require("../../assets/Images/images_3-removebg-preview.png"),
            bgImage: require("../../assets/Images/close-up-person-with-green-apple.jpg")
        },
        {
            title: "Preserves Trees",
            description: "We’ve helped conserve over 6 Million trees. Bio-diversity is essential to sustainability and trees are a key part of that.",
            icon_image: require("../../assets/Images/images_4-removebg-preview.png"),
            bgImage: require("../../assets/Images/pexels-akilmazumder-1072824.jpg")
        },
        {
            title: "Saves Water",
            description: "Annually our production saves 5 billion liters of freshwater compared to the same production size of cane sugar.",
            icon_image: require("../../assets/Images/images_5-removebg-preview.png"),
            bgImage: require("../../assets/Images/images.jpg")
        }
    ];

    return (
        <>
            <div className='container mb-5'>
                <div className='text-center'><Tittles ltitle={"Rooted in Impact"} /></div>
                <div className='row mt-3'>
                    {services.map((service, index) => (
                        <div className='col-12 col-lg-4 col-md-6 p-3' key={index}>
                            <div
                                className='Service_card h-100 rounded-4 position-relative p-1 overflow-hidden'>
                                <div
                                    className="bg-image position-absolute"
                                    style={{
                                        backgroundImage: `url(${service.bgImage})`,
                                        boxShadow: "inset 0px 0px 140px 1200px rgba(116, 0, 0, 0.42)",
                                        top: "0", bottom: "0", right: "0", left: "0", backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat", backgroundPosition: "center", transition: "all 0.5s ease-in-out",
                                        zIndex: "0"
                                    }}
                                />
                                <div className='position-relative z-1 text-white p-5'>
                                    <h4 className='fw-bold'>{service.title}</h4>
                                    <p className='pera fw-medium mt-3 mb-5' style={{ wordBreak: "break-all" }}>
                                        {service.description}
                                    </p>
                                </div>
                                <div className='Service_icon_wrapper'>
                                    <img
                                        src={service.icon_image}
                                        alt={service.title}
                                        className="Service_icon bg-white p-3"
                                        style={{ width: "70px", height: "70px", objectFit: "contain" }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AboutImpact