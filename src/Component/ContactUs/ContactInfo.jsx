import React from 'react'
import { LiaMailBulkSolid } from 'react-icons/lia'
import { LuPhoneCall } from 'react-icons/lu'
import { SlLocationPin } from 'react-icons/sl'
import ButtonCom from '../ButtonCom'

function ContactInfo() {
    return (
        <>
            <div className='contactinfo_bg'>
                <div className='container'>
                    <div className='main-contact row'>
                        <div className='col-12 col-lg-4 col-md-6 p-3'>
                            <div className='Contactus_main h-100 text-center p-5'>
                                <div className="Contact-iconbg mx-auto d-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: '100px', height: '100px' }}>
                                    <LuPhoneCall className="Contact_icon darkcolor" style={{ fontSize: "45px" }} />
                                </div>
                                <h3 className="Contact_tittle fw-bold text-medium my-3">Phone No.</h3>
                                <div className='Contact_cont pera'>(+91) 12345 67890</div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-6 p-3'>
                            <div className='Contactus_main_add h-100 text-center p-5 move-up_lg'>
                                <div className="Contact-iconbg_add mx-auto d-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: '100px', height: '100px' }}>
                                    <SlLocationPin className="Contact_icon_add darkcolor" style={{ fontSize: "45px" }} />
                                </div>
                                <h3 className="Contact_tittle_add fw-bold text-medium my-3">Address</h3>
                                <div className='Contact_cont_add pera'>172, RJD Textile Park, Hazira Road, Bhatha, Surat - 395009, Gujarat.</div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-6 p-3'>
                            <div className='Contactus_main h-100 text-center p-5'>
                                <div className="Contact-iconbg mx-auto d-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: '100px', height: '100px' }}>
                                    <LiaMailBulkSolid className="Contact_icon darkcolor" style={{ fontSize: "45px" }} />
                                </div>
                                <h3 className="Contact_tittle fw-bold text-medium my-3">E-mail</h3>
                                <div className='Contact_cont pera'>abcdef@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className='row mt-3 mt-lg-4 mb-0 mb-lg-3 p-3 gx-lg-5'>
                        <div className='col-12 col-lg-6 mb-4'>
                            <div className='h-100 p-4 rounded-2 bg-white shadow border'>
                                <h3 className='fw-bold'>Get In Touch With Us</h3>
                                <div>
                                    <div className='w-100'>
                                        <label htmlFor="">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className='d-block w-100 rounded mt-1 py-1 px-2 border border-1 border-secondary'
                                            style={{ outline: "none" }}
                                            id=""
                                        />
                                    </div>
                                    <div className='d-lg-flex d-md-flex gap-3'>
                                        <div className='w-100 w-lg-50 w-md-50 my-2'>
                                            <label htmlFor="">E-mail</label>
                                            <input
                                                type="text"
                                                name="email"
                                                className='d-block w-100 rounded mt-1 py-1 px-2 border border-1 border-secondary'
                                                style={{ outline: "none" }}
                                                id=""
                                            />
                                        </div>
                                        <div className='w-100 w-lg-50 w-md-50 my-2'>
                                            <label htmlFor="">Phone No.</label>
                                            <input
                                                type="number"
                                                name="phoneno"
                                                className='d-block w-100 rounded mt-1 py-1 px-2 border border-1 border-secondary'
                                                style={{ outline: "none" }}
                                                id=""
                                            />
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <label htmlFor="">Message</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            placeholder='Write Your Message Here...'
                                            className='d-block w-100 rounded mt-1 py-1 px-2 border border-1 border-secondary'
                                            style={{ outline: "none" }}
                                            id=""
                                        ></textarea>
                                    </div>
                                    <div className='mt-2'>
                                        <ButtonCom btn="Send Message" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className='col-12 col-lg-6 mb-4'>
                            <div className='h-100 rounded-2 p-2' style={{ border: "3px solid var(--red)" }}>
                                <iframe
                                    title='google map'
                                    className='rounded-2 contact_map'
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29752.700882695055!2d72.8291723!3d21.228374199999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fdfc718eb4b%3A0xcf5efb27dfe048c5!2sBelpatra%20Pharmachem!5e0!3m2!1sen!2sin!4v1740025356298!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactInfo