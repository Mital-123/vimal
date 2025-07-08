import React from 'react'

import { FaPlayCircle } from 'react-icons/fa'
import { HiLightBulb } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { MdDiamond } from 'react-icons/md';
import Tittles from '../Tittles';

function MissionVision() {
    return (
        <>
        <div className="overflow-hidden">
                <div className='vision_mision_bg'>
                <div className='container '>
                    <div className='row main_vi_mi'>
                        <div className='col-12 col-lg-6 col-md-6 mb-5'>
                            <div className='text-white brdstart'>
                                <Tittles stitle={"Our Value"} ltitle="Offering a plethora of products, Vimal Agro Products Pvt Ltd. has now into a highly reputed food giant." />
                                <div className='pera text-white pt-2'> Ranging from packaged condiments, to ready to cook, to ready to eat, the company manufactures it all. With constant strives towards excellence, and the end goal of multifaceted growth, the company set up an ultra modern manufacturing unit at Bardoli, Gujarat.</div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6 mb-5 d-flex align-items-center justify-content-center'>
                            <div className='text-center'>
                                <Link to={"https://www.youtube.com/watch?v=UeUw2duQBV8&t=7s"} target='_blank' className='text-white display-3'>
                                    <FaPlayCircle className='play_Circle_icon' />
                                </Link>
                                <div className='text-white mt-3'>PLAY VIDEO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-5 '>
                <div className='container'>
                    <div className='row mainViMiSec'>
                        <div className='col-12 col-lg-6 col-md-6' data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                            <div className='Main_ViMi_box shadow bg-white rounded-3 py-4 px-5  h-100'>
                                <div className='Vi_Mi-shadow'><HiLightBulb className='vision_mission_icon p-1' /></div>
                                <div className='Vi-Mi_Tittle fstyle mt-4 mb-2 fs-4 fw-bold'>Our Vision</div>
                                <div className='text-secondary pera' style={{ wordBreak: "break-all" }}> Being a production hub at a distance of mere 250 kms from Mumbai, the Commercial Capital of the country, Vimal Agro has always had the ease of doing business throughout the world. Exporting over international quality products to the world, the brand always keeps looking for ways to expand their range and provide the flavour of Nostalgia and the Swad of Indian food to people across continents</div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6' data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                            <div className='Main_ViMi_box shadow bg-white rounded-3 py-4 px-5   h-100'>
                                <div className='Vi_Mi-shadow'><MdDiamond className='vision_mission_icon p-1' /></div>
                                <div className='Vi-Mi_Tittle fstyle mt-4 mb-2 fs-4 fw-bold'>Our Mission</div>
                                <div className='text-secondary pera' style={{ wordBreak: "break-all" }}>At Vimal, health taste and quality have been paramount since forever. Be it canned vegetables, fruit pulps or juices, pickles or chutneys, papad or just ready to eat dishes, the brand has ensured strict quality measures, proper abiding of industry and standards guidelines without compromising on the taste at all. State of the art machinery combined with the richness of traditional Indian recipes dipped in organic preservatives, creates magic for all taste buds.

</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MissionVision