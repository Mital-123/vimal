import HOC from '../HOC'
import "../../assets/Css/ContactUs.css";
import ContactInfo from './ContactInfo'

function ContactPage() {
    return (
        <>
            <ContactInfo />
        </>
    )
}

export default HOC(ContactPage)