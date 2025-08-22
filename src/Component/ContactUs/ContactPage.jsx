import HOC from '../HOC';
import "../../assets/Css/ContactUs.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Tittles from '../Tittles';
import { MdMarkEmailRead } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';

function ContactPage() {

  const form = useRef();
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  const validateField = (name, value) => {
    let error = '';

    if (name === 'user_name') {
      if (!value.trim()) {
        error = 'Name is required!';
      } else if (!/^[A-Za-z\s]+$/.test(value)) {
        error = 'Name must contain only alphabet characters.';
      }
    }

    if (name === 'user_email') {
      if (!value.trim()) {
        error = 'Email is required!';
      } else if (!emailRegex.test(value)) {
        error = 'Invalid e-mail.';
      }
    }

    if (name === 'user_mobile') {
      if (!value.trim()) {
        error = 'Mobile number is required!';
      } else if (!mobileRegex.test(value)) {
        error = 'Invalid mobile number.';
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate and remove error if correct
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus('Please fix the errors above.');
      return;
    }

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          form.current.reset();
          setFormData({
            user_name: '',
            user_email: '',
            user_mobile: '',
            message: ''
          });
          setErrors({});
        },
        () => {
          setStatus('❌ Failed to send message. Try again.');
        }
      );
  };

  return (
    <>
      <div className="landingimg_contact">
        <img
          src="https://www.oregon.gov/employ/Agency/PublishingImages/ContactUs-2024.jpg"
          alt=""
          className="landingimg-img_contact"
        />
        <div className="lendingshadow_contact"></div>
      </div>

      <div className="contactinfo_bg" >
        <div className='container overflow-hidden'>
          <div className='text-center col-md-10 col-11 mx-auto'>
          </div>
          <div className='col-lg-10 mx-auto my-2 my-lg-5' >
            <div className='row justify-content-center h-100' >
              <div className='col-md-6 col-11' style={{ backgroundColor: "var(--ofwhite)" }}>
                <div className='h-100'>
                  <form ref={form} onSubmit={handleSubmit} noValidate className='p-2 p-lg-5 py-3 py-lg-5'>

                    <div className='ftittle fw-bold' style={{ color: "var(--red)" }}>
                      Enquiry Form
                    </div>
                    <div className='mt-2'>
                      <label className='my-1'>Name</label><br />
                      <input
                        className='col-12 py-1 inputplaceholder rounded-0 ps-2 border-1'
                        type="text"
                        placeholder='  Please Enter Your Name'
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                      />
                      <div style={{ minHeight: '25px' }}>
                        {errors.user_name && <span style={{ color: 'red', fontSize: "14px" }}>{errors.user_name}</span>}
                      </div>
                    </div>

                    <div className=''>
                      <label className='my-1'>Email ID</label><br />
                      <input
                        className='col-12 py-1 inputplaceholder rounded-0 ps-2 border-1'
                        type="email"
                        placeholder='  Please Enter Your Email Id'
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                      />
                      <div style={{ minHeight: '25px' }}>
                        {errors.user_email && <span style={{ color: 'red', fontSize: "14px" }}>{errors.user_email}</span>}
                      </div>
                    </div>

                    <div className=''>
                      <label className='my-1'>Mobile Number</label><br />
                      <input
                        className='col-12 py-1 inputplaceholder rounded-0 ps-2 border-1'
                        type="tel"
                        placeholder='  Please Enter Your Mobile No'
                        name="user_mobile"
                        value={formData.user_mobile}
                        onChange={handleChange}
                      />
                      <div style={{ minHeight: '25px' }}>
                        {errors.user_mobile && <span style={{ color: 'red', fontSize: "14px" }}>{errors.user_mobile}</span>}
                      </div>
                    </div>

                    <div className=''>
                      <label className='my-1'>Message</label><br />
                      <textarea
                        className='col-12 inputplaceholder rounded-0 ps-2 pt-3'
                        rows={3}
                        name="message"
                        placeholder='  Please Enter Your Message'
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <button type='submit' className="mt-3 c-button c-button--gooey py-1 px-3 ext-decoration-none fw-bold fstyle overflow-hidden">SUBMIT
                        <div className="c-button__blobs">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </button>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "block", height: 0, width: "0" }} >
                        <defs>
                          <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                            <feBlend in="SourceGraphic" in2="goo"></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </form>

                  {/* {status && <p style={{ marginTop: '10px', color: status.startsWith('✅') ? 'green' : 'red' }}>{status}</p>} */}
                </div>
              </div>

              <div className='col-md-6 col-11'>
                <div className="h-100 ps-0 ps-lg-2">
                  <div className='mb-1'>
                    <Tittles stitle={"Contact Us"} />
                  </div>
                  <div className="ps-2">

                    <div className="ftittle" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">How We Can Help You ?</div>
                    <div className=" pera">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, perferendis recusandae eum aperiam numquam ipsum modi tempora voluptates quaerat ipsam?
                    </div>
                  </div>

                  <div style={{ height: "80px", width: "250px" }}>
                    <img src={require("../../assets/Images/devide_image_jpg.jpg")} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                  </div>
                  <div className="row g-1">
                    <div className="col-6 ">
                      <div className="h-100">
                        <div className='shadow rounded-4 text-white' style={{ backgroundColor: "var(--red)" }}>
                          <div className='d-block row d-md-flex align-items-center justify-content-center text-center text-md-start p-3'>
                            <div className='col-12 col-lg-4 fw-bold  countericoncontact text-center'><MdMarkEmailRead /></div>
                            <div className='col-12 col-lg-8 ps-0 pe-0'>
                              <div >
                                <h2 className='countnumber fw-bold fs-5 text-lg-start text-center'> Email</h2></div>
                              <div className=' pera text-lg-start text-center'>info@vimalagro.com</div>
                              <div className=' pera text-lg-start text-center'>sales@vimalagro.com</div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-6">
                      <div className="h-100">
                        <div className='shadow rounded-4 text-white' style={{ backgroundColor: "var(--red)" }}>
                          <div className='d-block row d-md-flex align-items-center justify-content-center text-center text-md-start p-3'>
                            <div className='col-12 col-lg-4 fw-bold  countericoncontact text-center '><BiSolidPhoneCall /></div>
                            <div className='col-12 col-lg-8 ps-0 pe-0'>
                              <div >
                                <h2 className='countnumber fw-bold fs-5 text-lg-start text-center'> Contact</h2></div>
                              <div className=' pera text-lg-start text-center'>(+91) 2622 222759</div>
                              <div className=' pera text-lg-start text-center'>(+91) 2622 222759</div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className='mt-4 shadow-lg border' style={{ height: 300 }}>
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7443.718644557049!2d73.094865!3d21.118174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05da0941a2e2f%3A0x50dfb1fbcae85907!2sVimal%20Agro%20Products%20Private%20Limited!5e0!3m2!1sen!2sus!4v1754291222291!5m2!1sen!2sus"
                      width="100%"
                      height='100%'
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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

export default HOC(ContactPage)