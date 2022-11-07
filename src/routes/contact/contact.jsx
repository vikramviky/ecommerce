import React from "react";
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MailIcon from '@mui/icons-material/Mail';
import ContactForm from "./ContactForm";
import './contact.style.scss';


const Contact = () => {
    return(
        <div>
            <h2 className="static-title">Contact Us</h2>
            <div className="centeralign">
                <h1 className="title-contact text-center">Get in Touch!</h1>
                <p>Whether for feedbacks, inquires or sales issues, we would love to hear from you!</p>
                <p>Here’s how you can contact us...</p>
            </div>
            <div className="contentgrids">
                    <div className="details text-center">
                        <div className="akicon">
                            <PhoneAndroidOutlinedIcon width={400} height={200}/>
                        </div>
                        <h4>CONTACT CUSTOMER SUPPORT</h4>
                        <p style={{ color:"#696969" }}>Need help with your order or purchase support, were here for you!</p>
                        <a style={{ color:"#696969" }} href="tel:00 1234567" className="gray-phone">Give us a call at 00 1234567</a>
                    </div>
                    <div className="details text-center">
                        <div className="icon">
                            <FmdGoodIcon/>
                        </div>
                        <h4>FIND OUR LOCATION</h4>
                        <p style={{ color:"#696969" }}>Thanjavur</p>
                        <p style={{ color:"#696969" }}>Tamil Nadu</p>
                    </div>
                    <div className="details text-center">
                        <div className="icon">
                            <MailIcon/>
                        </div>
                            <h4>EMAIL</h4>
                            <a style={{ color:"#696969" }} href="mailto:customer@gmail.com">customer@gmail.com</a>
                        </div>
                    </div>
                    <div className="centeralign">
                        <ContactForm/>
                    </div>
        </div>
    )
}

export default Contact;

