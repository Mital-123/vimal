import HOC from '../HOC'
import "../../assets/Css/ContactUs.css";
// import ContactInfo from './ContactInfo'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import ButtonCom from '../ButtonCom';
import Tittles from '../Tittles';

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
  const mobileRegex = /^[0-9]{10,15}$/;

  const validateField = (name, value) => {
    let error = '';

    if (name === 'user_name' && !value.trim()) {
      error = 'Name is required';
    }

    if (name === 'user_email') {
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!emailRegex.test(value)) {
        error = 'Invalid email format';
      }
    }

    if (name === 'user_mobile') {
      if (!value.trim()) {
        error = 'Mobile number is required';
      } else if (!mobileRegex.test(value)) {
        error = 'Invalid mobile number';
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
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', marginTop: '78px' }} className="landingimg">
        <img
          src="https://www.oregon.gov/employ/Agency/PublishingImages/ContactUs-2024.jpg"
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
          className="lendingshadow"
        ></div>
      </div>


      {/* <ContactInfo /> */}

      {/* haldiram's contact page */}

      <div className='contactinfo_bg mt-5 pt-5 container overflow-hidden'>
        <div className='text-center col-md-10 col-11 mx-auto'>
          <div className=' ps-2 mb-4'>
            <Tittles stitle={"Contact Us"} />
          </div>
          <p className='mb-0' style={{ fontSize: "15px", fontWeight: 100 }}>We are always happy to hear from you! For any queries or concerns, please feel free to write to us. Our dedicated customer service team is committed to providing prompt and helpful responses.</p>
          <p className='mb-0' style={{ fontSize: "15px", fontWeight: 100 }}>Whether you have questions about our products, services, or anything else, we strive to get back to you at the earliest opportunity.
          </p>
          <p className='mb-0' style={{ fontSize: "15px", fontWeight: 100 }}>
            Your satisfaction is our priority, and we value your feedback. Reach out to us via email or through our contact form, and we will ensure that your inquiry is addressed swiftly and effectively. Thank you for choosing to connect with us!
          </p>
        </div>
        <div className='col-lg-10 mx-auto my-5'>
          <div className='row align-items-start justify-content-center h-100'>
            <div className='col-md-6 col-11'>
              <div>
                <form ref={form} onSubmit={handleSubmit} noValidate>
                  <div className=''>
                    <label className='mb-3'>Name*</label><br />
                    <input className='col-12 py-1 inputplaceholder rounded-0 ps-2 border-1' type="text" placeholder='  Please Enter Your Name' name="user_name" value={formData.user_name} onChange={handleChange} />
                    {errors.user_name && <span style={{ color: 'red' }}>{errors.user_name}</span>}
                  </div>

                  <div className=''>
                    <label className='my-3'>Email ID*</label><br />
                    <input className='col-12 py-1 inputplaceholder rounded-0 ps-2 border-1' type="email" placeholder='  Please Enter Your Email Id' name="user_email" value={formData.user_email} onChange={handleChange} />
                    {errors.user_email && <span style={{ color: 'red' }}>{errors.user_email}</span>}
                  </div>

                  <div className=''>
                    <label className='my-3'>Mobile Number*</label><br />
                    <input className='col-12 py-1 inputplaceholder rounded-0 ps-2 border-1' type="tel" placeholder='  Please Enter Your Mobile No' name="user_mobile" value={formData.user_mobile} onChange={handleChange} />
                    {errors.user_mobile && <span style={{ color: 'red' }}>{errors.user_mobile}</span>}
                  </div>

                  <div>
                    <label className='mb-2'>Message</label><br />
                    <textarea className='col-12 inputplaceholder rounded-0 ps-2 pt-3' rows={3} name="message" placeholder='  Please Enter Your Message' value={formData.message} onChange={handleChange} />
                  </div>

                  <button className='mt-2 border-0 bg-transparent' type='submit'>
                    <ButtonCom btn="SUBMIT" />
                  </button>
                </form>

                {status && <p style={{ marginTop: '10px', color: status.startsWith('✅') ? 'green' : 'red' }}>{status}</p>}
              </div>
            </div>
            <div className='col-md-6 col-11'>
              <div style={{ width: '100%', height: '400px' }}>
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
              <div className='mt-3'>
                <div>
                  <p className='mb-0 fw-bold'>ADDRESS</p>
                  <p className='mb-0' style={{ fontSize: "15px", fontWeight: 100 }}>
                    Plot No. 145/146, Haldiram House, Bhandara Road Chowk, Old Pardi Naka, Surya Nagar, Nagpur, Maharashtra 440035.
                  </p>
                </div>
                <div>
                  <div className="d-flex justify-content-evenly mt-1">
                    <div>
                      <p className='mb-0 fw-bold' style={{ fontSize: "15px", fontWeight: 100 }}>EMAIL US:</p>
                      <p className='mb-0'>
                        <a href="mailto:info@vimalagro.com" className='text-decoration-none' style={{ color: "#0070b6" }}>info@vimalagro.com</a> <br />
                        <a href="mailto:sales@vimalagro.com" className='text-decoration-none' style={{ color: "#0070b6" }}>sales@vimalagro.com</a>
                      </p>
                    </div>
                    <div>
                      <p className='mb-0 fw-bold' style={{ fontSize: "15px", fontWeight: 100 }}>CALL US:</p>
                      <p className='mb-0'>
                        <a href="tel:2622222759" className='text-decoration-none' style={{ color: "#0070b6" }}>(+91) 2622 222759</a>
                      </p>
                    </div>
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