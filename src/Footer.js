import FooterLinks from './FooterLinks';
import {SocialIcon} from 'react-social-icons';
import littlelemonicon from './assets/images/little_lemon_logo(lg).jpg'
import { Routes, Route, Link } from "react-router-dom";

function Footer () {

    const doormatNavLinks = [<Link to="/" className="footerlink">Home</Link>, <Link to="/" className="footerlink">About</Link>, <Link to="/menu" className="footerlink">Menu</Link>, <Link to="/booking" className="footerlink">Reservations</Link>, <Link to="/" className="footerlink">Order Online</Link>, <Link to="/" className="footerlink">Login</Link>];
    const contactsLinks = ['Address: 123 Anyway St. Chicago IL 12345', 'Phone: (888) 555-1234', 'Email: info@littlelemon.com'];
    const socialMediaLinks = [<SocialIcon url="https://twitter.com" />, <SocialIcon url="https://facebook.com" />];

    return (
    <div className='footer'>
        <img src={littlelemonicon} alt=''/>
        <FooterLinks items={doormatNavLinks}/>
        <FooterLinks items={contactsLinks}/>
        <FooterLinks items={socialMediaLinks}/>
    </div>
    );
}

export default Footer;