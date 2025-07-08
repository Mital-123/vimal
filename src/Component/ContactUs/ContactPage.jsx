import HOC from '../HOC'
import "../../assets/Css/ContactUs.css";
import ContactInfo from './ContactInfo'

function ContactPage() {
    return (
        <>
    <div style={{ position: 'relative', width: '100%', height: '60vh', overflow: 'hidden' }}>
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
  ></div>
</div>


            <ContactInfo />
        </>
    )
}

export default HOC(ContactPage)